// hooks/useFirestore.js
import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import db from '../firebaseDb';

const useFirestore = (collectionName) => {
    const [documents, setDocuments] = useState([{name: "Loading...", id: "initial", img:'Loading...'}]);
    
    useEffect(() => {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, orderBy('timestamp', 'desc'));

        const unsub = onSnapshot(q, (snapshot) => {
            const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setDocuments(docs);
        });

        return () => unsub(); // Cleanup subscription on unmount
    }, [collectionName]); // Re-run the effect if collectionName changes

    return documents;
};

export default useFirestore;
