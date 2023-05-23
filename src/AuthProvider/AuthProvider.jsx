import React, { createContext, useEffect, useState } from "react";
import {

  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config.init";



export const authProvider = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');
  const [photoUrl,setPhotoUrl] = useState();
  const [displayName,setDisplayName] = useState('');
  const auth = getAuth(app);
  // user Create
  const crateUserInfo = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password);
    
  };
  // User sign in
  const signIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
   
  };
  // Google SIgn in Method 

  const googleSignInMethod = ()=>{
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }
  //  SignOut from
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
   
  };



  const updateProfileUser = async (displayName, photoUrl) => {
    setLoading(true);
    const currentUser = auth.currentUser;
    const promises = [];
    if (displayName !== currentUser.displayName) {
      promises.push(updateProfile(currentUser, { displayName }));
    }
    if (photoUrl) {
      promises.push(updateProfile(currentUser, { photoURL: photoUrl }));
    }
    await Promise.all(promises);
    setUser(auth.currentUser);
    setDisplayName(auth.currentUser.displayName);
    setPhotoUrl(auth.currentUser.photoURL);
    setLoading(false);
  };
  

  // state Change
  useEffect(() => {
    const unchangedState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName);
        setPhotoUrl(currentUser.photoURL);
        console.log(currentUser.photoURL);
      } else {
        setDisplayName('');
        setPhotoUrl('');
      }
      setLoading(false);
    });
  
    return () => {
      unchangedState();
    };
  }, []);
  

  const providerInfo = {
    crateUserInfo,
    signIn,
    user,
    updateProfileUser,
    logOut,
    loading,
    error,
    photoUrl,
    displayName,
    googleSignInMethod,

    
  };
    return (
        <div>
              <authProvider.Provider value={providerInfo}>{children}</authProvider.Provider>
        </div>
    );
};

export default AuthProvider;