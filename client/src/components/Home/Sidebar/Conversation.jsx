
// import { UseSocketContext } from "@/context/SocketContext";
// import useConversation from "@/zustand/useConversations";
// import React from "react";

// const Conversation = ({ conversation, lastIdx, emoji }) => {

// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	const isSelected = selectedConversation?._id === conversation._id;
// 	const { onlineUsers } = UseSocketContext()
// 	const isOnline = onlineUsers.includes(conversation._id);
	

// 	return (
// 		<>
// 			<div
// 				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
// 				${isSelected ? "bg-sky-500" : ""}
// 			`}
// 				onClick={() => setSelectedConversation(conversation)}
// 			>
// 				<div className={`avatar ${isOnline ? "online" : ""}`}>
// 					<div className='w-12 rounded-full'>
// 						<img src={conversation.profilePic} alt='user avatar' />
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
// 						<span className='text-xl'>{emoji}</span>
// 					</div>
// 				</div>
// 			</div>

// 			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
// 		</>
// 	);
// };
// export default Conversation;

import { UseSocketContext } from "@/context/SocketContext";
import useConversation from "@/zustand/useConversations";
import React from "react";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { onlineUsers } = UseSocketContext();

	const isSelected = selectedConversation?._id === conversation._id;
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-200 
				${isSelected ? "bg-sky-600" : "hover:bg-sky-500/40"} 
				${isOnline ? "ring-2 ring-green-400" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
						<img src={conversation.profilePic} alt="user avatar" className="object-cover w-full h-full" />
					</div>
				</div>

				<div className="flex flex-col flex-1">
					<div className="flex justify-between items-center">
						<p className="text-md font-semibold text-white truncate">{conversation.fullName}</p>
						<span className="text-xl">{emoji}</span>
					</div>
					{/* Optionally add recent message or time here */}
					{/* <p className="text-sm text-gray-400 truncate">Last message...</p> */}
				</div>
			</div>

			{!lastIdx && <div className="border-t border-gray-700 my-2 mx-4" />}
		</>
	);
};

export default Conversation;
