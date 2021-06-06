import { lazy } from 'react';

// ** Document title
const TemplateTitle = '%s - A Laravel & React Dashboard';

// ** Default Route
const DefaultRoute = '/home';

// ** Merge Routes
const Routes = [
    {
        path: '/home',
        component: lazy(() => import('../../views/Home'))
    },
    {
        path: '/second-page',
        component: lazy(() => import('../../views/SecondPage'))
    },
    {
        path: '/login',
        component: lazy(() => import('../../views/Login')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    }
];

export { DefaultRoute, TemplateTitle, Routes };
