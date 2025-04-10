

import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="mt-4">
			<label className="block text-sm text-gray-200 mb-2">Select Gender</label>
			<div className="flex items-center space-x-4">
				<label
					className={`px-4 py-2 rounded-lg cursor-pointer border transition 
					${selectedGender === "male"
							? "bg-blue-500 text-white border-blue-600 ring-2 ring-blue-400"
							: "bg-white/10 text-gray-200 border-white/20 hover:bg-white/20"
						}`}
				>
					<input
						type="radio"
						name="gender"
						value="male"
						className="hidden"
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
					Male
				</label>

				<label
					className={`px-4 py-2 rounded-lg cursor-pointer border transition 
					${selectedGender === "female"
							? "bg-pink-500 text-white border-pink-600 ring-2 ring-pink-400"
							: "bg-white/10 text-gray-200 border-white/20 hover:bg-white/20"
						}`}
				>
					<input
						type="radio"
						name="gender"
						value="female"
						className="hidden"
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
					Female
				</label>
			</div>
		</div>
	);
};

export default GenderCheckbox;
