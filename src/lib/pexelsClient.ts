// pexelsClient.js
import axios from "axios";

const pexels = axios.create({
	baseURL: "https://api.pexels.com",
	headers: {
		Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
	},
});

export default pexels;
