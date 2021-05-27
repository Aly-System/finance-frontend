import axios from 'axios'
import { useState } from 'react'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getAccountsServices({ page = 1 } = {}) {
    try {
        const data = await axios.get(
            `https://finance-306715.appspot.com/api/AccountingAccounts?page=${page}`
        )

        console.log('Data Services', data)

        return data
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener cuentas',
            message:
                'No se pudo obtener la lista de cuentas o no se han creado información',
        })
    }
}
