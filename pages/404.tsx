import React from "react";
// import { getPageAPI } from '@api/getAPI';
// import { varHeader, varPage404, revalidatePostData, varFooter } from '@api/variables';
import NotFound from "@components/NotFound";

interface Props {
    pageData?: any;
    headerData?: any;
    footerData?: any;
}
const pageNotFound: React.FC<Props> = (props: Props) => {
    const getPageData = props?.pageData?.data?.create_block_notfound?.[0];
    const notFoundData = {
        imgSrc: getPageData?.errorImage?.url,
        imgAlt: getPageData?.errorBtnariaLabel,
        title: getPageData?.errorTitle,
        text: getPageData?.errorSubTitle,
        btnLink: getPageData?.errorBtnUrl,
        btnLabel: getPageData?.errorBtnName,
        ariaLabel: getPageData?.errorBtnariaLabel,
    }
    return (
        <NotFound {...notFoundData} />
    );
};
export default pageNotFound;

// export async function getStaticProps() {
//     const [headerData, pageData, footerData] = await Promise.all([getPageAPI(varHeader), getPageAPI(varPage404), getPageAPI(varFooter)]);
//     return {
//         props: {
//             headerData,
//             pageData,
//             footerData
//         },
//         revalidate: revalidatePostData,
//     };
// };