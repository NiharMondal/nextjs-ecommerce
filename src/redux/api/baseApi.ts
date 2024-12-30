import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { config } from "@/config";
import { tagList } from "@/utils/baseApiTags";

const base_url = config.backend_url;

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: base_url,
		credentials: "include",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;
			if (token) {
				headers.set("authorization", `${token}`);
			}
			return headers;
		},
	}),
	tagTypes: tagList,
	endpoints: () => ({}),
});
