import { useEffect, useState } from 'react'
import getDocumentServices from 'services/registries/getDocuments.service'
import { useLoader } from 'hooks/'

export default function useGetDocuments() {
    const [documents, SetVoucher] = useState()
    const [loader] = useLoader()

    const getListOfDocuments = () => {
        loader.show()
        getDocumentServices()
            .then(alldocuments => {
                const list_documents = alldocuments?.data?.result.map(
                    _document => ({
                        id_doc: _document?.id,
                        description: _document?.description,
                        date: _document?.date,
                    })
                )

                SetVoucher(list_documents)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfDocuments()
    }, [])
    return {
        documents,
    }
}
