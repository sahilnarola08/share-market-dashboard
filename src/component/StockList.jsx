import { DataGrid } from '@mui/x-data-grid'
import { useStokList } from '@stock'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const StockList = () => {

    const navigate = useNavigate()

    const {
        rows,
        columns,
        getStockData
    } = useStokList()

    useEffect(() => {
        getStockData()
    }, [])
    return (
        <div style={{ height: '100%', width: '50%', margin: 'auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                getRowId={(row) => {
                    return row.id
                }}
                onRowClick={(params, event, details,) => {
                    navigate('/StockDetails', { state: { StockDetails: params.row } })
                }}
            // checkboxSelection
            />
        </div>
    )
}

export default StockList