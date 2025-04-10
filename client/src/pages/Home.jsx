import MessageContainer from "@/components/Home/Messages/MessageContainer";
import Sidebar from "@/components/Home/Sidebar/Sidebar";


const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row max-sm:h-[600px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;


// import MessageContainer from "@/components/Home/Messages/MessageContainer";
// import Sidebar from "@/components/Home/Sidebar/Sidebar";

// const Home = () => {
//   return (
//     <div className="flex flex-col md:flex-row w-full h-screen md:h-[550px] rounded-lg overflow-hidden 
//       bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-md">

//       {/* Sidebar */}
//       <div className="w-full md:w-1/3 lg:w-1/4 border-b md:border-b-0 md:border-r border-gray-600">
//         <Sidebar />
//       </div>

//       {/* Messages */}
//       <div className="w-full md:flex-1 border border-gray-600">
//         <MessageContainer />
//       </div>
//     </div>
//   );
// };

// export default Home;
