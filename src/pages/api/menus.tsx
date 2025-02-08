import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/navigation/render`;

const getMenu = async (menuId: number) => {
    try {
        const res = await axios.get(`${apiUrl}/${menuId}?type=TREE`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
            },
        });

        if (res.status >= 200 && res.status < 300) {
            return res.data;
        }        

        return false;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Axios error:", error.response?.data || error.message);
        } else {
            console.error("Unexpected error:", error);
        }    
    }
};

export default getMenu;
