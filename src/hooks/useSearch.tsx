import { useState } from "react";

/**
 * description - search function for an array of objects filtering on all the values of the objects
 * @param {object} datas - array of objects
 * @returns {filteredDatas, setSearch} - filteredDatas is an array of objects, setSearch is a function
 * @example
 * const { filteredDatas, setSearch } = useSearch(datas);
 */
export const useSearch = <T extends object>(datas: T[]) => {
  const [search, setSearch] = useState("");

  const filteredDatas = datas.filter((item: T) => {
    const values = Object.values(item).join(" ").toLowerCase();
    return values.includes(search.toLowerCase());
  });

  return { filteredDatas, setSearch };
};
