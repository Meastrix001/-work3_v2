import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import * as Routes from './routes'
import {
    TeamPage,
    LoginPage,
    RegisterPage,
    DashboardPage,
    CreateProjectPage,
    HomePage
} from './pages'
import {

} from './components/layout'
import { AppCtx } from './Contexts'

function App() {
    return (
        <AppCtx.Provider
            value={{
                name: 'Using React Context in a Typescript App',
            }}
        >
            <div className='App'>
                <BrowserRouter basename={'Studio-Boost'}>
                    <Switch>
                        <Route path={Routes.TEAM} component={() => <TeamPage />} />
                        <Route path={Routes.HOME} component={() => <HomePage />} />
                        <Route path={Routes.LOGIN} component={() => <LoginPage />} />
                        <Route path={Routes.REGISTER} component={() => <RegisterPage />} />
                        <Route path={Routes.DASHBOARD} component={() => <DashboardPage />} />
                        <Route path={Routes.ADDPROJECT} component={() => <CreateProjectPage />} />
                        <Route component={() => <Redirect to={Routes.LOGIN} />} />
                    </Switch>
                </BrowserRouter>
            </div>
        </AppCtx.Provider>
    )
}

export default App
