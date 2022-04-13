import { apiClient } from "./APIClient";

export const getHotels = () => {
    return apiClient.get('/hotels');
}