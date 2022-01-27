import React from 'react'
import { Dashboard } from '../components/project'
import { BaseLayout } from '../layouts/BaseLayout'

interface Props {

}

export const DashboardPage = (props: Props) => {
  return (
    <BaseLayout>
      <Dashboard />
    </BaseLayout>
  )
}

