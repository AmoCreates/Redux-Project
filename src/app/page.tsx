"use client";
import { useState } from "react";
import { getImages, getVideos } from "./api/mediaApi";
import Image from "next/image";

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
			<button
				className="bg-blue-500 rounded-[7px] text-white p-2 cursor-pointer active:scale-97"
				onClick={UnsplashImages}
			>
				Get Unsplahs Images
			</button>
			<button
				className="bg-blue-500 rounded-[7px] text-white p-2 cursor-pointer active:scale-97"
				onClick={PexelsVideos}
			>
				Get Pexels Videos
			</button>
		</div>
	);
};

export default Page;
