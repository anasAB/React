import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../config/firebase";
import { updateBookSlicerState, updateLoadingDataStatus } from "../store/eBooksSlice";
import { useStoreType } from "../store/useStoreType";



export const useGetAllBooks = () => {
    const dispatch = useDispatch();

    const [isDataLoading, setIsDataLoading] = useState(false);
    const { showFavoriteBooks } = useStoreType((state) => state.eBooks);


    const getData = async () => {
        try {
            dispatch(updateLoadingDataStatus(true));
            const querySnapshot = await getDocs(collection(db, "ebooks"));
            const serializablePayload = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log('##serializablePayload', serializablePayload);

            dispatch(updateBookSlicerState(serializablePayload));
            dispatch(updateLoadingDataStatus(false));
            setIsDataLoading(false);
        } catch (error) {
            console.error("Failed to fetch books:", error);
        }
    };

    useEffect(() => {
        console.log('## Called');

        if (showFavoriteBooks) return
        getData().then((data) => {
            console.log('##data', data);

        }).catch(error => {
            console.error("Error fetching data:", error);
        });
        // getData();
        // seedData()
    }, [showFavoriteBooks]);


    return { isDataLoading }



};


// const getData = async () => {
//     try {
//         dispatch({ type: 'UPDATE_LOADING_STATUS', payload: true });
//         const docRef = doc(db, "ebooks", bookId);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             const serializablePayload = {
//                 id: docSnap.id,
//                 ...docSnap.data(),
//             };
//             dispatch({ type: 'UPDATE_BOOK_DETAILS', payload: serializablePayload });
//         } else {
//             console.log("No such document!");
//         }
//     } catch (error) {
//         console.error("Failed to fetch book details:", error);
//         // Dispatch an error action if necessary
//     } finally {
//         dispatch({ type: 'UPDATE_LOADING_STATUS', payload: false });
//     }
// };

// useEffect(() => {
//     getData();
// }, []);

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import { doc, getDoc } from "firebase/firestore";

// import { db } from "../config/firebase";



// export const useGetAllBooks = (bookId: string) => { // TODO rename this hook to represent what is dose
//     const dispatch = useDispatch()

//     const getData = async () => {
//         dispatch(updateLoadingDataStatus(true));
//         // Adjusted to use doc() and getDoc() for fetching a single document by ID
//         const docRef = doc(db, "ebooks", bookId);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//             const serializablePayload = {
//                 id: docSnap.id,
//                 ...docSnap.data(),
//             };
//             dispatch(updateBookDetialSlicerState(serializablePayload));
//         } else {
//             console.log("No such document!");
//         }

//         dispatch(updateLoadingDataStatus(false));
//     };




//     useEffect(() => {
//         getData();
//     }, []);
// }


