import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  Button,
  Input,
  Card,
  CardBody,
  Pagination,
} from "@windmill/react-ui";
import { FiPlus } from "react-icons/fi";

import useAsync from "../hooks/useAsync";
import useFilter from "../hooks/useFilter";
import NotFound from "../components/table/NotFound";
import Loading from "../components/preloader/Loading";
import { SidebarContext } from "../context/SidebarContext";
import PageTitle from "../components/Typography/PageTitle";
import CategoryTable from "../components/category/CategoryTable";
import SelectCategory from "../components/form/SelectCategory";
import MainDrawer from "../components/drawer/MainDrawer";
import CategoryDrawer from "../components/drawer/CategoryDrawer";
import tableData from "../utils/demo/tableData";
import RequestServices from "../services/requestService";
import RequestTable from "../components/request/RequestTable";

const RequestQuote = () => {
  const { toggleDrawer } = useContext(SidebarContext);
  const { data, loading } = useAsync(RequestServices.getAllRequest);
  const {
    categoryRef,
    setFilter,
    handleChangePage,
    totalResults,
    resultsPerPage,
    dataTable,
    serviceData,
    handleSubmitCategory,
  } = useFilter(data);
  return (
    <>
      <PageTitle>Request Quote</PageTitle>
      <MainDrawer>
        <CategoryDrawer />
      </MainDrawer>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>User Name</TableCell>
                <TableCell>Buyers Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>No. of products</TableCell>
                <TableCell className="text-center">Message</TableCell>
                <TableCell className="text-center">Created At</TableCell>
                {/* <TableCell className="text-right">Actions</TableCell> */}
              </tr>
            </TableHeader>
            <RequestTable requests = {dataTable}/>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={resultsPerPage}
              onChange={handleChangePage}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      ) : (
        <NotFound title="Category" />
      )}
    </>
  );
};

export default RequestQuote;
