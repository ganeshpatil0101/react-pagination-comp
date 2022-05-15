import React from "react";
import { Pagination } from "./Pagination";
const paginatioConfig = {
  totalRecords: 100,
  pageSize: 10
};
export default function App() {
  return (
    <div className="App">
      <h1>React Pagination Component</h1>
      <Pagination page={paginatioConfig} />
    </div>
  );
}
