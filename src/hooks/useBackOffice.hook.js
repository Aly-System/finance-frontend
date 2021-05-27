import { useState } from 'react'

export default function useBackOffice() {
    //Estado que guarda la data del usuario autenticado
    const [backOffice, setBackOffice] = useState({
        visible: false,
    })

    const showBackOffice = () => setBackOffice({ visible: true })
    const hideBackOffice = () => setBackOffice({ visible: false })

    return {
        show: showBackOffice,
        hide: hideBackOffice,
        status: backOffice.visible,
    }
}
