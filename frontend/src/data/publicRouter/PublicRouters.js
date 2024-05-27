
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
import StyledUserInfo from "../../page/body/userinfor/UserInFor";
import ChangePassword from "../../page/changePassword.js/ChangePassword";
import Admin from "../../page/admin/Admin";

const signinWithLoading = WithLoading(Signin);
const signupWithLoading = WithLoading(Signup);

const dogWithLoading = WithLoading(DogPage);
const catWithLoading = WithLoading(CatPage);
const moreWithLoading = WithLoading(More);
const generatedWithLoading = WithLoading(Generated);
const UserInForhowLoading =WithLoading(StyledUserInfo) 
const changePasswordLoading =WithLoading(ChangePassword) 
const adminLoading =WithLoading(Admin) 




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
            {path: '/infor', component: UserInForhowLoading},
            {path: '/change-password', component: changePasswordLoading},
            
            
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

const  adminRouters = [
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
            {path: '/infor', component: UserInForhowLoading},
            {path: '/change-password', component: changePasswordLoading},
            {
                path: '/admin',
                component: adminLoading
            },
            
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
]

const totalPublic = {
    publicRouters,
    adminRouters
}
export default totalPublic;