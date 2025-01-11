import axios from "axios";
import nextConfig from "../../../next.config";

const apiUrl = `${nextConfig.apiUrl}/api/menus`;

const getMenu = async (menuId: number) => {
    try {
        // Effectuer la requête vers l'API
        const res = await axios.get(`${apiUrl}/${menuId}?populate=deep`, {
            headers: {
                Authorization: `Bearer ${nextConfig.apiToken}`,
            },
        });

        // Vérifier le statut de la réponse
        if (res.status === 200) {
            return res.data; // Retourne les données en cas de succès
        } else {
            console.error("API returned an unexpected status:", res.status, res.statusText);
            throw new Error(`API Error: ${res.status} - ${res.statusText}`);
        }
    } catch (error: any) {
        // Gestion des erreurs réseau ou autres
        console.error("Failed to fetch menu:", error?.message || error);
        throw new Error("An error occurred while fetching the menu.");
    }
};

export default getMenu;
