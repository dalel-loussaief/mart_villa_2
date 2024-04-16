import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("agent");

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password || !phone || !role) {
      toast.error("Please fill in all the fields");
      return;
    }
    let role_id;
    if (role === "agent") {
      role_id = 2;
    } else if (role === "user") {
      role_id = 3;
    }
  
    // Envoyer les données au backend Django
    const response = await axios.post("http://localhost:8000/userAuth/api/register", {
      name: name,
      email: email,
      password: password,
      phone: phone,
      role_id: role_id  
    });
  
    if (response.status === 200) {
      toast.success("Your account is created");
  
      // Redirection en fonction du rôle
      if (role === "agent") {
        window.location.href = "http://localhost:5174/";
      } else if (role === "admin") {
        window.location.href = "http://localhost:5173/";
      } else if (role === "user") {
        window.location.href = "http://localhost:3000/";
      }
    }
};


  const responseGoogle = async (response) => {
    try {
      const res = await axios.post("http://localhost:8000/api/google/login/", {
        access_token: response.accessToken,
      });
      console.log(res.data);
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error("Erreur de connexion avec Google:", error);
    }
  };
  const isAuthenticated = true;
  const reachGoogle = () => {
    const clientID = "53218872031-vv5sjci0ljkm8vhqrkg80168uf8cgsns.apps.googleusercontent.com";
    const callBackURL = "http://localhost:3000/";
    window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callBackURL}&prompt=consent&response_type=code&client_id=${clientID}&scope=openid%20email%20profile&access_type=offline`);

  }
  // if(isAuthenticated){
  //   return<Navigate to={"/"}></Navigate>
  // }

  return (
    <React.Fragment>
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url("/images/singin.jpeg")' }}>
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="space-y-4" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full text-black block rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="name"
              />

            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full text-black block rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full block rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 top-5">
                {showPassword ? (
                  <AiFillEye onClick={togglePasswordVisibility} />
                ) : (
                  <AiFillEyeInvisible onClick={togglePasswordVisibility} />
                )}
              </div>
            </div>
            <div className="relative">


            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full text-black block rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                placeholder="Phone"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                you are :
              </label>
              <select
                id="role"
                name="role"
                className="mt-1 p-2 w-full text-black block rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="agent">Agent</option>
                <option value="user">User</option>
              </select>

            </div>
            <div>
              <button
                type="submit"
                className="bg-orange-500 font-bold hover:bg-orange-500 text-white rounded p-4 text-sm w-full transition "
              >
                Sign in
              </button>
            </div>
            <div>
              <button onClick={reachGoogle} className="bg-white text-black hover:text-gray-800 hover:bg-gray-100 font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full">
                <FcGoogle className="mr-2" />
                <span className="flex items-center">Sign in with Google</span>
              </button>


            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
