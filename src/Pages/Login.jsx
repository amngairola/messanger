import { Link } from "react-router-dom";
import { Input, Button } from "../Index";
import { useState } from "react";

function Login() {
  const initialFormData = {
    email: " ",
    password: " ",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    // if (!validateEmail(fromData.email)) {
    //   setError("Please enter a valid email");
    // } else {
    //   console.log(fromData);
    //   setError("");
    // }

    setError("");
  };

  const validateEmail = (email) => {
    const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  };

  return (
    <div className="flex items-center justify-center w-full mt-8 mb-8">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          {/* <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link> */}
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Password: "
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
