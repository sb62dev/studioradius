import React from 'react';
import Style from './index.module.scss';
import Link from 'next/link';

interface Props {
    label?: any,
    ariaLabel?: string,
    link?: string,
    target?: string,
    onClick?: any,
    children?: JSX.Element | JSX.Element[],
    button?: boolean,
    type?: any,
    varient?: string,
    theme?: string,
    className?: string;
}
export const Button: React.FC<Props> = (btnProps: Props) => {
    const btnText = btnProps?.label;
    const ariaLabel = btnProps?.ariaLabel;
    const btnLink = btnProps?.link;
    const btnTarget = btnProps?.target || "_self";
    const btnClick = btnProps?.onClick;
    const children = btnProps?.children; 
    const buttonTrue = !!btnProps?.button;
    const btnType = btnProps?.type;
    const varient = btnProps?.varient;
    const theme = btnProps?.theme;
    const btnClass = btnProps?.className;
    const btnVarient = () => {
        switch (varient || null) {
            case "Primary":
                return Style.filled;
            case "LinkWithArrow":
                return Style.witharrow;
            case "":
            case undefined:
            case null:
                return Style.btnstatic;
        }
        return "";
    };
    const getBtnVarient = btnVarient();

    const btnTheme = () => {
        switch (theme || null) {
            case "Dark":
                return Style.darkBtn;
            case "":
            case undefined:
            case null:
                return Style.btnstatic;
        }
    };
    const getBtnTheme = btnTheme();
    return (
        <>
            {buttonTrue ? (
                <button type={btnType} onClick={btnClick} className={`${Style.btn} ${btnClass} ${getBtnVarient} ${getBtnTheme}`} aria-label={ariaLabel}>
                    <span>{btnText}</span> {children}
                </button>
            ) : (
                <Link href={btnLink || "#"} target={btnTarget} onClick={btnClick} className={`${Style.btn} ${btnClass} ${getBtnVarient} ${getBtnTheme}`} aria-label={ariaLabel} >
                    <span>{btnText}</span> {children}
                </Link>
            )}
        </>
    )
}

export default Button
