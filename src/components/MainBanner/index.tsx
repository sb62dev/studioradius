import React from "react";
import Style from "./index.module.scss";
import Typo from "@components/Typo"; 
import { useRemoveDomain } from "@util/hooks/useRemoveDomain";
import { useMediaQuery } from "@util/hooks/useMediaQuery";

interface Props {
    imgSrc?: string,
    imgMobSrc?: string,
    bannerTitleProps?: any,
    searchData?: any,
    mealData?: any,
    bannerVarient?: any,
}

export const MainBanner: React.FC<Props> = (props: Props) => {
    const matchMedia = useMediaQuery("766.99");
    const matches = !!matchMedia;
    const imgSrc = props?.imgSrc;
    const imgMobSrc = props?.imgMobSrc;
    const bannerImgSrc = useRemoveDomain(imgSrc); 
    const bannerImgMobSrc = useRemoveDomain(imgMobSrc); 
    const bannerTitleProps = props?.bannerTitleProps;
    const mealData = props?.mealData;
    const searchData = props?.searchData;
    const bannerVarient = props?.bannerVarient;
    const bannerHeight = () => {
        switch (bannerVarient || null) {
            case "largeBanner":
                return Style.largeBanner;
            case "smallBanner":
                return Style.smallBanner;
            case "":
            case undefined:
            case null:
                return Style.largeBanner;
        }
        return "";
    };
    const getBannerVarient = bannerHeight(); 

    return (
        <>
            <div className={`${getBannerVarient} ${Style.bannerWrapper}`}>
                <div className={Style.bannerImg} style={{ backgroundImage: `url(${matchMedia && bannerImgMobSrc ? bannerImgMobSrc : bannerImgSrc})`, }} >
                    <div className={`container_outter`}>
                        <div className={Style.bannerContent}>
                            <div className={Style.contentCol}>
                                {bannerTitleProps && (
                                    <Typo {...bannerTitleProps} className={Style.bannerTitle} />
                                )} 
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default MainBanner;
