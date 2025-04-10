

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import useLogin from "@/hooks/useLogin";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex rounded-xl items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 ">
			<div className="w-full rounded-xl max-w-md p-8  shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
				<h1 className="text-4xl font-bold text-center text-white mb-6">
					Login <span className="text-blue-400">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<div>
						<label className="block text-sm text-gray-200 mb-1">Username</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-200 mb-1">Password</label>
						<input
							type="password"
							placeholder="Enter password"
							className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className="text-sm text-gray-300 mt-1">
						Don’t have an account?{" "}
						<a
							href="/signup"
							className="text-blue-400 hover:underline transition"
						>
							Sign up here
						</a>
					</div>

					<div>
						<Button
							type="submit"
							className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
							disabled={loading}
						>
							{loading ? <LoadingSpinner size={20} /> : "Login"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
