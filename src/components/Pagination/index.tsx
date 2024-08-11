import React from "react";
import Style from "./index.module.scss";
import ReactPaginate from "react-paginate";

interface Props {
    pageCountNo?: number;
    onPageChange?: any;
    marginPagesDisplayed?: number;
    pageRangeDisplayed?: number;
    breakLabel?: string;
    nextLabel?: string;
    previousLabel?: string;
    forcePage?: any;
}

export const Pagination: React.FC<Props> = (props: Props) => {
    const breakLabel = props?.breakLabel || "...";
    const nextLabel = props?.nextLabel || "Next";
    const previousLabel = props?.previousLabel || "Previous";
    const pageCount = props?.pageCountNo;
    const onPageChange = props?.onPageChange;
    const marginPagesDisplayed = props?.marginPagesDisplayed;
    const pageRangeDisplayed = props?.pageRangeDisplayed;
    const forcePage = props?.forcePage;

    return (
        <>
            <ReactPaginate
                previousLabel={previousLabel}
                nextLabel={nextLabel}
                breakLabel={breakLabel}
                containerClassName={Style.paginationWrapper}
                pageClassName={Style.pageItem}
                pageLinkClassName={Style.pageItemLink}
                previousClassName={`${Style.pageItem} ${Style.prevBtn}`}
                previousLinkClassName={Style.pageItemLink}
                nextClassName={`${Style.pageItem} ${Style.nextBtn}`}
                nextLinkClassName={Style.pageItemLink}
                breakClassName={Style.pageItem}
                breakLinkClassName={Style.pageItemLink}
                activeClassName={Style.active}
                disabledClassName={Style.disabled}
                pageCount={pageCount}
                marginPagesDisplayed={marginPagesDisplayed}
                pageRangeDisplayed={pageRangeDisplayed}
                onPageChange={onPageChange}
                forcePage={forcePage}
            />
        </>
    );
};

export default Pagination;
