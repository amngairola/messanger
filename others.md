https://github.com/settings/applications/2533349

//sign in with email password

import React, { useState } from "react";
import { Home } from "../Index";
import { auth } from "../Firebase"; // Import only auth from Firebase

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [user, setUser] = useState(null);
const [error, setError] = useState(null);

const signInWithEmailPassword = async () => {
try {
const userCredential = await auth.signInWithEmailAndPassword(email, password);
setUser(userCredential.user);
} catch (error) {
setError(error.message);
}
};

return (

<div>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={signInWithEmailPassword}>Sign In</button>
{error && <p>{error}</p>}
{user && <Home user={user} />}
</div>
);
}

export default Login;

//https://chatengine.io/projects/d79c8c4f-f783-4602-9552-99c68169cb6e

//https://api.chatengine.dev/

//'https://api.chatengine.io/

//PRIVATE-KEY - f485d95b-db30-4d11-a7f1-edf3d0ff9848

// git doc - https://github.com/axios/axios/discussions/4601

// chat doc - https://rest.chatengine.io/

// POSTMAN : https://web.postman.co/workspace/My-Workspace~c0729936-343f-4cc1-8b7d-c9f283bdf182/request/create?requestId=8a4c5493-7b19-42d2-b311-3e344f73366e

//gogle chat - https://developers.google.com/workspace/chat/quickstart/gcf-app

///auth guide - https://github.com/firebase/snippets-web/tree/1abb6ce1a784ae5552946dff5f1f5aab7dcbda30/snippets/auth-next/manage

//https://blog.logrocket.com/user-authentication-firebase-react-apps/

//firebase docs : https://firebase.google.com/docs/firestore/query-data/get-data
