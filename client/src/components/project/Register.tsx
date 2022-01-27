import { Field, Formik, Form } from 'formik';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '../layout';
import registerStyles from './register.module.scss';
import mainStyles from './main.module.scss';
import * as yup from 'yup';
import formValues from '../../constants/fromValues';
import { CreateUser } from '../../interfaces';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/users';
import { Loading, Error } from '../../hooks';
import { useHistory } from "react-router-dom"
import * as Routes from '../../routes/index'
import { userInfo } from 'os';
interface Props {

}

// import React from 'react';
// const Container = () => <SolarSystemLoading />;
// export default Container; 
export const Register = (props: Props) => {

  const [stepOneOpen, setStepOneOpen] = useState(true);
  const [stepTwoOpen, setStepTwoOpen] = useState(true);
  const [pictureValid, setPictureValid] = useState("");
  const [stepThreeOpen, setStepThreeOpen] = useState(true);
  const [valid, setIsValid] = useState(false);
  const [initials, setInitials] = useState("");
  const history = useHistory();
  const [handleGqlError] = Error();
  const [createUser, { data, loading, error }] = useMutation<CreateUser>(CREATE_USER, { onError: handleGqlError, });

  const setStateStepOne = () => {
    setStepOneOpen(!stepOneOpen)
    setStepTwoOpen(!stepTwoOpen)
  }

  const setStateTwoOne = () => {
    setStepTwoOpen(!stepTwoOpen)
    setStepThreeOpen(!stepThreeOpen)
  }

  const setStateThreeOne = () => {
    setStepTwoOpen(!stepTwoOpen)
    setStepThreeOpen(!stepThreeOpen)
  }

  const getInitials = (name: any) => {
    let initials = name.split(' ');
    if (initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
    } else {
      initials = name.substring(0, 1);
    }
    setInitials(initials.toUpperCase())

    return initials.toUpperCase();
  }

  useEffect(() => {
    if (valid && data?.createUser) {
      history.push(Routes.TEAM)
      setIsValid(false)
    }
  }, [valid, data, pictureValid]);

  while (loading) {
    console.log("loading");

    return <><Loading /><p>Creating your account</p></>
  }

  while (error) {
    // document.location.reload()
    console.log(error);
    return <><p>Something went wrong</p></>
  }



  const validationSchema = yup.object({
    firstName: yup.string().required("Voornaam is verplicht").min(formValues.min.firstName).max(formValues.max.firstName),
    lastName: yup.string().required("Achternaam is verplicht").min(formValues.min.lastName).max(formValues.max.lastName),
    email: yup.string().email().required("Email is verplicht").min(formValues.min.email).max(formValues.max.email),
    password: yup.string().required("Wachtwoord is verplicht").min(formValues.min.password).max(formValues.max.password),
    passwordCheck: yup.string().oneOf([yup.ref('password'), null], 'Wachtwoorden komen niet overeen').required("Wachtwoord herhalen is verplicht"),
    picture: yup.string().url(),
    experience: yup.string().required()
  })

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCheck: "",
        picture: "",
        experience: "",
        role: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(user, { setSubmitting }) => {
        setSubmitting(true);
        if (user && user.password === user.passwordCheck) {
          setIsValid(true)
          setSubmitting(false);
          console.log(user)
          createUser({
            variables: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: user.password,
              devType: user.experience,
              role: "superUser"
            }
          })
        }
      }}>
      {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <div className={registerStyles.register}>
          <h1>Welcome op KnowID</h1>
          <h2> {values.firstName ? "Dag " + values.firstName : ""} {values.lastName ? values.lastName + " ! 🙌" : ""}</h2>
          <Form className={registerStyles.form}>
            <section className={stepOneOpen ? `${registerStyles.sectionOpen}` : `${registerStyles.sectionClosed}`}>
              <h3>Om te beginnen hebben we wat basis informatie nodig van jou,</h3>
              <h3>Om dit gemakkelijk te maken hebben we het in 3 snelle stappen opgedeelt</h3>
              <div>
                <div className={registerStyles.fieldWrapper}>
                  <Field label="Voornaam" className={registerStyles.field} name="firstName" type="name" as={TextField} />
                  <h5 className={!errors.firstName ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.firstName}</h5>
                </div>

                <div className={registerStyles.fieldWrapper}>
                  <Field label="achternaam" className={registerStyles.field} name="lastName" type="name" as={TextField} />
                  <h5 className={!errors.lastName ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.lastName}</h5>
                </div>

                <div className={registerStyles.fieldWrapper}>
                  <Field label="Email" className={registerStyles.field} name="email" type="email" as={TextField} />
                  <h5 className={!errors.email ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.email}</h5>
                </div>

                <div className={`${registerStyles.passwordFields} ${registerStyles.fieldWrapper}`} >
                  <Field label="wachtwoord" className={registerStyles.field} name="password" type="password" as={TextField} />
                  <h5 className={!errors.password ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.password}</h5>
                </div>

                <div className={` ${registerStyles.passwordFields} ${registerStyles.fieldWrapper}`} >
                  <Field className={registerStyles.field} label="herhaal wachtwoord" name="passwordCheck" type="password" as={TextField} />
                  <h5 className={!errors.passwordCheck ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.passwordCheck}</h5>
                </div>
                <div className={registerStyles.buttons}>
                  <Button onClick={setStateStepOne} content={"Next step"} type={'button'} linkTo={''} disabled={false} />

                </div>
                <div className={registerStyles.progressDots}>
                  <div className={`${registerStyles.progressDot} ${registerStyles.progressDotOne}`}></div>
                  <div className={`${registerStyles.progressDot}`}></div>
                  <div className={`${registerStyles.progressDot}`}></div>
                </div>
              </div>
            </section>
            {/* {JSON.stringify(values)}z */}
            <section className={!stepTwoOpen ? `${registerStyles.sectionOpen}` : `${registerStyles.sectionClosed}`}>
              <h2>Nu wat over jou</h2>
              <section>

                <div className={registerStyles.fieldWrapper}>
                  <figure className={registerStyles.picture}>
                    {values.picture ?
                      <img src={values.picture} />
                      : <div className={registerStyles.noPicture}>{getInitials(values.firstName)}{getInitials(values.lastName)}</div>}
                  </figure>
                  <Field label="Foto (in url vorm)" className={registerStyles.field} name="picture" type="name" as={TextField} />

                </div>
                <h2>I am a:</h2>
                <div className={registerStyles.fieldWrapper}>
                  <div className={registerStyles.selection} >
                    <div>
                      <label htmlFor="Senior">Senior</label>
                      <Field label="Senior" default value="Senior" name="experience" type="radio" />
                    </div>

                    <div>
                      <label htmlFor="Senior">Medior</label>
                      <Field label="Medior" value="Medior" name="experience" type="radio" />
                    </div>

                    <div>
                      <label htmlFor="Senior">Junior</label>
                      <Field label="Junior" value="Junior" name="experience" type="radio" />

                    </div>
                  </div>
                </div>

              </section>

              <div className={registerStyles.buttons}>
                <Button onClick={setStateStepOne} content={"vorige"} type={'button'} linkTo={''} disabled={false} />
                <Button onClick={setStateTwoOne} content={"volgende"} type={'button'} linkTo={''} disabled={false} />
              </div>
              <div className={registerStyles.progressDots}>
                <div className={`${registerStyles.progressDot}`}></div>
                <div className={`${registerStyles.progressDot} ${registerStyles.progressDotTwo}`}></div>
                <div className={`${registerStyles.progressDot}`}></div>
              </div>
            </section>

            <section className={!stepThreeOpen ? `${registerStyles.sectionOpen}` : ` ${registerStyles.sectionClosed}`}>
              <h2 className={registerStyles.header}>Overzicht details</h2>
              <section className={registerStyles.overview}>
                <ul className={registerStyles.overview}>

                  <li>
                    <p className={registerStyles.overviewItem}>
                      <figure className={registerStyles.picture}>
                        {values.picture ?
                          <img src={values.picture} />
                          : <div className={registerStyles.noPicture}>{getInitials(values.firstName)}{getInitials(values.lastName)}</div>}
                      </figure>
                    </p>
                  </li>

                  <li>
                    <p className={registerStyles.overviewItem}>
                      <span>Voornaam:</span>
                      <span className={errors.firstName ? mainStyles.registerErrors : ""}> {errors.firstName ? " Voornaam is verplicht en is niet ingevuld." : values.firstName ? values.firstName : " Er is iets fout gegaan, ben je zeker dat dit veld is ingevuld?"}</span>
                    </p>
                  </li>

                  <li className={registerStyles.a}>
                    <p className={registerStyles.overviewItem}>
                      <span>Achternaam:</span>
                      <span className={errors.lastName ? mainStyles.registerErrors : ""}>{errors.lastName ? "Achternaam is verplicht en is niet ingevuld." : values.lastName ? values.lastName : "Er is iets fout gegaan, ben je zeker dat dit veld is ingevuld?"}</span>
                    </p>
                  </li>

                  <li className={registerStyles.a}>
                    <p className={registerStyles.overviewItem}>
                      <span>email:</span>
                      <span className={errors.email ? mainStyles.registerErrors : ""}>{errors.email ? "Email is verplicht en is niet ingevuld." : values.email ? values.email : "Er is iets fout gegaan, ben je zeker dat dit veld is ingevuld?"}</span>
                    </p>
                  </li>

                  <li className={registerStyles.a}>
                    <p className={registerStyles.overviewItem}>
                      <span className={errors.password ? mainStyles.registerErrors : ""}>{errors.password ? "wachtwoord is verplicht en is niet ingevuld." : ""}</span>
                    </p>
                  </li>

                  <li className={registerStyles.a}>
                    <p className={registerStyles.overviewItem}>
                      <span className={errors.passwordCheck ? mainStyles.registerErrors : ""}>{errors.passwordCheck ? "wachtwoorden kloppen niet." : ""}</span>
                    </p>
                  </li>

                </ul>
              </section>
              <div className={registerStyles.buttons}>
                <Button onClick={setStateThreeOne} content={"Vorige"} type={undefined} linkTo={''} disabled={false} />
                <Button content={"Account aanmaken"} type={undefined} linkTo={''} disabled={isSubmitting} />
              </div>
              <div className={registerStyles.progressDots}>
                <div className={`${registerStyles.progressDot}`}></div>
                <div className={`${registerStyles.progressDot}`}></div>
                <div className={`${registerStyles.progressDot} ${registerStyles.progressDotThree}`}></div>
              </div>
            </section>
          </Form>
        </div>
      )}
    </Formik>
  )
}