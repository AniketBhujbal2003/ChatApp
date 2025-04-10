import React, { useEffect } from 'react'
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import useConversation from '@/zustand/useConversations';




const Sidebar = () => {

	const { selectedConversation, setSelectedConversation } = useConversation();

	console.log("selctedConvers: ", selectedConversation)
	// useEffect(()=>{

	// },[selectedConversation])

	

	return (
		<div className={`border-r border-slate-500 p-4 flex flex-col gap-2  max-sm:justify-between max-sm:w-[350px] ${selectedConversation? "max-sm:hidden" : "sm:b-0"}`} >
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar