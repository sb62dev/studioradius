import React, {useState, useEffect, useRef } from "react";
import Style from './navItems.module.scss';
import Link from 'next/link';
import DropDown from "./Dropdown";
import { useRouter } from "next/router";

interface Props {
    menuLink?: any,
    menuAriaLabel?: string,
    menuTarget?: string,
    menuTitle?: string,
    class?: any,
    link?: any,
    linkClass?: any,
    title?: string,
    children?: any,
    target?: string,
    imgSrc?: any,
    imgAlt?: any,
    imgWidth?: number,
    imgHeight?: number,
    onClick?: any,
    ariaExpand?: any,
    items?: any,
    depthLevel?: any,
}

export const NavItems: React.FC<Props> = (itemsProps: Props) => {
    const menuLink = itemsProps?.menuLink || "#";
    const menuAriaLabel = itemsProps?.menuAriaLabel;
    const menuTarget = itemsProps?.menuTarget || "_self";
    const menuTitle = itemsProps?.title;
    const classname = itemsProps?.class;
    const linkclassname = itemsProps?.linkClass;
    const children = itemsProps?.children;
    const items = itemsProps?.items?.wpse_children;
    const [dropdown, setDropdown] = useState(false);
    const ariaDropdown = dropdown ? "true" : "false";
    const menuOnClick = () => setDropdown((prev) => !prev);
    const iconAriaLabel = "Click here to open menu";
    const depthLevel = itemsProps?.depthLevel;
    const routerPath = useRouter().pathname;
    let ref = useRef(null);
    const [className] = useState('');
    const dropdownMenuIcon = <button type="button" className={`headerMenuIcon ${Style.menuIcon} ${depthLevel > 0 ? Style.subMenuIcon : ""} ${className}`} aria-label={iconAriaLabel} aria-expanded={ariaDropdown} onClick={menuOnClick}></button>;
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => { 
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    const listItemClassName = `${Style.menuItem} ${classname} ${routerPath === menuLink ? Style.active : ""}`;
    const navItemClassName = `${Style.link} ${Style[linkclassname]}`;
    const navLinkWrap = <Link href={menuLink} aria-label={menuAriaLabel} target={menuTarget} className={navItemClassName}>
                            {menuTitle && (<span className={Style.menuItemText}>{menuTitle}</span>)}
                        </Link>;    

    const handleKeyDown = (event) => {
        if (event.key === 'Tab' && ref.current.lastChild === event.target) {
            setDropdown(false);
        }
    }
    useEffect(() => {
        const handleFocusChange = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
          }
        };
        const lastChild = ref.current.lastChild;
        lastChild.addEventListener('keydown', handleKeyDown);
        document.addEventListener('focusin', handleFocusChange);
        return () => {
          lastChild.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('focusin', handleFocusChange);
        };
    }, []);
    
    return (
        <>
            <li className={listItemClassName} ref={ref} onKeyDown={handleKeyDown}>
                {items ? (
                    <>
                        {navLinkWrap}
                        {dropdownMenuIcon}
                        <DropDown submenus={items} dropdown={dropdown} depthLevel={depthLevel} />
                    </>
                ) : (
                    <>
                        {navLinkWrap}
                        {children}
                    </>
                )}
            </li>
        </>
    )
}

export default NavItems
