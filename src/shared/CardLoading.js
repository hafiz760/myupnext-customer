import React from "react";
import Skeleton from "react-loading-skeleton";

const CardLoading = () => {
  return (
    <React.Fragment>
      <Skeleton height={200} />
      <Skeleton className="w-25" />
      <Skeleton className="w-100" count={5} />
    </React.Fragment>
  );
};

export default CardLoading;
