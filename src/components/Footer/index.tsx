import React from 'react';
import Style from './index.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ImageConverter = dynamic(() => import('@components/ImageConverter'));

interface Props {
    ftrLogoProps?: any,
    ftrDesc?: string, 
    footerMenus?: any,
    footerAddressMenu?: any
}

export const Footer: React.FC<Props> = (props: Props) => {
    const ftrLogoProps = props?.ftrLogoProps?.fields?.file;
    const logoSrc = ftrLogoProps?.url;
    const logoAriaLabel = "Click here to go to homepage";
    const logoAlt = ftrLogoProps?.title || "Footer Logo";
    const logoLink = "/";
    const ftrDesc = props?.ftrDesc;
    const footerMenuTitle = props?.footerMenus?.footerMenuTitle;
    const footerMenuLinks = props?.footerMenus?.footerMenuLinks;
    const mergedFtrMenuList = footerMenuLinks?.map((link, index) => ({
        link,
        title: footerMenuTitle[index]
    })); 
    const footerAddressMenu = props?.footerAddressMenu;

    return (
        <footer className={Style.footerWrapper}>
            <div className={`container_outter`}>
                {logoSrc &&
                    <div className={Style.footerLogo}>
                        <Link href={logoLink} aria-label={logoAriaLabel} >
                            <ImageConverter src={logoSrc} alt={logoAlt} height={120} width={120} />
                        </Link>
                    </div>
                }
                <div className={Style.footerContent}>
                    <div className={`rowFlex alignItemsCenter`}>
                        {ftrDesc &&
                            <div className={`columnMdAuto`}>
                                <div className={Style.copyrightText}>{ftrDesc}</div>
                            </div>
                        }
                        <div className={`columnMd`}>
                            {mergedFtrMenuList?.length > 0 &&
                                <div className={Style.footerNav}>
                                        <ul>
                                            {mergedFtrMenuList?.map((item, itemKey) => (
                                                <li key={itemKey}>
                                                    <Link href={item?.link || "#!"} aria-label={"Click here to open " + item?.title}>{item?.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                            }
                        </div>
                        <div className={`columnMdAuto`}>
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
