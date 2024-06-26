import React from "react";

import useAsync from "../../hooks/useAsync";
import BrandServices from "../../services/BrandServices";

const ParentBrand = () => {
  const { data } = useAsync(BrandServices.getAllBrand); //   console.log(value);

  return (
    <>
      {data?.map((parent) => (
        <option key={parent._id} value={parent.parent}>
          {parent.title}
        </option>
      ))}
    </>
  );
};

export default ParentBrand;
