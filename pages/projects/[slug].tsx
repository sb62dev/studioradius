import React from "react";
import Style from "@styles/singleRecipe.module.scss"; 
import { apiFetch } from "@api/apiFetch";
import { varProjects, varHeaderftr } from "@api/variables"; 
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props { 
    headerFtrData?: any;
	projectDetails?: any;  
}
export const SingleRecipe: React.FC<Props> = (props: Props) => {
    const projectDetails = props?.projectDetails?.fields; 
    console.log(projectDetails);
    const title = projectDetails?.title;
    const description = projectDetails?.content_desc;  
    const imgSection = projectDetails?.selectImage;
    return (
        <>
            <section className={`sectionSpace ${Style.projectsSection}`}>
				<div className={`ContainerMD`}>
                    {title && (
                        <div className={Style.title}>
                            <h1>{title}</h1>
                        </div> 
                    )} 
                    {description && (
                        <div className={Style.description}>
                            {description}
                        </div> 
                    )}  

                    {imgSection?.length > 0 && imgSection?.map((item, itemkey) => (
                    <div key={itemkey} className={Style.projectImages}>
                        <div className={`rowFlex`}>
                            {Array.isArray(item?.fields?.images) && item?.fields?.images.length > 0 && (
                                <>
                                    {item?.fields?.images.slice(0, item?.fields?.numberOfColumns).map((imgItem, imgItemKey) => (
                                        <div key={imgItemKey} className={`columnMd${12 / item?.fields?.numberOfColumns}`}>
                                            <ImageConverter
                                                src={imgItem?.fields?.file?.url}
                                                alt={imgItem?.fields?.title || "Image"}
                                                width={1200}
                                                height={650}
                                            />
                                        </div>
                                    ))} 
                                </>
                            )}
                        </div>
                    </div>
                    ))} 

				</div>
			</section> 
		</> 
    );
};

export default SingleRecipe;
export async function getStaticProps({ params }) {
    const { slug } = params;
    const [headerFtrData, projectData] = await Promise.all([ apiFetch(varHeaderftr), apiFetch(varProjects, slug) ]);
    const projectDetails = projectData?.[0];
    if (!projectDetails) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            headerFtrData,
            projectDetails, 
            slug,
        },
        revalidate: 10,

    };
}
export async function getStaticPaths() {
    try {
        const [projectData] = await Promise.all([apiFetch(varProjects) ]);
        const dataList = projectData || [];
        const paths = dataList.map((item) => {
            return {
                params: {
                    slug: item?.fields?.slug,
                },
            };
        });
        return {
            paths,
            fallback: true,
        };
    } catch (error) {
        console.error("Error fetching post data:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
}