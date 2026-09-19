import pexels from "../../lib/pexelsClient";
import unsplash from "../../lib/unsplashClient";

export const getImages = async (query: string) => {
	try {
		const res = await unsplash.get("/search/photos", {
			params: { query: query },
		});
		return res.data.results.map((item: any) => ({
      id: item.id,
			type: "photo",
			title: item.alt_description,
			thumbnail: item.urls.small,
			src: item.urls.full,
		}));
	} catch (error) {
		console.log(error);
		console.log("unsplash fetching photos error");
		return [];
	}
};

export const getVideos = async (query: string) => {
	try {
		const res = await pexels.get("/videos/search", {
			params: { query: query, per_page: 6 },
		});

		return res.data.videos.map((item: any) => {
			const videoUrl =
				item.video_files?.find(
					(file: any) => file?.quality === "hd" || file?.quality === "sd",
				)?.link || item.video_files?.[0]?.link || "";

			return {
				id: item.id,
				type: "video",
				title: item.user?.name || "video",
				thumbnail: item.image,
				src: item.image,
				video_files: item.video_files || [],
				videoSrc: videoUrl,
			};
		});
	} catch (error) {
		console.log(error);
		console.log("pexels fetching videos error");
		return [];
	}
};
