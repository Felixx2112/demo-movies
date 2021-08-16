import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function CardMovie(props) {
  const { list } = props;
  return (
    <Card
      hoverable
      style={{ marginTop: "10px", marginLeft: "10px" }}
      cover={
        <img
          alt={list.original_title}
          src={`https://image.tmdb.org/t/p/w300/${list.poster_path}`}
        />
      }
    >
      <Meta title={list.title} />
    </Card>
  );
}

export default React.memo(CardMovie);
