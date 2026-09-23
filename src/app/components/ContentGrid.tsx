"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/Toolkit/store";

const ContentGrid = ({ loading }: { loading: boolean }) => {
	const content = useSelector((state: RootState) => state.search.results);
	const activeTab = useSelector((state: RootState) => state.search.activeTab);
	if (loading) {
		return (
			<div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
					(val) => (
						<div
							key={val}
							className={`${activeTab === "photos" ? "h-150 w-full" : "min-h-80 w-full"} bg-zinc-200 mb-4 rounded-xl animate-pulse`}
						/>
					),
				)}
			</div>
		);
	}

	if(!loading && (!content.length || content.length == 0)) {
		return <div className="text-xl text-zinc-400 mt-20 text-center">No Searched Content Yet.</div>
	}
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
						className="relative mb-4 break-inside-avoid group overflow-hidden rounded-xl bg-zinc-100 shadow-sm"
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
						<p className="absolute hidden top-5 text-zinc-50 text-sm m-2 group-hover:block">
							{con.title}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default ContentGrid;
