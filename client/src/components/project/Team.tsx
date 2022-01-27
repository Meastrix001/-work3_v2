import { useQuery, useMutation } from '@apollo/client';
import { Field, Formik, Form } from 'formik';
import React, { useState, useEffect } from 'react'
import teamStyles from "./team.module.scss";
import { Button, TextField } from '../layout';
import { GET_TEAM } from '../../graphql/team';
import { Loading, Error } from '../../hooks';
import * as yup from 'yup';
import mainStyles from './main.module.scss';
import registerStyles from './register.module.scss';
import { CREATE_TEAM } from '../../graphql/team';
import { CreateProjectData } from '../../interfaces';
import { TeamData } from '../../interfaces';
interface Props {

}

export const Team = (props: Props) => {
    const [teamData, setTeamData]: any = useState([])
    const [superUser, setSuperUser]: any = useState(true)
    const { data, loading, error } = useQuery<TeamData>(GET_TEAM);
    const [createTeam, { data: createdTeamData, loading: createdTeamLoading, error: createdTeamError }] = useMutation<CreateProjectData>(CREATE_TEAM);

    console.log(teamData)
    if (loading || createdTeamLoading) {
        console.log("loading")
    }

    if (teamData.length === 0 && data && data.teamMembers) {
        setTeamData(data.teamMembers)
    }
    useEffect(() => {
        if (createdTeamData) {
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
    }, [data, createdTeamData]);
    if (error || createdTeamError) {
        console.log(error)
    }
    const deleteUser = () => {

    }

    const validationSchema = yup.object({
        firstName: yup.string().required("Voornaam is verplicht"),
        lastName: yup.string().required("Achternaam is verplicht"),
        email: yup.string().email("Dit email is niet geldig").required("Email is verplicht"),
        quote: yup.string().required(),
        devType: yup.string().required("dit veld is verplicht")
    })

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                devType: "",
                quote: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(team, { setSubmitting }) => {
                console.log("submit")
                setSubmitting(true);
                if (team) {
                    // setIsValid(true)
                    setSubmitting(false);
                    console.log(team)
                    createTeam({
                        variables: {
                            firstName: team.firstName,
                            lastName: team.lastName,
                            email: team.email,
                            quote: team.quote,
                            devType: team.devType,
                        }
                    })
                }
            }}>
            {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (

                <div className={teamStyles.team}>
                    <h1>Team</h1>
                    <div className={teamStyles.teamCards}>
                        {teamData ?
                            teamData.map((element: { firstName: string, lastName: string, quote: string, devType: string, email: string, picture: string }) => {

                                return <div className={teamStyles.cardContainer}>
                                    <span className={teamStyles.pro}>{element.devType}</span>
                                    <img className={teamStyles.round} src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                                    <h3>{element.firstName}</h3>
                                    <h3>{element.lastName}</h3>
                                    <p className={teamStyles.quote}>{element.quote ? element.quote : "~"}</p>
                                    <div className={teamStyles.buttons}>
                                        <button className={teamStyles.primary}>
                                            Message
                                        </button>
                                        <button className={`${teamStyles.primary} ${teamStyles.ghost}`}>
                                            Following
                                        </button>
                                    </div>
                                    <p className={teamStyles.email}>{element.email}</p>
                                    <div className={teamStyles.skills}>
                                        <h6>Skills</h6>
                                        <ul>
                                            {/* {data.team.skills.map(skill => {
                                return <li>{skill}</li>
                            })} */}
                                            <li>UI / UX</li>
                                            <li>Front End Development</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                            <li>React</li>
                                            <li>Node</li>
                                        </ul>
                                    </div>
                                </div>
                            })
                            : ""

                        }
                    </div>

                    {superUser ?
                        <Form className={registerStyles.form}>
                            <h1>Een persoon aan het team toevoegen</h1>
                            <section>
                                <div>
                                    <div className={registerStyles.fieldWrapper}>
                                        <Field label="firstName" className={registerStyles.field} name="firstName" type="text" as={TextField} />
                                        <h5 className={!errors.firstName ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.firstName}</h5>
                                    </div>

                                    <div className={registerStyles.fieldWrapper}>
                                        <Field label="LastName" className={registerStyles.field} name="lastName" type="text" as={TextField} />
                                        <h5 className={!errors.lastName ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.lastName}</h5>
                                    </div>

                                    <div className={registerStyles.fieldWrapper}>
                                        <Field label="Email" className={registerStyles.field} name="email" type="text" as={TextField} />
                                        <h5 className={!errors.email ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.email}</h5>
                                    </div>

                                    <div className={registerStyles.fieldWrapper}>
                                        <Field label="Quote" className={registerStyles.field} name="quote" type="text" as={TextField} />
                                        <h5 className={!errors.quote ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.quote}</h5>
                                    </div>

                                    <div className={registerStyles.selection} >
                                        <div>
                                            <label htmlFor="Senior">Senior</label>
                                            <Field label="Senior" default value="Senior" name="devType" type="radio" />
                                        </div>

                                        <div>
                                            <label htmlFor="Senior">Medior</label>
                                            <Field label="Medior" value="Medior" name="devType" type="radio" />
                                        </div>

                                        <div>
                                            <label htmlFor="Senior">Junior</label>
                                            <Field label="Junior" value="Junior" name="devType" type="radio" />

                                        </div>
                                    </div>
                                    <Button content={"Persoon toevoegen"} type={'submit'} linkTo={''} disabled={isSubmitting} />
                                    <div className={registerStyles.buttons}>
                                    </div>
                                </div>
                            </section>
                        </Form> :
                        ""}
                </div>
            )}
        </Formik>
    )
}