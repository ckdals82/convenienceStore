import { Button, Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import DataGrid from "@toast-ui/react-grid";

// const DynamicTuiGrid = dynamic(() => import("../public/DynamicTuiGrid"), {
//   ssr: false,
// });
const columns: any[] = [
  {
    name: "brandId",
    header: "ID",
    align: "center",
    sortable: true,
  },
];

// Available values : cu, emart24, gs25, seven_eleven, ministop
const HelloWorld = () => {
  const [rowData, setRowData] = useState<any>([]);

  const getRequest = async (string: string) => {
    await axios
      .get("http://dev.taxijjang.site/convenience/products/slice", {
        params: { store: string },
      })
      .then((res) => {
        console.log(res);
        setRowData(res);
      });
  };

  React.useEffect(() => {
    const param = {
      store: "gs25",
    };
    axios
      .get("http://dev.taxijjang.site/convenience/products/slice", {
        params: { store: "gs25" },
      })
      .then((res) => {
        console.log(res);
        setRowData(res);
      });

    console.log("hello");
  }, []);
  return (
    <>
      <Row>
        <Col span={24}>
          <Button onClick={() => getRequest("cu")}>CU</Button>
          <Button onClick={() => getRequest("emart24")}>emart24</Button>
          <Button onClick={() => getRequest("gs25")}>gs25</Button>
          <Button onClick={() => getRequest("seven_eleven")}>
            seven_eleven
          </Button>
          <Button onClick={() => getRequest("ministop")}>ministop</Button>
        </Col>
        {/* 검색영역 */}
        <Col span={24}>
          <Input placeholder="검색"></Input>
        </Col>
        {/* 버튼영역 */}
        <Col span={24}>
          <Button>1+1</Button> <Button>2+1</Button>
        </Col>
        {/* 조회영역 */}
        <Col span={24}>
          {/* <DataGrid columns={columns} /> */}
          {/* tuiGrid */}
        </Col>
      </Row>
    </>
  );
};

export default HelloWorld;
