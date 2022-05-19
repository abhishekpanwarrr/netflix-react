import { useEffect, useState } from "react"
// import {FirebaseContext} from '../context/firebase'
import { database } from "../lib/firebase.prod";
import { collection, getDocs, query } from "firebase/firestore"


export function useContent (target) {
    const [content,setContent] = useState([]);
    useEffect(() => {
        async function getData(){
            const q = query(collection(database, target));

            const querySnapshot = await getDocs(q);
            const allContent =  querySnapshot.docs.map(item => ({...item.data(),docId:item.id}))
            setContent(allContent)
         }

     getData()
    },[target])

    
    return {[target] : content}
}

