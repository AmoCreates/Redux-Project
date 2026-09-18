import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface searchState {
	query: string;
	activeTab: string;
	results: [];
	loading: boolean;
	error: string | null;
}

// Define the initial state using that type
const initialState: searchState = {
	query: "",
	activeTab: "photos",
	results: [],
	loading: false,
	error: null,
};

export const searchSlice = createSlice({
	name: "search",

	initialState,
	reducers: {
		setQuery: (state, action: PayloadAction<string>) => {
			state.query = action.payload;
		},

		setActiveTab: (state, action: PayloadAction<string>) => {
			state.activeTab = action.payload;
		},

		setResults: (state, action: PayloadAction<[]>) => {
			state.results = action.payload;
		},

		setLoading: (state) => {
			state.loading = true;
			state.error = null;
		},

		setError: (state, action: PayloadAction<string | null>) => {
			state.loading = false;
			state.error = action.payload;
		},

		clearResults: (state) => {
			state.results = [];
		}
	},
});

export const { setQuery, setActiveTab, setResults, setLoading, setError, clearResults } =
	searchSlice.actions;

export default searchSlice.reducer;
