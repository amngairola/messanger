import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const App = () => {
	return (
		<div className="flex items-center justify-center w-full min-h-screen bg-gray-200">
			<div className="flex flex-col items-center justify-center max-w-2xl gap-4 bg-white shadow-xl w-72 sm:w-4/5 md:w-3/5 lg:w-2/4 xl:w-2/5 h-80 rounded-3xl ">
				<span className="mb-8 text-2xl font-bold text-black">Sign in</span>
				<button className="flex items-center justify-center w-3/4 gap-2 py-4 font-semibold text-white bg-black rounded-full shadow-xl cursor-pointer hover:bg-gray-200 hover:text-black hover:duration-300">
					<span>
						<FaGoogle className="w-5 h-5" />
					</span>
					Google
				</button>
				<button className="flex items-center justify-center w-3/4 gap-2 py-4 font-semibold text-black bg-gray-200 rounded-full shadow-xl cursor-pointer hover:bg-black hover:text-white hover:duration-300">
					<span>
						<FaGithub className="w-5 h-5" />
					</span>
					GitHub
				</button>
			</div>
		</div>
	);
};

export default App;
