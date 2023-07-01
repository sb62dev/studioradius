import { clientAuth } from "./variables";  

export async function apiFetch( variables = {}) {
    try {   
        const res = await clientAuth.getEntries({
            content_type: variables as string
        });    
        return res?.items;
    } catch (error) {
        console.error("Failed to fetch API!", error);
        return [];
    }
}  