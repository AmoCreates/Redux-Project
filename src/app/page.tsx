"use client";
import { useState } from "react";
import { getImages, getVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ContentGrid from "./components/ContentGrid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Toolkit/store";
import { setResults } from "@/Toolkit/features/searchSlice";

const Page = () => {
	const [photos, setPhotos] = useState<[]>([]);
	const [videos, setVideos] = useState<[]>([]);
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const activeTab = useSelector((state: RootState) => state.search.activeTab);

	const fetchResult = async (query: string) => {
		setLoading(true);
		const fetchedImages = await getImages(query);
		const fetchedVideos = await getVideos(query);

		setPhotos(fetchedImages);
		setVideos(fetchedVideos);

		// 3. Dispatch the initial results immediately based on the active tab
		const currentTab = activeTab || "photos";
		dispatch(
			setResults(currentTab === "photos" ? fetchedImages : fetchedVideos),
		);

		setLoading(false);
	};

	return (
		<div className="p-5">
			<SearchBar
				onSearch={(searchTerm) => {
					fetchResult(searchTerm);
				}}
			/>
			<Tabs photos={photos} videos={videos} />
			<ContentGrid />
		</div>
	);
};

export default Page;
