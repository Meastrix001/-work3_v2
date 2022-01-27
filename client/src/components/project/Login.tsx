import React, { useState, useEffect } from 'react';
// import loginStyles from './home.module.scss';
import mainStyles from './main.module.scss';
import { Field, Formik, Form } from 'formik';
import { Button, TextField } from '../layout';
import loginStyles from './login.module.scss';
import * as yup from 'yup';
import formValues from '../../constants/fromValues';
import { UserData, UserIdVars } from '../../interfaces';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/users';
import { Loading } from '../../hooks';

import { useHistory } from "react-router-dom";
import * as Routes from '../../routes/index';
import * as bcrypt from 'bcryptjs'

interface Props {

}

const validationSchema = yup.object({
    email: yup.string().email().required("Email is verplicht").min(formValues.min.email).max(formValues.max.email),
    password: yup.string().required("Wachtwoord is verplicht").min(formValues.min.password).max(formValues.max.password),
})

export const Login = (props: Props) => {
    const [valid, setIsValid] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [loginValid, setLoginValid] = useState(false);
    const [passwordStatus, setPasswordStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [didTrigger, setDidTrigger] = useState(false);
    let history = useHistory();

    //fetch USER
    const [findUser, { data, loading, error }] = useLazyQuery<UserData, UserIdVars>(GET_USER);

    useEffect(() => {
        console.log("finding user")

        if (valid && data && data.findByArgs) {
            console.log("user found")
            setPasswordStatus(false)
            checkPasswords(data.findByArgs.password);
        };

        if (error) {
            console.log("error", error)
            setEmailStatus(true)
        }

    }, [data, error, loading, didTrigger])

    while (loading) {
        return <><Loading /><p>Looking for your account</p></>
    }

    const handleClick = () => {
        setDidTrigger(!didTrigger)
    }

    const checkPasswords = async (DBPassword: string) => {
        console.log(1111)
        const result = await bcrypt.compare(passwordValue, DBPassword);
        if (result) {
            setLoginValid(true)
            setIsValid(false)
            setPasswordStatus(false)
            // history.push(Routes.TEAM)
        } else {
            setPasswordStatus(true)
        }
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}

            validationSchema={validationSchema}

            onSubmit={(user, { setSubmitting }) => {
                setSubmitting(true);
                if (user) {
                    setIsValid(true)
                    setSubmitting(false);
                    setPasswordValue(user.password);
                    findUser({
                        variables: {
                            email: user.email
                        }
                    })
                }

            }}>
            {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                <div className={loginStyles.login}>
                    <h1>Welcome terug!</h1>
                    {data?.findByArgs && loginValid ? <h1>{data.findByArgs.firstName}</h1> : ""}
                    <Form className={loginStyles.form}
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <section>
                            <div>
                                <div className={loginStyles.fieldWrapper}>
                                    <Field label="Email" className={loginStyles.field} name="email" type="email" as={TextField} />
                                    <h5 className={!emailStatus ? `${mainStyles.hidden}` : `${mainStyles.loginErrors}`}>Email klopt niet</h5>
                                    <h5 className={!errors.email ? `${mainStyles.hidden}` : `${mainStyles.loginErrors}`}>{errors.email}</h5>
                                </div>

                                <div className={`${loginStyles.passwordFields} ${loginStyles.fieldWrapper}`} >
                                    <Field label="wachtwoord" className={loginStyles.field} name="password" type="password" as={TextField} />
                                    <h5 className={!passwordStatus ? `${mainStyles.hidden}` : `${mainStyles.loginErrors}`}>Wachtwoord klopt niet</h5>
                                    <h5 className={!errors.password ? `${mainStyles.hidden}` : `${mainStyles.loginErrors}`}>{errors.password}</h5>
                                </div>

                            </div>
                        </section>

                        <Button onClick={handleClick} linkTo={""} disabled={isSubmitting} type="submit" content="Inloggen" />
                    </Form>
                </div>
            )}
        </Formik>
    )
}