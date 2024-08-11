import { apiFetch } from './apiFetch';    
// export const getPageAPI = async (pageName) => {
//     const query = getPageDataQuery;   
//     const variable = {pageName: pageName}    
//     const data = await apiFetch(query, variable); 
//     return { ...data }; 
// } 

// export const getPostAPI = async (postName) => {
//     const query = getPostDataQuery;   
//     const variable = {posttype: postName}    
//     const data = await apiFetch(query, variable); 
//     return { ...data }; 
// }

// export const getSinglePostAPI = async (postName, slug) => {
//     const query = getSinglePostDataQuery;       
//     const variables = {posttype: postName, slug: slug} 
//     const data = await apiFetch(query, variables); 
//     return { ...data }; 
// }

// export const getSearchAPI = async (searchText) => {
//     const query = getSearchDataQuery;   
//     const variable = {searchText: searchText}    
//     const data = await apiFetch(query, variable); 
//     return { ...data }; 
// } 

// export const getRecipeCategoriesAPI = async () => { 
//     const data = await apiFetch(recipeCategoryListQuery);
//     return { ...data };
// };

// export const getProductListAPI = async (paged,posttype,searchtext,sortby,termid) => {
//     const query = getProductListQuery;       
//     const variables = {paged: paged, posttype: posttype,searchtext:searchtext, sortby: sortby, termid: termid} 
//     const data = await apiFetch(query, variables); 
//     return { ...data }; 
// }

// export const getProductAPI= async (paged,posttype,searchtext,sortby,termid) => {
//     const query = getProductListQuery;       
//     const variables = {paged: paged, posttype: posttype,searchtext: searchtext, sortby: sortby, termid: termid} 
//     const data = await apiFetchClientSide(query, variables);
//     return { ...data }; 
// }