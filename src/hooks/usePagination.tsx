import { useState } from "react";

/**
 * description - pagination function
 * @param datas - datas to paginate
 * @returns  pageDatas - datas for the current page
 * @returns  pageLength - number of items per page
 * @returns  changePageLength - function to change the number of items per page
 * @returns  currentPage - current page
 * @returns  setCurrentPage - function to change the current page
 * @returns  minPageItem - min item for the current page
 * @returns  maxPageItem - max item for the current page
 * @returns  numberOfPages - number of pages
 * @example
 * const {
 *  pageDatas,
 *  pageLength,
 * changePageLength,
 * currentPage,
 * setCurrentPage,
 * minPageItem,
 * maxPageItem,
 * numberOfPages,
 *  } = usePagination(datas);
 */
export const usePagination = <T extends object>(datas: T[]) => {
  const [pageLength, setPageLength] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the min and max item for the current page
  const maxPageItem = currentPage * pageLength;
  const minPageItem = maxPageItem - pageLength + 1;
  // Calculate the number of pages
  const numberOfPages = Math.ceil(datas.length / pageLength);

  // Set the datas for the current page
  const pageDatas = datas.slice(minPageItem - 1, maxPageItem);

  // Handle the change of page length
  const changePageLength = (value: string) => {
    setPageLength(parseInt(value));
    setCurrentPage(1);
  };

  return {
    pageDatas,
    pageLength,
    changePageLength,
    currentPage,
    setCurrentPage,
    minPageItem,
    maxPageItem,
    numberOfPages,
  };
};
