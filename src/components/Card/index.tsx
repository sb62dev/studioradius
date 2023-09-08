import React from "react";
import Style from "./index.module.scss";
import Typo from "@components/Typo";
import Link from "next/link";
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props {
    cardLink?: any;
    cardLinkAriaLabel?: string;
    typoTitleProps?: any;
    cardDesc?: any; 
    imgSrc?: string;
    imgAlt?: string; 
    theme?: string;
    className?: string;
    cardImgClass?: string;
}

export const Card: React.FC<Props> = (props: Props) => {
    const typoTitleProps = props?.typoTitleProps;
    const cardLinkAriaLabel = props?.cardLinkAriaLabel;
    const cardTitleLink = props?.cardLink;
    const cardDesc = props?.cardDesc; 
    const cardImgSrc = props?.imgSrc;
    const cardImgAlt = props?.imgAlt || "Image";
    const cardImgWidth = "200";
    const cardImgHeight = "280";
    const cardClassName = props?.className;
    const theme = props?.theme; 
    const getCardTheme = theme === "Border" ? Style.cardWithBorder : "";

    return (
        <>
            <div className={`${Style.cardWrapper} ${getCardTheme} ${cardClassName}`} >
                {cardImgSrc && (
                    <div className={Style.cardImg}>
                        <Link href={cardTitleLink} target="_self" aria-label={`Click here to open ${cardLinkAriaLabel}`}>
                            <ImageConverter className={props?.cardImgClass} src={cardImgSrc} alt={cardImgAlt} width={cardImgWidth} height={cardImgHeight} />
                        </Link>
                    </div>
                )} 
                {typoTitleProps && (
                    <div className={Style.cardContent}>
                        <div className={Style.cardTitle}>
                            <Typo {...typoTitleProps} />
                        </div> 
                        <div className={Style.cardDesc}>
                            {cardDesc}
                        </div> 
                    </div>
                )}
            </div>
        </>
    );
};

export default Card;
