import { auth, googleLogin } from "../API/firebase/firebase";



export const handleLoginGG = async () => {
        await auth.signInWithPopup(googleLogin)
                .then(async ({ user }) => {
                })
                .catch((error) => console.error(error))
}