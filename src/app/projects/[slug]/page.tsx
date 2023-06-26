import React from "react";
import { createClient } from "contentful";
import {
    CONTENTFUL_SPACE_KEY,
    CONTENTFUL_ACCESS_TOKEN,
} from "../../../../public/api/constants";

if (!CONTENTFUL_SPACE_KEY || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("Contentful space key or access token is undefined.");
}

const client = createClient({
    space: CONTENTFUL_SPACE_KEY,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
});

export async function generateStaticParams() {
    const res = await client.getEntries({ content_type: "projects" });
    const paths = res.items.map((item) => {
        return {
            slug: item.fields.slug
        };
    }); 
    return  paths  
}

async function getPost(params: { slug: string }) {
    const { items } = await client.getEntries({ 
		content_type: "projects",
		'fields.slug': params.slug
	});  
    return items; 
}

interface ProjectDetailsProps {
    params: {
        slug: string;
    };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = async ({ params }) => { 
	const post = await getPost(params);
	const postTitle = post?.[0]?.fields?.title; 
    return (
        <main>
            <h1> Projects Details <br/> {postTitle as string}</h1>
        </main>
    );
};

export default ProjectDetails; 