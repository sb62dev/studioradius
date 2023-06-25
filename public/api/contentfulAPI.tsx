import { createClient } from "contentful";
import { CONTENTFUL_SPACE_KEY, CONTENTFUL_ACCESS_TOKEN } from "./constants"; 

export const getProjects = async () => {

    if (!CONTENTFUL_SPACE_KEY || !CONTENTFUL_ACCESS_TOKEN) {
        throw new Error("Contentful space key or access token is undefined.");
    } 

    const client = createClient({
        space: CONTENTFUL_SPACE_KEY,
        accessToken: CONTENTFUL_ACCESS_TOKEN
    });

    const res = await client.getEntries({ content_type: 'projects'}); 
    return res.items;

};