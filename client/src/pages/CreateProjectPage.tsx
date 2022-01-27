import React from 'react'
import { CreateProject } from '../components/project'
import { BaseLayout } from '../layouts/BaseLayout'

interface Props {

}

export const CreateProjectPage = (props: Props) => {
  return (
    <BaseLayout>
      <CreateProject />
    </BaseLayout>
  )
}

