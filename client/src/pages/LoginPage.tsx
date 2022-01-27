import React from 'react'
import { Login } from '../components/project'
import { BaseLayout } from '../layouts/BaseLayout'

interface Props {

}

export const LoginPage = (props: Props) => {
  return (
    <BaseLayout>
      <Login />
    </BaseLayout>
  )
}

