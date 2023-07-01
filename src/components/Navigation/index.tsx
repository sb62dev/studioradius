import React, { useState, useEffect } from "react";
import Style from './index.module.scss';
import { useMediaQuery } from "@util/hooks/useMediaQuery";
import NavItems from './navItems';
import Button from '@components/Button';
import { useRouter } from "next/router";

interface Props {
    menuData?: any,
    breakPoint?: number,
    openMenuArialabel?: string,
    closeMenuArialabel?: string,
    openMenuLabel?: string,
    closeMenuLabel?: string,
    children?: JSX.Element | JSX.Element[];
}
export const Navigation: React.FC<Props> = (navProps: Props) => {
    const mainMenuData = navProps?.menuData;
    const matchMedia = useMediaQuery(navProps?.breakPoint || "766.99");
    const matches = !!matchMedia;
    const openMenuArialabel = navProps?.openMenuArialabel || "Click here to open menu";
    const openMenuLabel = navProps?.openMenuLabel || "Open menu";
    const closeMenuArialabel = navProps?.closeMenuArialabel || "Click here to close menu";
    const closeMenuLabel = navProps?.closeMenuLabel || "Close menu";
    const children = navProps?.children;
    const [menuOpen, menuSetOpen] = useState(false);
    const router = useRouter();
    const toggleMenu = () => {
        menuSetOpen(!menuOpen);
        if (!menuOpen) {
          document.documentElement.classList.add("hide-scroll");
        } else {
          document.documentElement.classList.remove("hide-scroll");
        }
    };
    const depthLevel = 0;

    useEffect(() => {
        const handleRouteChange = () => {
            if (menuOpen) {
                menuSetOpen(false);
            }
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router, menuOpen]);

    return (
        <>
            <div className={Style.navigationWrap}>
                {matches && (
                    <div className={Style.menuToggle}>
                        <Button ariaLabel={openMenuArialabel} label={openMenuLabel} target={"_self"} button={true} type={"button"} onClick={toggleMenu}>
                            <span className={`${Style.menuBar} ${Style.barOne}`}></span>
                            <span className={`${Style.menuBar} ${Style.barTwo}`}></span>
                            <span className={`${Style.menuBar} ${Style.barThree}`}></span>
                        </Button>
                    </div>
                )}
                <div className={`${matches ? Style.navMediaMatch : ""} ${menuOpen ? Style.active : ""}`}>
                    {matches && (
                        <div className={Style.menuToggle}>
                            <Button ariaLabel={closeMenuArialabel} label={closeMenuLabel} target={"_self"} button={true} type={"button"} onClick={toggleMenu}>
                                <span className={Style.closeIcon}></span>
                            </Button>
                        </div>
                    )}
                    {mainMenuData?.length > 0 &&
                        <ul className={Style.navMenu}>
                            {mainMenuData?.map((item, itemKey) => (
                                <NavItems depthLevel={depthLevel} items={item} key={item?.ID || itemKey} title={item?.title} menuLink={item?.url} menuTarget={item?.target} menuAriaLabel={item?.ariaLabel} class={`${item?.wpse_children?.length > 0 ? Style.hasChild : ""}`} />
                            ))}
                        </ul>
                    }
                    {children}
                </div>
            </div>
        </>
    )
}

export default Navigation
