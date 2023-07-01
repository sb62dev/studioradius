import React, { useState, useEffect } from "react";
import Style from "./index.module.scss";
import Link from "next/link";
import Navigation from "@components/Navigation";  
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props {
    varient?: any,
    menuItems?: any, 
    multiLogosList?: any,
    multiLogosListWhite?: any,
    arialabel?: string,
    target?: string,
    link?: string,
    logoSrc?: string,
    logoAlt?: string,
    id?: any,
}

export const Header: React.FC<Props> = (props: Props) => {
    const multiLogosList = props?.multiLogosList;
    const multiLogosListWhite = props?.multiLogosListWhite;
    const logoSrc = props?.logoSrc;
    const logoAlt = props?.logoAlt;
    const arialabel = props?.arialabel;
    const target = props?.target;
    const link = props?.link;    
    const NavigationProps = {
        breakPoint: 766.99, 
        openMenuArialabel: "Click here to open menu", 
        closeMenuArialabel: "Click here to close menu", 
        menuData: props?.menuItems 
    }

    const headerVarient = props?.varient || "White";
    const id = props?.id;
    const headrVarient = () => {
        switch (headerVarient || null) {
            case "White":
                return Style.bgWhite;
            case "Transparent":
                return Style.bgTransparent;
            case "":
            case undefined:
            case null:
                return Style.headerstatic;
        }
        return "";
    };
    const getHeaderVarient = headrVarient();
    const [scroll, setScroll] = useState(false);

    const logosList = <>{multiLogosList?.length > 0 &&
                            <ul>
                                { multiLogosList?.map((item, itemKey) => (
                                    <li key={item?.uid || itemKey}><Link href={item?.logoLinkUrl || "#!"} aria-label={item?.logoLinkAriaLabel} target={item?.logoLinkTarget}>
                                        <ImageConverter src={item?.logo?.[0]?.url} alt={item?.logo?.[0]?.alt} width={75} height={16} /></Link>
                                    </li>
                                ))}
                            </ul>
                        }</>

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);  
 
    const headerClass = Style.headerWrapper + ' ' + getHeaderVarient + ' ' + (scroll ? 'headerFixed ' + Style.bgWhite + ' ' + Style.Scrolled : Style.bgTransparent);
    
    return (
        <> 
            <header className={headerClass} id={id}>
                <div className={`container_outter`} >
                    <div className={Style.logoMob}>
                        {logosList}
                    </div>
                    <div className={`${Style.headerRow} rowFlex`}>
                        <div className={`columnAuto columnMd6`}>
                            <div className={Style.logoCol}>
                                <div className={`rowFlex rowNoGutters ${Style.logoWrap}`}>
                                    <div className={`columnAuto`}>
                                        {logoSrc &&
                                            <div className={Style.mainLogo}>
                                                <Link href={`${link}`} aria-label={arialabel} target={target}>
                                                    <ImageConverter src={logoSrc} alt={logoAlt} height={120} width={120} />
                                                </Link>
                                            </div>
                                        }
                                    </div>
                                    <div className={`column`}>
                                        <div className={`${Style.headerLogo} ${Style.whiteLogo}`}>
                                            {multiLogosListWhite?.length > 0 &&
                                                <ul>
                                                    {multiLogosListWhite?.map((item, itemKey) => (
                                                        <li key={item?.uid || itemKey}><Link href={item?.logoLinkUrl || "#!"} aria-label={item?.logoLinkAriaLabel} target={item?.logoLinkTarget}>
                                                            <ImageConverter src={item?.logo?.[0]?.url} alt={item?.logo?.[0]?.alt} width={128} height={28} /></Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                        </div>
                                        <div className={`${Style.headerLogo} ${Style.logoImg}`}>
                                            {logosList}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`columnMd columnAuto ${Style.mobMenu}`}>
                            {NavigationProps &&
                                <Navigation {...NavigationProps}/>
                            }
                        </div> 
                    </div>
                </div>
            </header> 
        </>
    );
};

export default Header;
