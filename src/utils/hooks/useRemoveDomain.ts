export const useRemoveDomain = (url: string) => {

   const CONTENTFUL_SPACE_KEY = process.env.CONTENTFUL_SPACE_KEY;
     
    const httpRegex = /^https?:\/\//;
  
    // If the url is falsy or empty, return "#!"
    if (!url) return "#!"; 
  
    // Remove "http://" or "https://" from the beginning of the url
    let cleanedUrl = url?.replace(httpRegex, "");
  
    // Remove trailing slashes from the cleaned URL
    cleanedUrl = cleanedUrl?.replace(/\/$/, "");
  
    // Split the cleaned URL by slashes
    const segments = cleanedUrl?.split("/");
  
    // Find the index of "wp-content" in the segments array
    const wpContentIndex = segments?.findIndex((segment) => segment === CONTENTFUL_SPACE_KEY);
  
    // If "wp-content" is found, remove it and the segments before it
    if (wpContentIndex !== -1) {
      segments?.splice(0, wpContentIndex + 1);
    }
  
    // Join the remaining segments with slashes
    const joinedSegments = `/assets/${segments?.join("/")}`;
  
    // Return the joined segments
    return joinedSegments;
    
};