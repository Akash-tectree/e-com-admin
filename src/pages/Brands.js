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
import CategoryServices from "../services/CategoryServices";
import CategoryTable from "../components/category/CategoryTable";
import SelectCategory from "../components/form/SelectCategory";
import MainDrawer from "../components/drawer/MainDrawer";
import BrandDrawer from "../components/drawer/BrandDrawer";
import tableData from "../utils/demo/tableData";
import BrandServices from "../services/BrandServices";
import SelectBrand from "../components/form/SelectBrand";
import BrandTable from "../components/brand/BrandTable";


const Brands = () => {
  const { toggleDrawer } = useContext(SidebarContext);

  const { data, loading } = useAsync(BrandServices.getAllBrand);
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
      <PageTitle>Brands</PageTitle>
      <MainDrawer>
        <BrandDrawer />
      </MainDrawer>

      <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
        <CardBody>
          <form
            onSubmit={handleSubmitCategory}
            className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex"
          >
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                ref={categoryRef}
                className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
                type="search"
                name="search"
                placeholder="Search by brand type"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-1"
              ></button>
            </div>
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <SelectBrand setFilter={setFilter} />
            </div>
            <div className="w-full md:w-56 lg:w-56 xl:w-56">
              <Button onClick={toggleDrawer} className="w-full rounded-md h-12">
                <span className="mr-3">
                  <FiPlus />
                </span>
                Add Brand
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {loading ? (
        <Loading loading={loading} />
      ) : serviceData?.length !== 0 ? (
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>ID</TableCell>
                <TableCell>Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell className="text-center">Priority</TableCell>
                <TableCell className="text-center">Created At</TableCell>
                <TableCell className="text-right">Actions</TableCell>
              </tr>
            </TableHeader>
            <BrandTable categories={dataTable} />
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

export default Brands;
