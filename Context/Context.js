import React, { useEffect, useState, createContext, useContext } from "react";
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "../Firebase/FirebaseConfig";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";

export const UserListContext = createContext(null);
export const AuthContext = createContext(null);

export const AppProvider = ({ children }) => {
	// Theme
	const bgTheme = '#2e373c';
	const textTheme = '#fff0ff';
	// User
	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isSignedIn, setIsSignedIn] = useState(false);
	// Fire store
	const db = FIREBASE_FIRESTORE;
	const [userList, setUserList] = useState([]);
	// get user list
	useEffect(() => {
		const handleUserList = async () => {
			try {
				const userListRef = collection(db, "chat");
				const querySnapshot = await getDocs(userListRef);
				const data = querySnapshot.docs.map((doc) => doc.data());
				setUserList(data);
				// console.log("User list data:", data);
				// console.log('User list:', userList )
			} catch (error) {
				console.log(error);
			}
		};
		handleUserList();
	}, []);

    return (
        <AuthContext.Provider value={{ bgTheme, textTheme, user, setUser,  isLoading, setIsLoading, isSignedIn, setIsSignedIn}}>
            <UserListContext.Provider value={{ userList }}>
                {children}
            </UserListContext.Provider>
        </AuthContext.Provider>
)}

