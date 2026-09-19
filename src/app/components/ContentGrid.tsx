"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/Toolkit/store";

const ContentGrid = () => {
	const content = useSelector((state: RootState) => state.search.results);
	const activeTab = useSelector((state: RootState) => state.search.activeTab);

	return (
		<div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
			{content.map((con, index) => {
				const item = con as Record<string, any>;

				const imageSrc =
					typeof item.src === "object"
						? item.src?.large2x ||
							item.src?.large ||
							item.src?.medium ||
							item.src?.original
						: item.thumbnail || item.image || item.url || item.src;

				const videoFiles = Array.isArray(item.video_files)
					? item.video_files
					: [];

				const selectedVideo =
					videoFiles.find(
						(file) =>
							file?.quality === "hd" || file?.quality === "sd",
					) || videoFiles[0];

				const videoSrc = item.videoSrc || selectedVideo?.link || "";

				const isVideo =
					item.type === "video" ||
					String(activeTab).toLowerCase().includes("video");

				return (
					<div
						key={`${imageSrc || videoSrc}-${index}`}
						className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-zinc-100 shadow-sm"
					>
						{isVideo && videoSrc ? (
							<video
								src={videoSrc}
								poster={imageSrc || undefined}
								controls
								preload="metadata"
								loop
                                muted
								className="block h-auto w-full"
							/>
						) : imageSrc ? (
							<img
								src={imageSrc}
								alt={item.title || "Image"}
								loading="lazy"
								className="block h-auto w-full"
							/>
						) : (
							<div className="flex min-h-40 items-center justify-center p-6 text-zinc-500">
								Media unavailable
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ContentGrid;
