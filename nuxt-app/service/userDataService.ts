import axios from "axios";


    const USER_API_URL = "https://localhost:7080/api/Place";
    const USER_API_URL_USER = "https://localhost:7080/api/User";

    export default class UserDataService {
        apiClient = axios.create({
            baseURL: 'https://localhost:7080/api/',
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        async getPlaces(): Promise<any> {
            try {
                const response = await axios.get(`${USER_API_URL}/GetPlaces`);
                return response;
            } catch (e) {
                console.error(e);
                throw createError({
                    statusCode: 500,
                    statusMessage: 'Failed to fetch data GetPlaces'
                });
            }

        }

        async getPlace(id: number): Promise<void> {
            try {
                const response = await axios.get(`${USER_API_URL}/${id}`);
                return response;

            } catch (e) {
                console.error(e);
                throw createError({
                    statusCode: 500,
                    statusMessage: 'Failed to fetch data getPlace'
                })
            }
        }

        async addPlaces(place: any): Promise<any> {
            try {
                const response = await axios.post(`${USER_API_URL}/AddPlaces`, place);
                return response;
            } catch (e) {
                console.error(e);
                throw createError({
                    statusCode: 500,
                    statusMessage: 'Failed to fetch data AddPlaces'
                });
            }

        }

        async updatePlace(place: any): Promise<any> {
            try {
                const response = await axios.put(`${USER_API_URL}/UpdatePlaces`, place);
                return response;
            } catch (e) {
                console.error(e);
                throw createError({
                    statusCode: 500,
                    statusMessage: 'Failed to fetch data AddPlaces'
                });
            }

        }

        async removePlace(id: number): Promise<any> {
            try {
                const response = await axios.delete(`${USER_API_URL}/RemovePlace?id=${id}`);
                return response;
            } catch (e) {
                console.error(e);
                throw createError({
                    statusCode: 500,
                    statusMessage: 'Failed to fetch data AddPlaces'
                });
            }

        }

        async getUsers(): Promise<any> {
            try {
                const token : string | any = localStorage.getItem('token');
                const response = await axios.get(`${USER_API_URL_USER}/profile`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log(response.data);
                return response;
            } catch (e) {
                console.error(e);
                throw createError({
                    statusCode: 500,
                    statusMessage: 'Failed to fetch data Users'
                });
            }
        }
    }