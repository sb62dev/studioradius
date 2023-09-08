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
    const media1Column1 = projectDetails?.media1Column1;
    const media1Column2 = projectDetails?.media1Column2;
    const media1Column3 = projectDetails?.media1Column3;
    const media2Columns1 = projectDetails?.media2Columns1;
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
                    <div className={Style.projectImages}>
                        {media1Column1?.length > 0 && (
                            <div className={Style.projectImageCol1}>
                                {media1Column1?.map((item,itemKey) => (
                                    <div key={itemKey}>
                                        <ImageConverter src={item?.fields?.file?.url} alt={item?.fields?.file?.titile || "Image"} width={1200} height={650} /> 
                                    </div>
                                ))}
                            </div>
                        )} 
                        {media1Column2?.length > 0 && (
                            <div className={Style.projectImageCol1}>
                                {media1Column2?.map((item,itemKey) => (
                                    <div key={itemKey}>
                                        <ImageConverter src={item?.fields?.file?.url} alt={item?.fields?.file?.titile || "Image"} width={1200} height={650} /> 
                                    </div>
                                ))}
                            </div>
                        )} 
                        {media1Column3?.length > 0 && (
                            <div className={Style.projectImageCol1}>
                                {media1Column3?.map((item,itemKey) => (
                                    <div key={itemKey}>
                                        <ImageConverter src={item?.fields?.file?.url} alt={item?.fields?.file?.titile || "Image"} width={1200} height={650} /> 
                                    </div>
                                ))}
                            </div>
                        )} 
                    </div>
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