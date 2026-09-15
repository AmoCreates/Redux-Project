"use client";
import { useState } from "react";
import { getImages } from "./api/mediaApi";
import Image from "next/image";

const Page = () => {
	const [photos, setPhotos] = useState<[]>([]);

	const UnsplashImages = async () => {
		const images = await getImages();
    console.log(images)
		setPhotos(images);
		
	};

	return (
		<div className="p-5">
			<button
				className="bg-blue-500 rounded-[7px] text-white p-2 cursor-pointer active:scale-97"
				onClick={UnsplashImages}
			>
				Get Unsplahs Images
			</button>
				<div>
					{photos.length > 0 &&
						photos.map((img, i) => (
							<Image
								key={i}
                width={200}
                height={200}
								src={img?.user?.profile_image?.medium}
								alt="Author's profile picture"
								
                className="h-32 w-auto"
							/>
						))}
				</div>
		</div>
	);
};

export default Page;
