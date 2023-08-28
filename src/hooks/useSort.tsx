import { useState, useEffect } from "react";
import { SortedDefinition } from "../components/Table/TableHead/TableHead";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

type Sorted<T> = {
  definition: SortedDefinition;
  datas: T[];
};

/**
 * description - sort function for an array of objects sorting on all the values of the objects
 * @param datas - datas to sort
 * @returns  sorted - sorted datas
 * @returns  handleSort - function to sort datas
 * @example
 * const { sorted, handleSort } = useSort(datas);
 */
export const useSort = <T extends object>(datas: T[]) => {
  const [sorted, setSorted] = useState<Sorted<T>>({
    definition: null,
    datas,
  });

  const { definition } = sorted;

  useEffect(() => {
    if (definition === null) {
      setSorted((curr) => ({ ...curr, datas }));
      return;
    }

    const sortData = [...datas].sort((a: T, b: T) => {
      a = a[definition.param as keyof typeof a];
      b = b[definition.param as keyof typeof b];

      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });

    const direction = definition.direction;

    if (direction === "desc") {
      sortData.reverse();
    }

    setSorted((curr) => ({ ...curr, datas: sortData }));
  }, [datas, definition]);

  const handleSort = (param: string) => {
    setSorted((curr) => {
      if (curr.definition === null || param !== curr.definition.param) {
        return {
          ...curr,
          definition: { param, direction: "asc", icon: faSortUp },
        };
      }

      if (curr.definition.direction === "asc") {
        return {
          ...curr,
          definition: { param, direction: "desc", icon: faSortDown },
        };
      }

      return {
        ...curr,
        definition: null,
      };
    });
  };

  return { sorted, handleSort };
};
