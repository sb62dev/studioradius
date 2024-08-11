import React from "react";
import Style from "@styles/singleProject.module.scss"; 
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
    const title = projectDetails?.title;
    const description = projectDetails?.content_desc;  
    const imgSection = projectDetails?.selectImage;
    const getColumnsClasses = (numberOfColumns) => { 
        const columnClasses = []; 
        switch (numberOfColumns) {
            case 100:
                columnClasses.push('columnMd12');
                break;
            case 50:
                columnClasses.push('columnMd6');
                break;
            case 33:
                columnClasses.push('columnMd4');
                break;
            case 60:
                columnClasses.push('columnMd7', 'columnMd5');
                break;
            case 40:
                columnClasses.push('columnMd5', 'columnMd7');
                break;
            default:
                columnClasses.push('columnMd12');
                break;
        } 
        return columnClasses;
    }

    return (
        <>
            <section className={`sectionSpace ${Style.projectsSection}`}>
				<div className={`container_outter`}>
                    <div className={Style.projectHead}>
                        {title && (
                            <div className={`${Style.title} ${Style.maintitle}`}>
                                <h1>{title}</h1>
                            </div> 
                        )} 
                        {description && (
                            <div className={`${Style.mainDesc} ${Style.desc}`}>
                                {description}
                            </div> 
                        )}  
                    </div>   
                    {imgSection?.length > 0 && imgSection?.map((item, itemkey) => {
                        const numberOfColumns = item?.fields?.numberOfColumns || 1;
                        const columnClasses = getColumnsClasses(numberOfColumns); 
                        const imgTitle = item?.fields?.title;
                        const imgDesc = item?.fields?.subTitle;
                        return (
                            <div key={itemkey} className={Style.projectImages}>
                                {(imgTitle || imgDesc) && (
                                    <div className={Style.projectImgHead}>
                                        {imgTitle && (
                                            <div className={`${Style.title}`}>
                                                <h2>{imgTitle}</h2>
                                            </div> 
                                        )} 
                                        {imgDesc && (
                                            <div className={`${Style.desc}`}>
                                                {imgDesc}
                                            </div> 
                                        )}  
                                    </div> 
                                )}  
                                <div className={`rowFlex projectRowFlex ${Style.projectRow}`}>
                                    {Array.isArray(item?.fields?.images) && item?.fields?.images.length > 0 && (
                                        <>
                                            {item?.fields?.images.slice(0, numberOfColumns).map((imgItem, imgItemKey) => {
                                                const currentColumnClass = columnClasses[imgItemKey % columnClasses.length];
                                                return (
                                                    <div key={imgItemKey} className={currentColumnClass}>
                                                        <div className={Style.projectImg}>
                                                            <ImageConverter
                                                                src={imgItem?.fields?.file?.url}
                                                                alt={imgItem?.fields?.title || "Image"}
                                                                width={imgItem?.fields?.file?.details?.image?.width || 1200}
                                                                height={imgItem?.fields?.file?.details?.image?.height || 650}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}  
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