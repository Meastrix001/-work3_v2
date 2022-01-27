import React from 'react'
import { Register } from '../components/project'
import { BaseLayout } from '../layouts/BaseLayout'

interface Props {

}

export const RegisterPage = (props: Props) => {
  return (
    <BaseLayout>
      <Register />
    </BaseLayout>
  )
}

