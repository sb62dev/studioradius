import React from "react"; 
import Style from '@styles/recipe.module.scss'; 
import { useRouter } from 'next/router'; 
import Typo from "@components/Typo";
import Pagination from "@components/Pagination"; 
import { CONTENTFUL_SPACE_KEY, CONTENTFUL_ACCESS_TOKEN } from '@api/variables'; 

interface Props { 
}

const ProductData: React.FC<Props> = (props: Props) => { 

	return (
		<> 
		</>
	);
};

export default ProductData;

export async function getStaticProps() {
	const [] = await Promise.all([]);

	return {
		props: { 
		},
		revalidate: 10,
	};
};