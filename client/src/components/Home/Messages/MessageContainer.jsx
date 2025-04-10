// import React, { useEffect } from 'react'

// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import useConversation from '@/zustand/useConversations';
// import { useAuthContext } from '@/context/Authcontext';

// const MessageContainer = () => {

// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	useEffect(() => {
// 		// cleanup function (unmounts)
// 		return () => setSelectedConversation(null);
// 	}, [setSelectedConversation]);

// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			{!selectedConversation ? (
// 				<NoChatSelected />
// 			) : (
// 				<>
// 					{/* Header */}
// 					<div className='bg-slate-500 px-4 py-2 mb-2'>
// 						<span className='label-text'>To:</span>{" "}
// 						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
// 					</div>
// 					<Messages />
// 					<MessageInput />
// 				</>
// 			)}
// 		</div>
// 	);
// };
// export default MessageContainer;

// const NoChatSelected = () => {
// 	const { authUser } = useAuthContext();
// 	return (
// 		<div className='flex items-center justify-center w-full h-full'>
// 			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
// 				<p>Welcome 👋 {authUser.fullName} ❄</p>
// 				<p>Select a chat to start messaging</p>
// 				{/* <TiMessages className='text-3xl md:text-6xl text-center' /> */}
// 			</div>
// 		</div>
// 	);
// };



import React, { useEffect } from 'react';
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from '@/zustand/useConversations';
import { useAuthContext } from '@/context/Authcontext';
import { StepBack } from 'lucide-react';
import useMediaQuery from '@/hooks/useMediaQuery';


const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSmUp = useMediaQuery('(min-width: 640px)');

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className={`md:min-w-[450px] w-full h-full  flex flex-col  overflow-hidden ${!selectedConversation ? "max-sm:h-0" :"h-full"} `}>
			{!selectedConversation ? (
				isSmUp ? <NoChatSelected /> : null
			) : (
				<>
					{/* Header */}
						<div className={`bg-slate-600 px-4 py-3 text-white flex justify-between `} >
						<div>
								<span className='text-sm'>To:</span>{" "}
								<span className='font-semibold'>{selectedConversation.fullName}</span>
						</div>
							<StepBack className='sm:hidden' onClick={() => setSelectedConversation(null)} />
					</div>

					{/* Messages - flexible grow and scroll */}
					<div className="flex-1 overflow-y-auto">
						<Messages />
					</div>

					{/* Message Input */}
					<div className=" border-slate-600">
						<MessageInput />
					</div>
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const {selectedConversation} = useConversation();
	const { authUser } = useAuthContext();
	return (
		<div className={`flex items-center justify-center w-full h-full `} >
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};


