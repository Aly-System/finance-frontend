import useLocalStorage from 'hooks/useLocalStorage.hook'
import { addDays } from 'date-fns'
import { removeAuth, isAuth } from 'services/auth.service'

export default function useAuthUser() {
    //Estado que guarda la data del usuario autenticado
    const [authUserData, setAuthUserData] = useLocalStorage('authUserData', {})

    /**
     * Verifica si el token esta vigente
     */
    const checkTokenExpiration = () => {
        if (!isAuth()) return

        const tokenExpiration = addDays(new Date(authUserData.expiration), 1)
        const actualDate = new Date()

        const tokenIsValid = actualDate <= tokenExpiration ? true : false

        if (!tokenIsValid) {
            removeAuth()
            setAuthUserData({})
            //Redireccionar a la home
            window.location.href = '/acceso'
        }
    }

    /**
     * @param  {Object} _data //recibe la informacion del usuario autenticado
     */
    const persistAuthUserData = _data => {
        setAuthUserData(_data)
    }

    return {
        authUserData,
        persistAuthUserData,
        checkTokenExpiration,
    }
}
