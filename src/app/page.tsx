"use client";
import { useState } from "react";
import { getImages, getVideos } from "./api/mediaApi";
import Image from "next/image";
import SearchBar from "./components/SearchBar";

const Page = () => {
	const [photos, setPhotos] = useState<[]>([]);
	const [videos, setVideos] = useState<[]>([]);

	const UnsplashImages = async () => {
		const images = await getImages();
		console.log(images);
		setPhotos(images);
	};

	const PexelsVideos = async () => {
		const videos = await getVideos();
		console.log(videos);
		setVideos(videos);
	};


	return (
		<div className="p-5">
			<SearchBar/>
		</div>
	);
};

export default Page;
