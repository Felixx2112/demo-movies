import React from "react";
import { Row, Col } from "antd";
import CardMovie from "./CardMovie";

function ListMovie(props) {
  const { movies } = props;
  console.log({ movies });
  return (
    <Row style={{ margin: "30px 0px" }}>
      <Col span={20} offset={2}>
        <h2 style={{ textAlign: "center" }}> List Movies Popular!</h2>
        <Row>
          {movies.map((item, index) => (
            <Col span={6}>
              <CardMovie key={index} list={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default React.memo(ListMovie);
