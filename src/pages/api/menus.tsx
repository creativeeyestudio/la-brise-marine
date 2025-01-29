import axios from "axios";
import nextConfig from "../../../next.config";

const apiUrl = `${nextConfig.apiUrl}/api/navigation/render`;

const getMenu = async (menuId: number) => {
    try {
        const res = await axios.get(`${apiUrl}/${menuId}?type=TREE`, {
            headers: {
                Authorization: `Bearer ${nextConfig.apiToken}`,
            },
        });

        if (res.status === 200) {
            return res.data;
        } else {
            console.error("API returned an unexpected status:", res.status, res.statusText);
            throw new Error(`API Error: ${res.status} - ${res.statusText}`);
        }
    } catch (error: unknown) {
        // Gestion des erreurs réseau ou autres
        console.error("Failed to fetch menu:", error || error);
        throw new Error("An error occurred while fetching the menu.");
    }
};

export default getMenu;
