import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { setCredentials } from "../../rtx_app/auth/authSlice";
import { useLoginUserMutation } from "../../rtx_app/auth/AuthAPI";

// Icons
import {
	RiMailLine,
	RiLockLine,
	RiEyeLine,
	RiEyeOffLine,
} from "react-icons/ri";

const Login = () => {

	const dispatch = useDispatch()

	//const [emailUser, setEmailUser] = useState("");
	//const [passwordUser, setPasswordUser] = useState("");

	const [showPassword, setShowPassword] = useState(false);

	const [redirectToHome, setRedirectToHome] = useState(false);

	const { register, handleSubmit } = useForm();
	const [getToken, { isLoading, isError, error }] = useLoginUserMutation()

	const onSubmit = handleSubmit((data) => {

		getToken(data)

		console.log(data);

	});


	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
				<h2 className="text-4xl text-primary font-bold text-center hover:text-primary2 transition-colors">Sign In</h2>
				<h1 className="text-2xl text-center uppercase font-bold tracking-[5px] text-primary mb-8">
					Ruizdev7<span className="ml-2 text-primary2">Portfolio</span>
				</h1>
				<form onSubmit={handleSubmit(onSubmit)} className="mb-8">

					<div className="relative mb-4">
						<RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
						<input
							{...register("email_user")}
							type="email"
							className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
							placeholder="Email"
						/>
					</div>
					<div className="relative mb-8">
						<RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
						<input
							{...register("password_user")}
							type={showPassword ? "text" : "password"}
							className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
							placeholder="Password"
						/>
						{showPassword ? (
							<RiEyeOffLine
								onClick={() => setShowPassword(!showPassword)}
								className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
							/>
						) : (
							<RiEyeLine
								onClick={() => setShowPassword(!showPassword)}
								className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
							/>
						)}
					</div>
					<div>
						<button
							type="submit"
							className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
						>
							Log In
						</button>
					</div>
				</form>
				<div className="flex flex-col items-center gap-4">
					<Link
						to="/auth/forget-password"
						className="text-primary hover:text-primary2 hover:font-extrabold transition-colors"
					>
						Forgot Password?
					</Link>
					<span className="flex items-center gap-2">
						Don't have an account?{" "}
						<Link
							to="/auth/sign-up"
							className="text-primary hover:text-primary2 hover:font-extrabold transition-colors"
						>
							Sign Up
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
