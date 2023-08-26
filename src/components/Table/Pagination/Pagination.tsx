type PaginationProps = {
  setCurrentPage: (value: number | ((prevVar: number) => number)) => void;
  currentPage: number;
  numberOfPages: number;
};

export const Pagination = ({
  numberOfPages,
  setCurrentPage,
}: PaginationProps) => {
  // Handle the number of pages to display
  const numberOfPagesArray = Array.from(Array(numberOfPages).keys());

  // Handle the previous and next page
  const previousPage = () => {
    setCurrentPage((curr) => {
      if (curr === 1) return curr;
      return curr - 1;
    });
  };
  const nextPage = () => {
    setCurrentPage((curr) => {
      if (curr === numberOfPages) return curr;
      return curr + 1;
    });
  };

  const handleChangePage = (item: number | string) => {
    if (typeof item === "string") return;

    setCurrentPage(item + 1);
  };
  return (
    <div>
      {numberOfPages > 0 ? (
        <button onClick={previousPage}>Previous</button>
      ) : null}
      {numberOfPagesArray.map((item) => (
        <button key={item} onClick={() => handleChangePage(item)}>
          {typeof item === "string" ? item : item + 1}
        </button>
      ))}

      {numberOfPages > 0 ? <button onClick={nextPage}>Next</button> : null}
    </div>
  );
};
