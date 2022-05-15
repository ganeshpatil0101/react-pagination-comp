import React from "react";
import { Pagination } from "./Pagination";
const paginatioConfig = {
  totalRecords: 1000,
  pageSize: 30,
  limitToShowBar: 5
};
export default function App() {
  return (
    <div className="App">
      <h1>React Pagination Component</h1>
      <Pagination page={paginatioConfig} />
    </div>
  );
}
