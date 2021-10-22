import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ScreenToDo from '../components/ScreenToDo'
import Count from '../components/routes/Count'
import Today from '../components/routes/Today'
import Planed from '../components/routes/Planed'
import Important from '../components/routes/Important'
import List from '../components/routes/List'



const DashboardRoutes = () => {

    return (

        <>

            <ScreenToDo />

            <div className='routes-container'>

                <Switch>

                    <Route exact path='/count' component={ Count } />
                    <Route exact path='/today' component={ Today } />
                    <Route exact path='/planed' component={ Planed } />
                    <Route exact path='/important' component={ Important } />
                    <Route exact path='/list' component={ List } />

                    <Redirect to='/count' />

                </Switch>

            </div>

        </>

    )

}

export default DashboardRoutes
