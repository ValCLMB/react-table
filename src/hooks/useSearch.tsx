import { useState } from "react";

export const useSearch = <T extends object>(datas: T[]) => {
  const [search, setSearch] = useState("");

  const filteredDatas = datas.filter((item: T) => {
    const values = Object.values(item).join(" ").toLowerCase();
    return values.includes(search.toLowerCase());
  });

  return { filteredDatas, setSearch };
};
