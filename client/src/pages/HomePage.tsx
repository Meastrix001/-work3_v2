import React from 'react'
import { Home } from '../components/project'
import { VisitorLayout } from '../layouts/VisitorLayout'

interface Props {

}

export const HomePage = (props: Props) => {
  return (
    <VisitorLayout>
      <Home />
    </VisitorLayout>
  )
}

