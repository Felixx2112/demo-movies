import React, { useState, useEffect } from "react";
import ListMovie from "./components/ListMovie";
import { api } from "./services/api";
import { helper } from "./helpers/common";
import { Skeleton, Pagination, Row, Col } from "antd";
import "antd/dist/antd.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getDataApi = async () => {
      setLoading(true);
      const data = await api.getDataMovies(page);
      if (!helper.isEmptyObject(data)) {
        if (data.hasOwnProperty("results")) {
          setMovies(data.results);
        }
        if (data.hasOwnProperty("total_results")) {
          setTotalResult(data.total_results);
        }
        if (data.hasOwnProperty("total_pages")) {
          setTotalPage(data.total_pages);
        }
      }
      setLoading(false);
    };
    getDataApi();
  }, [page]);

  const getDataByPage = (p) => {
    // p>=-1 && p<= totalPage : cap nhap lai state page
    if (p >= -1 && p <= totalPage) {
      setPage(p);
    }
  };
  return (
    <>
      {loading || helper.isEmptyObject(movies) ? (
        <Skeleton active />
      ) : (
        <Row>
          <Col span={20} offset={2}>
            <ListMovie movies={movies} />
            <Pagination
              style={{ margin: "20px 0px", textAlign: "center" }}
              current={page}
              total={totalResult}
              pageSize={20}
              showSizeChanger={false}
              onChange={(p) => getDataByPage(p)}
            />
          </Col>
        </Row>
      )}
    </>
  );
}

export default App;
