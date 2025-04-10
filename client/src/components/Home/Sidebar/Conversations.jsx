
import useGetConversations from "@/hooks/useGetConversations";
import Conversation from "./Conversation";
import { getRandomEmoji } from "@/utils/emojis";

const Conversations = () => {

	const { loading, conversations } = useGetConversations();
	console.log("CONVERSATIONS: ",  conversations );

	return (
		<div className='py-2 flex max-sm:h-[500px] flex-col overflow-auto'>
			{ conversations && conversations.length>0 ? conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			)) : null}

			{/* {loading ? <span className='loading loading-spinner mx-auto'></span> : null} */}
		</div>
	);
};
export default Conversations;