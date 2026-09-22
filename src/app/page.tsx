"use client";
import { useState } from "react";
import { getImages, getVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ContentGrid from "./components/ContentGrid";

const Page =  () => {
	const [photos, setPhotos] = useState<[]>([]);
	const [videos, setVideos] = useState<[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchResult = async (query: string) => {
		setLoading(true);
		const UnsplashImages = async (query: string) => {
			const images = await getImages(query);
			console.log(images);
			setPhotos(images);
		};

		const PexelsVideos = async (query: string) => {
			const videos = await getVideos(query);
			console.log(videos);
			setVideos(videos);
		};

		await UnsplashImages(query); 
		await PexelsVideos(query); 

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
