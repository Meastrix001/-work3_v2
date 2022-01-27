import { Field, Formik, Form } from 'formik';
import React, { useState, useEffect } from 'react';
import { Button, TextField } from '../layout';
import registerStyles from './register.module.scss';
import mainStyles from './main.module.scss';
import * as yup from 'yup';
import formValues from '../../constants/fromValues';
import { CreateProjectData } from '../../interfaces';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT } from '../../graphql/projects';
import { Loading, Error } from '../../hooks';
import { useHistory } from "react-router-dom"
import * as Routes from '../../routes/index'
import { userInfo } from 'os';
interface Props {

}

export const CreateProject = (props: Props) => {

  const [valid, setIsValid] = useState(false);
  const [creatingProject, setCreatingProject] = useState(false);
  const history = useHistory();
  const [handleGqlError] = Error();
  const [createProject, { data, loading, error }] = useMutation<CreateProjectData>(CREATE_PROJECT, { onError: handleGqlError, });


  useEffect(() => {
    if (valid && data?.createProject) {
      setCreatingProject(true)
      setTimeout(() => {
        setCreatingProject(false)

        history.push(Routes.DASHBOARD)
        setIsValid(false)
      }, 2000)
    }
  }, [valid, data]);

  while (loading) {
    console.log("loading");

    return <><Loading /><p>Project aan het maken</p></>
  }

  while (error) {
    // document.location.reload()
    console.log(error);
    return <><p>Er is iets fout gegaan </p></>
  }



  const validationSchema = yup.object({
    title: yup.string().required("Een title is verplicht"),
    desc: yup.string().required("Een beschrijving is verplicht"),
    projectOwner: yup.string().email().required("Wie is de project-eigenaar"),
    price: yup.number().required("Een prijs voor dit project is verplicht"),
    repository: yup.string().url(),
    startingOn: yup.date().required(),
    endingOn: yup.date().required()
  })

  return (
    <Formik
      initialValues={{
        title: "",
        desc: "",
        projectOwner: "",
        price: "",
        repository: "",
        createdOn: new Date,
        startingOn: Date,
        endingOn: Date,
        teamSizeReq: 0
      }}
      validationSchema={validationSchema}
      onSubmit={(project, { setSubmitting }) => {
        console.log("submit")
        setSubmitting(true);
        if (project) {
          setIsValid(true)
          setSubmitting(false);
          console.log(project)
          createProject({
            variables: {
              title: project.title,
              desc: project.desc,
              projectOwner: project.projectOwner,
              price: project.price,
              repository: project.repository,
              createdOn: project.createdOn,
              startingOn: project.startingOn,
              endingOn: project.endingOn,
              teamSizeReq: project.teamSizeReq,
            }
          })
        }
      }}>
      {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <div className={registerStyles.register}>
          {
            creatingProject ?
              <div><Loading /><p>Project aan het aanmaken</p></div> :
              <Form className={registerStyles.form}>
                <h1>Nieuw project starten</h1>datetime-local
                <section>
                  <div>
                    <div className={registerStyles.fieldWrapper}>
                      <Field label="Project Titel" className={registerStyles.field} name="title" type="text" as={TextField} />
                      <h5 className={!errors.title ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.title}</h5>
                    </div>

                    <div className={registerStyles.fieldWrapper}>
                      <Field label="Beschrijving" className={registerStyles.field} name="desc" type="text" as={TextField} />
                      <h5 className={!errors.desc ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.desc}</h5>
                    </div>

                    <div className={registerStyles.fieldWrapper}>
                      <Field label="Project-eigenaar" className={registerStyles.field} name="projectOwner" type="text" as={TextField} />
                      <h5 className={!errors.desc ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.desc}</h5>
                    </div>

                    <div className={registerStyles.fieldWrapper}>
                      <Field label="Prijs" className={registerStyles.field} name="price" type="number" as={TextField} />
                      <h5 className={!errors.price ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.price}</h5>
                    </div>

                    <div className={registerStyles.fieldWrapper}>
                      <Field label="Aantal developers" className={registerStyles.field} name="teamSizeReq" type="number" as={TextField} />
                      <h5 className={!errors.price ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.price}</h5>
                    </div>


                    <div className={`${registerStyles.passwordFields} ${registerStyles.fieldWrapper}`} >
                      <Field label="github repository" className={registerStyles.field} name="repository" type="text" as={TextField} />
                      <h5 className={!errors.repository ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.repository}</h5>
                    </div>


                    <div className={`${registerStyles.passwordFields} ${registerStyles.fieldWrapper}`} >
                      <Field label="Start datum" className={registerStyles.field} name="startingOn" type="datetime-local" as={TextField} />
                      <h5 className={!errors.startingOn ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.startingOn}</h5>
                    </div>
                    <div className={`${registerStyles.passwordFields} ${registerStyles.fieldWrapper}`} >
                      <Field label="Eind Datum" className={registerStyles.field} name="endingOn" type="datetime-local" as={TextField} />
                      <h5 className={!errors.endingOn ? `${mainStyles.hidden}` : `${mainStyles.registerErrors}`}>{errors.endingOn}</h5>
                    </div>
                    <Button content={"Project starten"} type={'submit'} linkTo={''} disabled={isSubmitting} />
                    <div className={registerStyles.buttons}>
                    </div>
                  </div>
                </section>
              </Form>
          }
        </div>
      )}
    </Formik>
  )
}