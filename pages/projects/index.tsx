import React from "react"; 
import Style from '@styles/recipe.module.scss'; 
import { apiFetch } from "@api/apiFetch";
import { varProjects, varHeaderftr } from "@api/variables";
import Card from "@components/Card"; 

interface Props { 
	headerFtrData?: any;
	projectData?: any;  
}

const ProductData: React.FC<Props> = (props: Props) => {  
	const projectData = props?.projectData;  
	return (
		<> 
			<section className={`sectionSpace ${Style.productsSection}`}>
				<div className={`ContainerMD`}>
					{projectData?.length > 0 && (
						<>
						   <h2>Projects</h2>
						   <div className={`rowFlex`}>
								{projectData?.map((item,itemkey) => (
									<div key={itemkey} className={'columnMd4'}>
										<Card 
											imgSrc={item?.fields?.featuredImage?.fields?.file?.url} 
											cardLink={item?.fields?.slug ? "projects/" + item.fields.slug : "#!"} 
											typoTitleProps={{tag:"h4", content: item?.fields?.title}}
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