import Main from './../layouts/Main';
import Page1 from './../view/Page1';

const routes = [
    {
        path: "/Main",
        component: Main,
        routes: [
            {
                path: "/Main/Page1",
                component: Page1
            },
        ]
    }
];

export default routes
