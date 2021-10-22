import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRouter from './PrivateRoute'
import PublicRoute from './PublicRoute'



const AppRouter = () => {

    const auth = true

    return (

        <Router>

            <div>

                <Switch>

                    <PublicRoute
                        component={ LoginScreen }
                        auth={ auth }
                        exact path='/login'
                    />

                    <PrivateRouter
                        component={ DashboardRoutes }
                        auth={ auth }
                        path='/'
                    />

                </Switch>

            </div>

        </Router>

    )

}

export default AppRouter
