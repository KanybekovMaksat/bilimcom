import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqJyWzj1dMFIQj4bMIm3rf4uIPUzEUzdA",
  authDomain: "auth-e-2eb91.firebaseapp.com",
  projectId: "auth-e-2eb91",
  storageBucket: "auth-e-2eb91.appspot.com",
  messagingSenderId: "628822429202",
  appId: "1:628822429202:web:c8d0c6bf4e3febebf2d2cb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const registerUser = async (email, password, nickname) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      nickname: nickname || "",
      createdAt: new Date(),
    });
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error(error.message);
  }
};

export default app;
