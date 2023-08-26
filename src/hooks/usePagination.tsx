import { useState } from "react";

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
