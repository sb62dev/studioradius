import React from "react"; 
import Style from "@styles/index.module.scss";   
import { apiFetch } from "@api/apiFetch";
import { varProjects, varHeaderftr } from "@api/variables";

interface Props {
    headerFtrData?: any; 
    projectData?: any; 
    projects?: any;
}

const Home: React.FC<Props> = (props: Props) => {  
    return (
        <>
            <h1> Homepage </h1>
        </>
    );
};

export default Home;

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
