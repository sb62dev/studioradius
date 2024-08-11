import React from "react";
import Style from "./index.module.scss";
import Link from "next/link";

interface Props {
    breadNavData: any,
}

const Breadcrumb: React.FC<Props> = (props: Props) => {
    const breadcrumbMenu = props?.breadNavData;
    return (
        <>
            <section className={Style.breadcrumbWrapper}>
                    <ul className={Style.breadcrumbNav}>
                        {breadcrumbMenu?.length > 0 && breadcrumbMenu?.map((item, itemKey) => (
                            <li key={item?.uid || itemKey}>
                                {item?.url ? (
                                    <Link href={item?.url} aria-label={item?.arialabel} target={item?.target} className={`${Style.link}`}>
                                        {item?.title && (<span className={Style.menuItemText}>{item?.title}</span>)}
                                    </Link>
                                ) : (
                                    <>
                                        {item?.title && <span className={Style.menuItemText}>{item?.title}</span>}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
            </section>
        </>
    );
};

export default Breadcrumb;
