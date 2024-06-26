import React from "react";
import { TableBody, TableRow, TableCell, Avatar } from "@windmill/react-ui";

import MainModal from "../modal/MainModal";
import MainDrawer from "../drawer/MainDrawer";
import ShowHideButton from "../table/ShowHideButton";
import CategoryDrawer from "../drawer/CategoryDrawer";
import useToggleDrawer from "../../hooks/useToggleDrawer";
import EditDeleteButton from "../table/EditDeleteButton";
import moment from "moment";
import Switch from '@mui/material/Switch';

const CategoryTable = ({ categories }) => {
  const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();
  
const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <>
      <MainModal id={serviceId} />
      <MainDrawer>
        <CategoryDrawer id={serviceId} />
      </MainDrawer>

      <TableBody>
        {categories?.map((parent) => (
          <TableRow key={parent._id}>
            <TableCell className="font-semibold uppercase text-xs">
              {parent?.categoryId}
            </TableCell>
            <TableCell>
              <Avatar
                className="hidden mr-3 md:block bg-gray-50 p-1"
                src={parent?.image}
                alt={parent?.image}
              />
            </TableCell>

            <TableCell className="text-sm ">{parent?.title}</TableCell>
            <TableCell className="text-sm">{parent?.description}</TableCell>
            <TableCell>
            <Switch {...label} defaultChecked={parent?.priority} />
              {/* <ShowHideButton id={parent._id} status={parent?.priority} /> */}
            </TableCell>
            <TableCell className="text-sm text-center">
              {moment(parent?.createdAt).format("DD/MM/YYYY")}
            </TableCell>
            <TableCell>
              <EditDeleteButton
                id={parent?.categoryId}
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

export default CategoryTable;
