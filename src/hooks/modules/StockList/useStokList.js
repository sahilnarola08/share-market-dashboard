import { ApiGet } from "@stock";
import { useState } from "react";

const useStokList = () => {
  const [rows, setRows] = useState([])
  const getStockData = async () => {
    await ApiGet('/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo').then(res => {
      const date = Object.keys(res['Monthly Time Series'])
      const values = Object.values(res['Monthly Time Series'])
      const data = values.map((res, i) => {
        return ({
          ...res, date: date[i], id: ++i
        })
      })
      setRows(data)
    }).catch(err => {
      console.log('err', err)
      return err
    })

  }


  const columns = [

    {
      field: 'id',
      headerName: 'Date',
      sortable: false,
      valueGetter: (params) =>
        `${params.id}`,
    },
    {
      field: 'date',
      headerName: 'Date',
      sortable: false,
      valueGetter: (params) =>
        `${params.row.date}`,
    },
    {
      field: 'open',
      headerName: 'Open',
      sortable: false,
      valueGetter: (params) =>
        `${params.row['1. open'] || ''}`,
    },
    {
      field: 'high',
      headerName: 'High',
      sortable: false,
      valueGetter: (params) => `${params.row['2. high'] || ''}`,
    },
    {
      field: 'close',
      headerName: 'Close',
      sortable: false,
      valueGetter: (params) => `${params.row['4. close'] || ''}`,
    },
    {
      field: 'Volume',
      headerName: 'Volume',
      sortable: false,
      valueGetter: (params) => `${params.row['5. volume'] || ''}`,
    },
  ];




  return {
    rows,
    columns,
    getStockData
  }
}

export default useStokList