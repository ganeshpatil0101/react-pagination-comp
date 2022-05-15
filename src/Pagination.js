import { useEffect, useState } from "react";

export function Pagination({ page }) {
  const { totalRecords, pageSize } = page;
  const [noPages] = useState(new Array(totalRecords / pageSize));
  useEffect(() => {
    console.log(noPages);
  }, []);
  return (
    <div>
      {noPages}
      <button> {"<"} </button>
      <button> {">"} </button>
    </div>
  );
}
