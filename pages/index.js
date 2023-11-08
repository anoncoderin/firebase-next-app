import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'
import styles from '@/styles/Home.module.css'
import UserRegistration from "@/firebase/UserRegistration"
import UserLogout from '@/firebase/UserLogout'
import GoogleLogin from '@/firebase/GoogleLogin'
import UserEmailSignIn from '@/firebase/UserEmailSignIn'
export default function Home() {

  const [user, setUser]= useState({});

  //need this in order to get an update on the current user logged in 
  // this will either show or hide the users info if not logged in properly
  useEffect(()=> {
    onAuthStateChanged(auth, (currentUser)=> setUser(currentUser));
  },[])

  return (
    <>
      <main className={`${styles.main} `}>
    
        <GoogleLogin/>
        
      <UserRegistration/>
      <UserEmailSignIn/>
      <UserLogout/>

      <div>
        <h2>User logged in:</h2>
        <div>
        {user?.email}
        </div>
      </div>
      </main>
    </>
  )
}
