import React from "react";
import Style from "./index.module.scss";
import NavItems from "./navItems";

interface Props {
    submenus?: any,
    dropdown?: any,
    depthLevel?: any,
    className?: any,
}

export const DropDown: React.FC<Props> = (itemsProps: Props) => {
    const submenus = itemsProps?.submenus;
    const dropdown = itemsProps?.dropdown;
    const depthLevel = itemsProps?.depthLevel + 1;
    const className = itemsProps?.className;

    return (
        <>
            <ul className={`${Style.subMenu} ${className} ${dropdown ? Style.show : ""}`}>
                {submenus?.map((item, itemKey) => (
                    <NavItems items={item} key={item?.ID || itemKey} title={item?.title} link={item?.link} menuAriaLabel={item?.ariaLabel} class={`${item?.subMenu?.length > 0 ? Style.hasChild : ""}`} depthLevel={depthLevel} />
                ))
                }
            </ul>
        </>
    )
}

export default DropDown; 