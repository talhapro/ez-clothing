
import { 

    signInWithGooglePopup, 
    createUserDocumentFromAuth,

    } from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';


const SignIn = () => {

    // useEffect(() => {
    //     async function check() {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     check();
    // }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // eslint-disable-next-line no-unused-vars
        const userDocRef = await createUserDocumentFromAuth(user);
    };


    return (
        <div>
        <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
            <SignUpForm/>
        </div>
    )

};

export default SignIn;