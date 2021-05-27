import randomKey from 'utils/random-key.util'
import { useState, useEffect } from 'react'

export default function useCrudRegiste() {
    const [rows, setRows] = useState([])

    const createRow = () => setRows([...rows, { id: randomKey() }])

    const generateRows = () => {
        const INITIAL_ROWS = 2

        //Creamos un array con la cantidad de filas que queremos
        const array = Array(INITIAL_ROWS).fill(1)

        //Le asignamos una key unica a acada posision del array
        const _rows = array.map(_ => ({ id: randomKey() }))

        setRows(_rows)
    }

    const deleteRow = ({ id }) => {
        if (rows.length === 2) return

        const _rows = rows.filter(row => {
            return row.id !== id
        })

        setRows(_rows)
    }

    useEffect(() => {
        generateRows()
    }, [])
    return {
        createRow,
        deleteRow,
        rows,
    }
}
