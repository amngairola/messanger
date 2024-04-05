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
