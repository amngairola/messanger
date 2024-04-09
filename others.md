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