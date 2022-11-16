import { auth } from "../API/firebase/firebase";


export const handleLogout = () => {
        auth.signOut()
                .then(()=>{
                        window.location.reload()
                })

}