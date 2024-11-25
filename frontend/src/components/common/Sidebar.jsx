import XSvg from "../svgs/X";

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
	const data = {
		fullName: "John Doe",
		username: "johndoe",
		profileImg: "/avatars/boy1.png",
	};

	return (
		<div className="md:flex-[1_1_0] w-14 max-w-40">
			<div className="sticky top-0 left-0 h-screen flex flex-col border-r border-gray-700 w-14 md:w-40">
				<Link to="/" className="flex justify-center md:justify-start">
                    <XSvg className="w-10 h-10 rounded-full fill-white hover:bg-stone-900" />
				</Link>
				<ul className="flex flex-col gap-2 mt-4">
					<li className="flex justify-center md:justify-start">
						<Link
							to="/"
							className="flex gap-2 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-1.5 pl-2 pr-3 max-w-fit cursor-pointer"
						>
							<MdHomeFilled className="w-6 h-6" />
							<span className="text-sm hidden md:block">Home</span>
						</Link>
					</li>
					<li className="flex justify-center md:justify-start">
						<Link
							to="/notifications"
							className="flex gap-2 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-1.5 pl-2 pr-3 max-w-fit cursor-pointer"
						>
							<IoNotifications className="w-5 h-5" />
							<span className="text-sm hidden md:block">Notifications</span>
						</Link>
					</li>

					<li className="flex justify-center md:justify-start">
						<Link
							to={`/profile/${data?.username}`}
							className="flex gap-2 items-center hover:bg-stone-900 transition-all rounded-full duration-300 py-1.5 pl-2 pr-3 max-w-fit cursor-pointer"
						>
							<FaUser className="w-5 h-5" />
							<span className="text-sm hidden md:block">Profile</span>
						</Link>
					</li>
				</ul>
				{data && (
					<Link
						to={`/profile/${data.username}`}
						className="mt-auto mb-6 flex gap-2 items-center transition-all duration-300 hover:bg-[#181818] py-2 px-3 rounded-full"
					>
						<div className="avatar hidden md:inline-flex">
							<div className="w-6 rounded-full">
								<img src={data?.profileImg || "/avatar-placeholder.png"} />
							</div>
						</div>
						<div className="flex justify-between flex-1">
							<div className="hidden md:block">
								<p className="text-white font-bold text-sm truncate">{data?.fullName}</p>
								<p className="text-slate-500 text-xs">@{data?.username}</p>
							</div>
							<BiLogOut className="w-4 h-4 cursor-pointer" />
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};
export default Sidebar;