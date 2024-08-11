import { createClient } from 'contentful';

export const CONTENTFUL_SPACE_KEY = process.env.CONTENTFUL_SPACE_KEY;
export const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN; 
export const varProjects= "projects"; 
export const varHeaderftr= "header_footer";
export const clientAuth = createClient({
    space: CONTENTFUL_SPACE_KEY as string,
    accessToken: CONTENTFUL_ACCESS_TOKEN as string
}); 