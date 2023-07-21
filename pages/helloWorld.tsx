import { Button, Col, Input, Row } from "antd";
import React, { useState } from "react";

const HelloWorld = () => {
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
        <Col>{/* tuiGrid */}</Col>
      </Row>
    </>
  );
};

export default HelloWorld;
