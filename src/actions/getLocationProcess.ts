import axios from "axios";
// import { env } from "process";

const getLocationProcess = async (start: string, end: string) => {
    try {
        const startLocation = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
                params: {
                    address: `${start}, Sri Lanka`,
                    key: "AIzaSyBYezkWgfRjVTrdDX4W3DUhN0jiw-Qusas",
                },
            }
        );

        const endLocation = await axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
                params: {
                    address: `${end}, Sri Lanka`,
                    key: "AIzaSyBYezkWgfRjVTrdDX4W3DUhN0jiw-Qusas",
                },
            }
        );
        return {
            departure: startLocation.data.results[0].geometry.location,
            destination: endLocation.data.results[0].geometry.location,
        }
    } catch (error) {
        console.error("Error fetching geocode:", error);
        throw new Error("Failed to get answers" + error);
    }
}

const getLocationRestaurants = async (lat: number, lng: number) => {
    try {
        const response = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
            params: {
                location: `${lat},${lng}`,
                radius: 5000, // Search within a 5km radius
                type: 'restaurant',
                key: "AIzaSyBYezkWgfRjVTrdDX4W3DUhN0jiw-Qusas",
            },
            // key: import.meta.env.VITE_GOOGLE_MAP_KEY

        });

        console.log(response);
    } catch (error) {
        console.error("Error fetching geocode:", error);
        throw new Error("Failed to get answers" + error);
    }
}

export { getLocationRestaurants }
export default getLocationProcess