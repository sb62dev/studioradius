import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'; 
import Header from '@components/Header';
import Footer from '@components/Footer';
import useDetectIOS from "@util/hooks/useDetectIOS"; 
import { useRemoveDomain } from "@util/hooks/useRemoveDomain";
import Link from 'next/link';

interface Props { 
    headerFtrData?: any; 
    pageData?: any; 
    recipeProps?: any;
    children?: React.ReactNode;
}
 
const Layout: React.FC<Props> = (props: Props) => {   
    const children = props?.children;
    const headerFtrData = props?.headerFtrData?.[0]?.fields;    
    const seoData = props?.pageData?.data?.create_block_seometa?.[0];  
    const favIcon = headerFtrData?.favIcon?.url || "/images/favicon.png";
    const favIconUrl = useRemoveDomain(favIcon); 
    const metaTitle= seoData?.metaTitle || "Studio Radius";
    const metaDescription= seoData?.metaDescription;  
    const text = "Skip to main content";  
    const gtmkey = headerFtrData?.gtmKey; 
 
    const headerPropsList = { 
        menuItems: headerFtrData,  
        logo: headerFtrData?.headerLogo,  
        link: headerFtrData?.logourl || "/", 
    };
    
    const footerPropsList = { 
        ftrLogoProps: headerFtrData?.footerLogo,
        ftrDesc: headerFtrData?.footerDescription, 
        menuItems: headerFtrData,
        footerAddressMenu: headerFtrData?.footerAddressMenu
    }; 

    const isIOS = useDetectIOS();
    return (
        <> 
            <Head> 
                {isIOS ? (
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" />  
                ) : (
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0"/>
                )} 
                {favIcon && 
                    <link rel="icon" type="image/png" sizes="48x48" href={favIconUrl} />
                } 
                <link rel="shortcut icon" href="/images/favicon.ico" />  
                {metaTitle &&
                    <title>{metaTitle}</title>
                }   
                {metaDescription &&
                    <meta name="description" content={metaDescription}></meta>
                }
                {gtmkey &&
                    <meta name="gtmkey" content={gtmkey}></meta>
                }
            </Head> 
            <main>
                <Link className="skip-main sr-only" href="#mainSection">{text}</Link>
                <Header {...headerPropsList} />
                <div id="mainSection">{children}</div>
                <Footer {...footerPropsList} /> 
            </main>
        </>
    )
}

export default Layout;