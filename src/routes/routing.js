
import sessionImg from '../assets/images/session.png';
import Sessions from '../views/ui-components/Sessions';
//import CustomerApp from '../views/ui-components/CustomerApp';
import {CustomerApp} from '../views/ui-components/CustomerApp';
//import {CustomerApp} from '../views/ui-components/CustomerApp';
//import React, {Students} from '../views/ui-components/Students';
import Students from '../views/ui-components/Students';
// import StudentFunc from '../views/ui-components/StudentFunc';

var ThemeRoutes = [

    {
        path: '/sessions',
        name: 'Sessions',
        // icon: 'mdi mdi-calendar-clock mr-2',
        image: sessionImg,
        component: Sessions
    },
    {
        path: '/customerApp',
        name: 'CustomerApp',
        // icon: 'mdi mdi-calendar-clock mr-2',
        image: sessionImg,
        component: CustomerApp
    },
    {
        path: '/students',
        name: 'Students',
        // icon: 'mdi mdi-calendar-clock mr-2',
        image: sessionImg,
        //image: imagessImg,
        component: Students
    },

    // {
    //     path: '/studentFunc',
    //     name: 'StudentFunc',
    //     // icon: 'mdi mdi-calendar-clock mr-2',
    //     image: sessionImg,
    //     component: StudentFunc
    // },
    { path: '/', pathTo: '/sessions', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;