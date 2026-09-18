import { setActiveTab, setResults } from "@/Toolkit/features/searchSlice";
import { AppDispatch, RootState } from "@/Toolkit/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Tabs = ({photos, videos}: {photos: [], videos: []}) => {
	const tabs = ["photos", "videos"];
	const dispatch = useDispatch<AppDispatch>();
	const activeTab = useSelector((state: RootState) => state.search.activeTab);
	return (
		<div className="flex gap-3 m-5">
			{tabs.map((tab, i) => (
				<button
					key={i}
					className={`capitalize ${tab === activeTab ? "bg-gray-800 text-white" : "bg-[#f2f2f2] text-zinc-400"}  rounded-full px-3 py-1 cursor-pointer active:scale-95 transition`}
					onClick={() => {
						dispatch(setActiveTab(tab))
						dispatch(setResults(tab === 'photos' ? photos : videos))
					}}
				>
					{tab}
				</button>
			))}
		</div>
	);
};

export default Tabs;
