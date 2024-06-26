import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TableCell,
  TableBody,
  TableRow,
  Badge,
  Avatar,
} from "@windmill/react-ui";
import { FiEye } from "react-icons/fi";

import Tooltip from "../tooltip/Tooltip";
import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ProductDrawer from "../drawer/ProductDrawer";
import ShowHideButton from "../table/ShowHideButton";
import EditDeleteButton from "../table/EditDeleteButton";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import { Select } from "@windmill/react-ui";
import { Switch } from "@mui/material";

const ProductTable = ({ products }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  const [measureConversion, setMeasureConversion] = useState();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <ProductDrawer id={serviceId} />
      </MainDrawer>
      <TableBody>
        {products?.map((product, i) => (
          <TableRow key={product?._id}>
            <TableCell>
              <span className="text-xs uppercase font-semibold">
                {" "}
                {product?.productId}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Avatar
                  className="hidden p-1 mr-2 md:block bg-gray-50 shadow-none"
                  src={product.image}
                  // alt= {<Tooltip>{product.title}</Tooltip>}
                />
              </div>
            </TableCell>
            <TableCell>
              <h2 className="text-sm font-medium">{product.title}</h2>
            </TableCell>
            <TableCell>
              <span className="text-sm">{product?.categoryId}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{product?.currency}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{product?.brandId}</span>
            </TableCell>
            <TableCell>
              <span className="text-sm">{product?.description}</span>
            </TableCell>
            <TableCell>
              <Select
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                name={"type"}
                onChange={(e) => {
                  console.log("val-", e.target.value);
                  setMeasureConversion({
                    ...measureConversion,
                    [i]: JSON.parse(e.target.value),
                  });
                }}
                // {...register(`${name}`, {
                //   required: `${label} is required!`,
                // })}
              >
                <option value="" defaultValue hidden>
                  Select type
                </option>
                {product?.measureConversion?.map((el) => {
                  return (
                    <option
                      value={JSON.stringify({
                        conversion: el?.conversion,
                        price: el?.price,
                        quantity: el?.quantity,
                        quantityMeasure: el?.quantityMeasure,
                      })}
                    >
                      {el?.conversion}
                    </option>
                  );
                })}
              </Select>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {measureConversion && measureConversion[i] !== undefined
                  ? measureConversion[i]?.conversion
                  : product?.quantityMeasure}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm">
                {measureConversion && measureConversion[i] !== undefined
                  ? measureConversion[i]?.quantity
                  : product.quantity}
              </span>
            </TableCell>
            <TableCell>
              <span className="text-sm font-semibold">
                ₹{" "}
                {measureConversion && measureConversion[i]?.price !== undefined
                  ? measureConversion[i]?.price
                  : product?.price}
              </span>
            </TableCell>
            <TableCell>
              <Switch {...label} defaultChecked={product?.active} />
            </TableCell>
            <TableCell>
              <Switch {...label} defaultChecked={product?.popularProduct} />
            </TableCell>
            {/* <TableCell>
              <span className="text-sm">{product.quantity}</span>
            </TableCell>
            <TableCell>
              {product.quantity > 0 ? (
                <Badge type="success">Selling</Badge>
              ) : (
                <Badge type="danger">Sold Out</Badge>
              )}
            </TableCell>

            <TableCell>
              <span className="text-sm font-semibold">
                {product.discount !== 0 && (
                  <span>{product.discount.toFixed(0)}% Off</span>
                )}
              </span>
            </TableCell>
            <TableCell>
              <Link
                to={`/product/${product._id}`}
                className="flex justify-center text-center text-gray-400 hover:text-green-600"
              >
                <Tooltip
                  id="details"
                  Icon={FiEye}
                  title="Details"
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>
            <TableCell>
              <ShowHideButton id={product._id} status={product.status} />
            </TableCell>*/}
            <TableCell>
              <EditDeleteButton
                id={product._id}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default React.memo(ProductTable);
