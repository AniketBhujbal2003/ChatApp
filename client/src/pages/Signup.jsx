

import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "@/components/SignUp/GenderCheckBox";
import { Button } from "@/components/ui/button";
import useSignup from "@/hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs);
		await signup(inputs);
	};

	return (
		<div className=' flex rounded-xl  items-center justify-center bg-gradient-to-br  from-gray-900 to-gray-800  '>
			<div className='w-full rounded-xl  max-w-md p-8 shadow-2xl bg-white/10 backdrop-blur-md border border-white/20'>
				<h1 className='text-4xl font-bold text-center text-white mb-6'>
					Sign Up <span className='text-blue-400'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='text-sm text-gray-200 mb-1 block'>Full Name</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='text-sm text-gray-200 mb-1 block'>Username</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='text-sm text-gray-200 mb-1 block'>Password</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='text-sm text-gray-200 mb-1 block'>Confirm Password</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<div className='text-sm text-gray-300'>
						Already have an account?{" "}
						<Link to='/login' className='text-blue-400 hover:underline'>
							Log in
						</Link>
					</div>

					<div>
						<Button
							className='w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200'
							type='submit'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
