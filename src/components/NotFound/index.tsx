import React from "react";
import Style from "./index.module.scss";
import Typo from "@components/Typo";
import Button from "@components/Button";
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props {
    imgSrc?: string
    imgAlt?: string
    title?: string
    text?: string
    btnLink?: string
    btnLabel?: string
    ariaLabel?: string
}

const NotFound: React.FC<Props> = (props: Props) => {
    const imgSrc = props?.imgSrc;
    const imgAlt = props?.imgAlt || "Error Icon";
    const title = props?.title || "Page Not Found";
    const text = props?.text || "Sorry, we can’t find the page you’re looking for.";
    const btnLink = props?.btnLink || "/";
    const btnLabel = props?.btnLabel || "Back to Home Page";
    const ariaLabel = props?.ariaLabel || "Go to Home Page";
    return (
        <div className={Style.erroPageWrap}>
            <div className={`ContainerMD`}>
                {imgSrc &&
                    <div className={Style.errorIcon}>
                        <ImageConverter src={imgSrc} width={515} height={256} alt={imgAlt} />
                    </div>
                }
                {title &&
                    <Typo tag={"h1"} content={title} />
                }
                {text &&
                    <Typo tag={"p"} content={text} />
                }
                {btnLabel &&
                    <Button link={btnLink} label={btnLabel} ariaLabel={ariaLabel} varient="Primary" />
                }
            </div>
        </div>
    );
};

export default NotFound;