import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://rickandmortyapi.com/api/character",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	async getEvents() {
		return apiClient.get("/");
	},
	async getEventsPage(page) {
		return apiClient.get("?page=" + page);
	},
	async getEvent(id) {
		return apiClient.get("/" + id);
	}
};
