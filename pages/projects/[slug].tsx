import React from "react";
import Style from "@styles/singleRecipe.module.scss"; 

interface Props { 
}
export const SingleRecipe: React.FC<Props> = (props: Props) => {
     
    return (
        <>
            <h1> Single Recipe </h1>
        </>
    );
};

export default SingleRecipe;
// export async function getStaticProps({ params }) {
//     const { slug } = params;
//     const [headerData, footerData, recipeData, relativePosts, notFoundData, pageRecipe] = await Promise.all([getPageAPI(varHeader), getPageAPI(varFooter), getSinglePostAPI(varRecipe, slug), getPostAPI(varRecipe), getPageAPI(varPage404), getPageAPI(varPageRecipe)]);
//     if (!recipeData) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: {
//             headerData,
//             footerData,
//             recipeData,
//             relativePosts, 
//             notFoundData,
//             pageRecipe,
//             slug,
//         },
//         revalidate: revalidatePostData,

//     };
// }
// export async function getStaticPaths() {
//     try {
//         const data = await getPostAPI("projects");
//         const dataList = data?.data || [];
//         const paths = dataList.map((item) => {
//             return {
//                 params: {
//                     slug: item.post_name,
//                 },
//             };
//         });
//         return {
//             paths,
//             fallback: true,
//         };
//     } catch (error) {
//         console.error("Error fetching post data:", error);
//         return {
//             paths: [],
//             fallback: false,
//         };
//     }
// }
