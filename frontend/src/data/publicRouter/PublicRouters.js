
import { Navigate } from "react-router-dom";
import HomePage from "../../page/HomePage";
import Body from "../../page/body/Body";
import CatPage from "../../page/body/CatPage";
import ContentHome from "../../page/body/ContentHome";
import DogPage from "../../page/body/DogPage";

const  publicRouters = [
    {
        path: '/',
        component: HomePage,
        childRoutes: [
            {path: '/Home', component: ContentHome},
            {path: '', component: ContentHome},
            {path: '/cat', component: CatPage},
            {path: '/dog', component: DogPage},
            
            
        ]
    },
    // {
    //     path: '/',
    //     component: '',
    //     childRoutes: [
    //         {path: '', component: ''},
    //         {path: '', component: ''},
            
    //     ]
    // },
    // {
    //     path: '/',
    //     component: '',
    //     childRoutes: [
    //         {path: '', component: ''},
    //         {path: '', component: ''},
            
    //     ]
    // },

]

export default publicRouters;