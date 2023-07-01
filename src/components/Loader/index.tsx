import React from "react";
import Style from "./index.module.scss";

interface Props { 
    className?: string;
    show?: any;
}
export const Loader: React.FC<Props> = (props: Props) => {
    const className = props?.className;
    const show = props?.show;
    return (
        <>
            <div className={`${Style.loaderWrapper} ${className} ${show}`}>
                <div className={Style.loader}></div>
            </div>
        </>
    );
};

export default Loader;