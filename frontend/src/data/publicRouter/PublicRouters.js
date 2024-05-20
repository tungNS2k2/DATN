
import { Navigate } from "react-router-dom";
import HomePage from "../../page/HomePage";
import Body from "../../page/body/Body";
import CatPage from "../../page/body/CatPage";
import ContentHome from "../../page/body/ContentHome";
import DogPage from "../../page/body/DogPage";
import Signin from "../../page/Signin/Signin";
import WithLoading from "../../custom/HOC/withloading/WithLoading";
import Signup from "../../page/signup/Signup";
import Generated from "../../page/body/generated/generated";
import More from "../../page/body/more/More";

const signinWithLoading = WithLoading(Signin);
const signupWithLoading = WithLoading(Signup);

const dogWithLoading = WithLoading(DogPage);
const catWithLoading = WithLoading(CatPage);
const moreWithLoading = WithLoading(More);
const generatedWithLoading = WithLoading(Generated);

const  publicRouters = [
    {
        path: '/',
        component: HomePage,
        childRoutes: [
            {path: '/Home', component: ContentHome},
            {path: '', component: ContentHome},
            {path: '/cat', component: catWithLoading},
            {path: '/dog', component: dogWithLoading},
            {path: '/more', component: moreWithLoading},
            {path: '/generated', component: generatedWithLoading},
            
            
        ]
    },
    {
        path: '/signin',
        component: signinWithLoading
    },
    {
        path: '/signup',
        component: signupWithLoading
    },
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