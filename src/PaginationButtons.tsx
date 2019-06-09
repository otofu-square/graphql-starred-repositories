import * as React from "react";

type Props = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  onFirstClick: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
  onLastClick: () => void;
};

export const PaginationButtons: React.FC<Props> = ({
  hasNextPage,
  hasPreviousPage,
  onFirstClick,
  onNextClick,
  onPreviousClick,
  onLastClick
}) => (
  <div>
    <button type="button" onClick={onFirstClick}>
      {"<<"}
    </button>
    <button type="button" disabled={!hasPreviousPage} onClick={onPreviousClick}>
      {"<"}
    </button>
    <button type="button" disabled={!hasNextPage} onClick={onNextClick}>
      {">"}
    </button>
    <button type="button" onClick={onLastClick}>
      {">>"}
    </button>
  </div>
);
