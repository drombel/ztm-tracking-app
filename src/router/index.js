import Main from './../views/Main';
import Buses from './../views/Buses';

export default [
    {
        to: '/',
        exact: true,
        component: Main,
        // title: 'Main page',
    },
    {
        to: '/buses',
        component: Buses,
        title: 'Buses',
    }
];