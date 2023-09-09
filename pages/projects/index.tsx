import React from "react"; 
import Style from '@styles/projects.module.scss'; 
import { apiFetch } from "@api/apiFetch";
import { varProjects, varHeaderftr } from "@api/variables";
import Card from "@components/Card"; 

interface Props { 
	headerFtrData?: any;
	projectData?: any;  
}

const ProductData: React.FC<Props> = (props: Props) => {  
	const projectData = props?.projectData;  
	const title = projectData?.title || "Projects";
	return (
		<> 
			<section className={`sectionSpace ${Style.projectSec}`}>
				<div className={`container_outter`}>
					<div className={Style.projectHead}>
                        {title && (
                            <div className={`${Style.title} ${Style.maintitle}`}>
                                <h1>{title}</h1>
                            </div> 
                        )}  
                    </div>  
					{projectData?.length > 0 && (
						<> 
						   <div className={`rowFlex`}>
								{projectData?.map((item,itemkey) => (
									<div key={itemkey} className={'columnMd4'}>
										<Card 
											imgSrc={item?.fields?.featuredImage?.fields?.file?.url} 
											cardLink={item?.fields?.slug ? "projects/" + item.fields.slug : "#!"} 
											typoTitleProps={{tag:"h3", content: item?.fields?.title}}
											cardDesc={item?.fields?.excerptText}
										/> 
									</div>
								))}
							</div>
						</> 
					)} 
				</div>
			</section>
			
		</>
	);
};

export default ProductData;

export async function getStaticProps() {
    const [headerFtrData, projectData] = await Promise.all([ apiFetch(varHeaderftr), apiFetch(varProjects) ]);
    return {
        props: { 
            headerFtrData,
            projectData,
        },
        revalidate: 10,
    };
}