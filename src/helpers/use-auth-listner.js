import {useState,useContext,useEffect} from 'react'
import {FirebaseContext} from '../context/firebase'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
export default function useAuthListner(){
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('NetflixauthUser')))
    const {firebase} = useContext(FirebaseContext)
    
    useEffect(() => {
        const auth = getAuth()
        const listner = onAuthStateChanged(auth,(authUser) => {
            if(authUser){
                const userDetail = [authUser.email, authUser.displayName,authUser.photoURL]
                localStorage.setItem('NetflixauthUser', JSON.stringify(userDetail))
                setUser(authUser)
            }else{
                localStorage.removeItem('NetflixauthUser')
                setUser(null)
            }
        })

        return () => listner()
    },[firebase,user])

    return {user}
}