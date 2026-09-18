"use client";
import { useState } from "react";
import { getImages, getVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import { useSelector } from "react-redux";
import { RootState } from "@/Toolkit/store";
import ContentGrid from "./components/ContentGrid";

const Page = () => {
	const [photos, setPhotos] = useState<[]>([]);
	const [videos, setVideos] = useState<[]>([]);

	const query = useSelector((state:RootState) => state.search.query);

	const UnsplashImages = async () => {
		const images = await getImages(query);
		console.log(images);
		setPhotos(images);
	};

	const PexelsVideos = async () => {
		const videos = await getVideos(query);
		console.log(videos);
		setVideos(videos);
	};


	return (
		<div className="p-5">
			<SearchBar onSearch={() => {
				UnsplashImages();
				PexelsVideos();
			}}/>
			<Tabs photos={photos} videos={videos}/>
			<ContentGrid />
		</div>
	);
};

export default Page;
