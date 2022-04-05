import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationModule = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Pagination
        count={pageNumbers.length}
        onChange={(e, value) => paginate(e, value)}
        hidePrevButton
        hideNextButton
      />
    </div>
  );
};

export default PaginationModule;
