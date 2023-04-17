import dynamic from "next/dynamic";
import "smart-webcomponents-react/source/styles/smart.default.css";
import { useEffect, useState } from "react";
import axios from "axios";

// smart 그리드로 개발

//Dynamically import the Smart.Grid component
const Grid = dynamic(() => import("smart-webcomponents-react/grid"), {
  ssr: false, //no server-side rendering
  loading: () => <p>Loading...</p>,
});

const photos = () => {
  const [dataSource, setRowData] = useState([]);

  const columns = [
      {
        label: "Age",
        dataField: "age",
        width: 200,
      },
      {
        label: "Name",
        dataField: "name",
      },
      {
        label: "Address",
        dataField: "address",
      },
    ],
    sorting = {
      enabled: true,
    },
    filtering = {
      enabled: true,
    },
    selection = {
      enabled: true,
      checkBoxes: {
        enabled: true,
      },
    },
    dataSourceSettings = {
      dataFields: [
        { name: "age", dataType: "number" },
        { name: "name", dataType: "string" },
        { name: "address", dataType: "string" },
      ],
    };

  useEffect(() => {
    axios
      .get("/board")
      .then((res) => {
        console.log(res);
        setRowData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*
  useEffect(() => {
    const initDate async () => {
      const data2 = await data3()
    }
    a();
  },[]);
  
  */

  // [react] useEffect 훅에서 async await 함수 사용하기

  return (
    <div>
      <Grid
        id="grid"
        sorting={sorting}
        filtering={filtering}
        columns={columns}
        selection={selection}
        dataSource={dataSource}
        dataSourceSettings={dataSourceSettings}
      ></Grid>
    </div>
  );
};

export default photos;
