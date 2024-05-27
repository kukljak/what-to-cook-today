import { auth } from "../../../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

export const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);
