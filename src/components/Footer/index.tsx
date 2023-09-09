import React from 'react';
import Style from './index.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props {
    ftrLogoProps?: any,
    ftrDesc?: string, 
    menuItems?: any,
    footerAddressMenu?: any
}

export const Footer: React.FC<Props> = (props: Props) => {
    const ftrLogoProps = props?.ftrLogoProps?.fields?.file;
    const logoSrc = ftrLogoProps?.url;
    const logoAriaLabel = "Click here to go to homepage";
    const logoAlt = ftrLogoProps?.title || "Footer Logo";
    const logoLink = "/";
    const ftrDesc = props?.ftrDesc;
    const footerAddressMenu = props?.footerAddressMenu;
    const menuTitle = props?.menuItems?.headerMenuTitle;
    const menuLinks = props?.menuItems?.headerMenuLinks;
    const mergedMenuList = menuLinks?.map((url, index) => ({
        url,
        title: menuTitle[index]
    }));  

    return (
        <footer className={Style.footerWrapper}>
            <div className={`container_outter`}>
                {logoSrc &&
                    <div className={Style.footerLogo}>
                        <Link href={logoLink} aria-label={logoAriaLabel} >
                            <ImageConverter src={logoSrc} alt={logoAlt} height={120} width={200} />
                        </Link>
                    </div>
                }
                <div className={Style.footerContent}>
                    <div className={`rowFlex alignItemsCenter`}>
                        {ftrDesc &&
                            <div className={`columnMd5`}>
                                <div className={Style.copyrightText}>{ftrDesc}</div>
                            </div>
                        }
                        <div className={`columnMd4`}>
                            {mergedMenuList?.length > 0 &&
                                <div className={Style.footerNav}>
                                        <ul>
                                            {mergedMenuList?.map((item, itemKey) => (
                                                <li key={itemKey}>
                                                    <Link href={item?.link || "#!"} aria-label={"Click here to open " + item?.title}>{item?.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                            }
                        </div>
                        <div className={`columnMd3`}>
                            {footerAddressMenu  &&
                                <div className={Style.ftrcntInfo} dangerouslySetInnerHTML={{ __html: footerAddressMenu }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
