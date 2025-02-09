import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/navigation/render`;

const getMenu = async (menuId: string) => {
    try {
        const response = await fetch(apiUrl + '/' + menuId + '?type=TREE', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env. NEXT_PUBLIC_API_TOKEN}`
            }
        });
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error:", error);
        }    
    }
};

export default getMenu;
