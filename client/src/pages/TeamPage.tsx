import React from 'react'
import { Team } from '../components/project'
import { BaseLayout } from '../layouts/BaseLayout'

interface Props {

}

export const TeamPage = (props: Props) => {
    return (
        <BaseLayout>
            <Team />
        </BaseLayout>
    )
}

