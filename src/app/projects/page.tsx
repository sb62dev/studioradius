import React from "react"; 
import Link from "next/link";
import Image from "next/image";
import {getProjects} from "../../../public/api/contentfulAPI";   

const Projects: React.FC = async () => {
  const projectsData = await getProjects();  
  const checkData = projectsData?.map((item) => item?.fields?.featureImage?.fields?.file);
  console.log("check", checkData);
  const projectDataMap = projectsData?.length > 0 && projectsData?.map((item)=> (
                            <>
                                <div key={item?.sys?.id}>
                                    <Image src={"https:" + item?.fields?.featureImage?.fields?.file?.url as string} width={"200"} height={"200"} alt={"sdf"}/> 
                                    <Link href={`/projects/${item?.fields?.slug}`|| "#!"}> 
                                        {item?.fields?.title as string}
                                    </Link>
                                </div> 
                            </>
                        )); 
  return (
    <main >
        {projectDataMap} 
    </main>
  )
};

export default Projects; 