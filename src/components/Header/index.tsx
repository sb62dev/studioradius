import React, { useState, useEffect } from "react";
import Style from "./index.module.scss";
import Link from "next/link";
import Navigation from "@components/Navigation";  
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props { 
    logo?: any;
    menuItems?: any,  
    arialabel?: string, 
    id?: any,
}

export const Header: React.FC<Props> = (props: Props) => { 
    const logo = props?.logo?.fields?.file;  
    const logoSrc = logo?.url;
    const logoAriaLabel = "Click here to go to homepage";
    const logoAlt = logo?.title || "Header Logo";
    const logoLink = "/";
    console.log(props?.menuItems);
    const menuTitle = props?.menuItems?.headerMenuTitle;
    const menuLinks = props?.menuItems?.headerMenuLinks;
    const mergedMenuList = menuLinks?.map((url, index) => ({
        url,
        title: menuTitle[index]
    }));  

    const NavigationProps = {
        breakPoint: 766.99, 
        openMenuArialabel: "Click here to open menu", 
        closeMenuArialabel: "Click here to close menu", 
        menuData: mergedMenuList 
    } 
 
    const id = props?.id;   

    const logosList =   <>  
                            {logoSrc &&
                                <div className={Style.headerLogo}>
                                    <Link href={logoLink} aria-label={logoAriaLabel} >
                                        <ImageConverter src={logoSrc} alt={logoAlt} height={60} width={60} />
                                    </Link>
                                </div>
                            } 
                        </>  
    
    return (
        <> 
            <header className={Style.headerWrapper} id={id}>
                <div className={`container_outter`} >  
                    <div className={`${Style.headerRow} rowFlex`}>
                        <div className={`columnAuto columnMd6`}>
                            {logosList}
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
