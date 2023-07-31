import { Button, Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import DataGrid from "@toast-ui/react-grid";

const DynamicTuiGrid = dynamic(() => import("../public/DynamicTuiGrid"), {
  ssr: false,
});
const columns: any[] = [
  {
    name: "brandId",
    header: "ID",
    align: "center",
    sortable: true,
  },
];

const HelloWorld = () => {
  const [rowData, setRowData] = useState<any>([]);
  React.useEffect(() => {
    axios
      .get("http://dev.taxijjang.site/convenience/products/slice")
      .then((res) => {
        console.log(res);
        setRowData(res);
      });

    console.log("hello");
  }, []);
  return (
    <>
      <Row>
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
          <DataGrid columns={columns} />
          {/* tuiGrid */}
        </Col>
      </Row>
    </>
  );
};

export default HelloWorld;
