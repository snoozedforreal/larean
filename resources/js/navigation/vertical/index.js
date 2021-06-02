import { Home, FilePlus, Search, Lock } from 'react-feather';

export default [
    {
        id: 'home',
        title: 'Home',
        icon: <Home size={20} />,
        navLink: '/home'
    },
    {
        id: 'secondPage',
        title: 'Second Page',
        icon: <FilePlus size={20} />,
        navLink: '/second-page'
    },
    {
        id: 'notFound',
        title: 'Not Found',
        icon: <Search size={20} />,
        navLink: '/not-found'
    },
    {
        id: 'unauthorized',
        title: 'Unauthorized',
        icon: <Lock size={20} />,
        navLink: '/unauthorized'
    }
];
