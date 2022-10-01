import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { auth } from "./firebase";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      dispatch(login({
        email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoPic: userAuth.user.photoURL,
      }))
    }).catch((err)=> alert(err));
  };

  const register = () => {
    if (!username) {
      return alert("Please Enter a full name");
    }

   auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: username,
            photoURL: profileUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: username,
                photoPic: profileUrl,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png"
        alt="linkdin"
      />

      <form>
        <input
          name={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Full name (required if regestering)"
        />

        <input
          type="text"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          placeholder="Profile pic URL (Optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Your Password"
        />
        <button onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
