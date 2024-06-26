import React, { useEffect, useState } from "react";
import "../assets/css/global.css";
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
import NotFound from "../components/table/NotFound";
import RequestServices from "../services/requestService";
import { useParams } from "react-router-dom/cjs/react-router-dom";
function Singlerequest() {
  const [active, setActive] = useState(1);
  const { id } = useParams();
  const [data, setData] = useState();
  // console.log("id", id)
  useEffect(() => {
    RequestServices.getRequestById(id)
      .then((res) => {
        // console.log("res", res?.result)
        setData(res?.result);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  }, [id]);

  return (
    <div className="mt-2 border-2 border-solid border-[#737373] bg-white p-4 rounded-md">
      <p className="text-[15px] font-medium">
        Status: <span className="font-normal">Pending</span>
      </p>

      <button class="button-9" role="button">
        Quote Now
      </button>
      <div className="mt-4 w-full h-12 bg-gray-100 rounded-md flex items-center gap-4 pl-6 cursor-pointer text-base">
        <p
          onClick={() => setActive(1)}
          className={`${active == 1 ? "text-blue-500" : ""}`}
        >
          RFQ Information
        </p>
        <p
          onClick={() => setActive(2)}
          className={`${active == 2 ? "text-blue-500" : ""}`}
        >
          Buyer Information
        </p>
        <p
          onClick={() => setActive(3)}
          className={`${active == 3 ? "text-blue-500" : ""}`}
        >
          Message
        </p>
      </div>
      {/* <NotFound title="Request Quote" /> */}
      <TableContainer className="mb-8 mt-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Product code</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Requested Qty.</TableCell>
              <TableCell>Unit Price (INR)</TableCell>
              <TableCell className="text-center">
                Proposed Unit Price (INR)
              </TableCell>
              {/* <TableCell className="text-center">Created At</TableCell>
                <TableCell className="text-right">Actions</TableCell> */}
            </tr>
          </TableHeader>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Singlerequest;
