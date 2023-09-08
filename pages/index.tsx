import React from "react"; 
import Style from "@styles/index.module.scss";   
import { apiFetch } from "@api/apiFetch";
import { varProjects, varHeaderftr } from "@api/variables";

interface Props {
    headerFtrData?: any;  
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
    const [headerFtrData] = await Promise.all([ apiFetch(varHeaderftr)]);
    return {
        props: { 
            headerFtrData, 
        },
        revalidate: 10,
    };
}