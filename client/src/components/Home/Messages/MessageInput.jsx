import { Button } from '@/components/ui/button';
import useSendMessage from '@/hooks/useSendMessage';
import { SendHorizontal } from 'lucide-react';
import React, { useState } from 'react'



const MessageInput = () => {

	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative flex gap-1 '>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				{/* <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button> */}
				<Button  className="h-10 rounded-full cursor-pointer ">
					<SendHorizontal></SendHorizontal>
				</Button>
			</div>
		</form>
	);
};

export default MessageInput