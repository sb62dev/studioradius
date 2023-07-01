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
    typoLeftDesTitleProps?: any;
    typoLeftDesTxtProps?: any;
    typoRightDesTitleProps?: any;
    typoRightDesTxtProps?: any;
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
    theme?: string;
    className?: string;
    cardImgClass?: string;
}

export const Card: React.FC<Props> = (props: Props) => {
    const typoTitleProps = props?.typoTitleProps;
    const cardLinkAriaLabel = props?.cardLinkAriaLabel;
    const cardTitleLink = props?.cardLink;
    const typoLeftDesTitleProps = props?.typoLeftDesTitleProps;
    const typoLeftDesTxtProps = props?.typoLeftDesTxtProps;
    const typoRightDesTitleProps = props?.typoRightDesTitleProps;
    const typoRightDesTxtProps = props?.typoRightDesTxtProps; 
    const cardImgSrc = props?.imgSrc;
    const cardImgAlt = props?.imgAlt;
    const cardImgWidth = props?.imgWidth || "200";
    const cardImgHeight = props?.imgHeight || "200";
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
                        <div className={`rowFlex ${Style.cardDes}`}>
                            {typoLeftDesTxtProps && (
                                <div className={`column ${Style.cardDesLeft}`}>
                                    <Typo {...typoLeftDesTitleProps} />
                                    <Typo {...typoLeftDesTxtProps} />
                                </div>
                            )}
                            {typoRightDesTxtProps && (
                                <div className={`column ${Style.cardDesLeft}`}>
                                    <Typo {...typoRightDesTitleProps} />
                                    <Typo {...typoRightDesTxtProps} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Card;
