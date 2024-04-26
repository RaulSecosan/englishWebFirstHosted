import db from '../firebaseDb';
import {  collection, addDoc, serverTimestamp, doc,deleteDoc } from "firebase/firestore"

// Adauga nou obiect pe firestore
   export const handleNew = async (collectionName) => {
        const name = prompt ("Enter the job name ");
        const description = prompt ("Enter the job description ");

        const collectionRef = collection(db, collectionName);
        const payload =  {name: name, value: description, timestamp : serverTimestamp()}

        await addDoc(collectionRef, payload);
    }

    export const handleDelete = async(id) => {
        const docRef = doc(db, 'lista', id);
        await deleteDoc(docRef);
    }