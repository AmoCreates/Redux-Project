"use client";
import { setQuery } from "@/Toolkit/features/searchSlice";
import { AppDispatch } from "@/Toolkit/store";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = ({ onSearch }: { onSearch: () => void }) => {
	const [search, setSearch] = useState<string>("");

	const dispatch = useDispatch<AppDispatch>();

	const handleQuery = () => {
		if (search.length === 0 || search === "" || search.trim() === "")
			return;
		dispatch(setQuery(search));
		onSearch();
	};

	return (
		<div className="flex justify-center items-center gap-2">
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search content here..."
				className="bg-[#f2f2f2] pl-3 pr-20 py-1.5 rounded-full focus:shadow-md outline-none text-[#848484] placeholder:text-[#848484] transition"
			/>
			<button
				className="bg-[#f2f2f2] p-2 rounded-full active:bg-zinc-200 outline-zinc-300 group cursor-pointer active:shadow-md transition"
				onClick={handleQuery}
			>
				<Search
					size={20}
					className="group-active:scale-95 group-active:text-zinc-500 transition text-zinc-400"
				/>
			</button>
		</div>
	);
};

export default SearchBar;
