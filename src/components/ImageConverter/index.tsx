import React from "react";
import Image, { ImageProps } from "next/image";
// import { useRemoveDomain } from "@util/hooks/useRemoveDomain";

interface Props extends ImageProps {
    src: string;
    alt: string;
}

export const ImageConverter: React.FC<Props> = ({ src,alt, ...rest }) => { 
    // const defaultSrc = `${useRemoveDomain(src)}`;   
    return <>{<Image src={`https:${src}`} alt={alt} {...rest} />}</>;
};

export default ImageConverter;