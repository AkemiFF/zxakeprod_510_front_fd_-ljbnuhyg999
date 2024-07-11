// components/GoogleLoginButton.tsx
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.GOOGLE_API_FIREBASE,
    authDomain: process.env.GOOGLE_FIREBASE_AUTHDOMAIN,
    projectId: "test-ce224",
    storageBucket: "test-ce224.appspot.com",
    messagingSenderId: "758626351874",
    appId: "1:758626351874:web:4e0e954eb74dde33c3a01b",
    measurementId: "G-9B4HNZLJ79"
};

const app = initializeApp(firebaseConfig);
const GoogleLoginButton = () => {
    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const auth = getAuth(app);
        auth.languageCode = 'fr';
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        signInWithRedirect(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);

                if (credential) {
                    const token = credential.accessToken;
                }

                // The signed-in user info.
                const user = result.user;

                console.log(user);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    return (
        <button onClick={handleSignIn}>
            Log in with Google
        </button>
    );
};

export default GoogleLoginButton;
