import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios';

const ForgetPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [openOld, setOpenOld] = useState(false);
    const [openNew, setOpenNew] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleOldPasswordToggle = () => {
        setOpenOld(!openOld);
    };

    const handleNewPasswordToggle = () => {
        setOpenNew(!openNew);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleSendClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/userAuth/change_password/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    email: email,
                    old_password: password,
                    new_password: newPassword
                }),
            });
            const data = await response.json();
            console.log(data);
            
            if (response.ok) {
                alert('Password changed successfully!');
                setEmail("");
                setPassword("");
                setNewPassword("");
            } else {
                setMessage(data.error);
            }
        } catch (error) {
            console.error('Erreur lors de la demande:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="font-semibold text-4xl mb-6 text-black">Forgot Password</h2>
                {message && <p>{message}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Enter your email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="mt-1 p-2 text-black block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                        placeholder="Your email address"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Enter your password:
                    </label>
                    <div className="relative">
                        <input
                            placeholder="Password"
                            onChange={handlePasswordChange}
                            className="mt-1 p-2 pr-10 block w-full border-black-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"                            type={openOld ? "text" : "password"}
                        />
                        {openOld ? (
                            <AiFillEye className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleOldPasswordToggle} />
                        ) : (
                            <AiFillEyeInvisible className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleOldPasswordToggle} />
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                        Enter your new password:
                    </label>
                    <div className="relative">
                        <input
                            placeholder="New Password"
                            onChange={handleNewPasswordChange}
                            className="mt-1 p-2 pr-10 block w-full border-black-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"                            type={openNew ? "text" : "password"}
                        />
                        {openNew ? (
                            <AiFillEye className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNewPasswordToggle} />
                        ) : (
                            <AiFillEyeInvisible className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleNewPasswordToggle} />
                        )}
                    </div>
                </div>
                <button
        onClick={handleSendClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded self-center"
    >
        Send
    </button>
            </div>
        </div>
    );
                        }    

export default ForgetPasswordPage;
