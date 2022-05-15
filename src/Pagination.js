import { useEffect, useState, useRef, useMemo } from "react";

function getTotalButtonCount(totalRecords, pageSize) {
  return totalRecords / pageSize;
}

function getArray(btnCount, limitToShowBar) {
  let ar = [];
  console.log("calling att ");
  // const len = (btnCount < limitToShowBar) ? btnCount : limitToShowBar
  let counter = 1;
  const br = btnCount / limitToShowBar;
  console.log("called getarray -> ", br);
  for (let l = 0; l < br; l++) {
    let subArr = [];
    for (let i = 0; i < limitToShowBar; i++) {
      subArr.push(counter);
      counter++;
    }
    ar.push(subArr);
  }
  return ar;
}
export function Pagination({ page }) {
  const { totalRecords, pageSize, limitToShowBar } = page;
  const btnCnt = useMemo(() => getTotalButtonCount(totalRecords, pageSize), [
    totalRecords,
    pageSize
  ]);
  const arCount = useRef(0);
  const curIndex = useRef(0);
  const allBtnsRecords = useMemo(() => getArray(btnCnt, limitToShowBar), [
    btnCnt,
    limitToShowBar
  ]);
  const [noPages, setNoPages] = useState(allBtnsRecords[arCount.current]);
  const [active, setActive] = useState(1);
  useEffect(() => {
    console.log(" total COunt - ", btnCnt);
    console.log("all rr====>>> ", allBtnsRecords);
    console.log("current no pg", noPages);
  }, [noPages]);

  const nextHandler = () => {
    console.log("next handler ", noPages.length, " index ", curIndex.current);
    if (curIndex.current === noPages.length - 1) {
      console.log(" got the last index process next ", curIndex.current);
      curIndex.current = 0;
      arCount.current = arCount.current + 1;
      setNoPages(allBtnsRecords[arCount.current]);
    }
    curIndex.current = curIndex.current + 1;
    setActive(active + 1);
  };
  const prevHandler = () => {
    console.log("prev handler index ", curIndex.current);
    if (curIndex.current === 1) {
      console.log(" got the last index process next ", curIndex.current);
      curIndex.current = noPages.length;
      arCount.current = arCount.current - 1;
      setNoPages(allBtnsRecords[arCount.current]);
    }
    curIndex.current = curIndex.current - 1;
    setActive(active - 1);
  };
  const onPageClick = (page, index) => {
    console.log(" page no clicked ", page, " index ", index);
    curIndex.current = index;
    setActive(page);
  };
  return (
    <div>
      totalRecords - {totalRecords} <br />
      pageSize : {pageSize} <br />
      limitToShow no of btn: {limitToShowBar} <br />
      current active page : <strong> {active} </strong>
      <hr />
      <button disabled={active === 1} onClick={prevHandler}>
        {" "}
        {"<"}{" "}
      </button>
      {noPages.map((v, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              onPageClick(v, i);
            }}
          >
            {v}
          </button>
        );
      })}
      <button disabled={active === btnCnt} onClick={nextHandler}>
        {" "}
        {">"}{" "}
      </button>
    </div>
  );
}
