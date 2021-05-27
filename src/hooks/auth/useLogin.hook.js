import login from 'services/auth/login.service'
import { AppContext } from 'store/authUser.store'
import { SuccessAlert } from 'utils/alerts.utils'
import { setAuth, isAuth } from 'services/auth.service'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLoader } from 'hooks/'

export default function useLogin() {
    const { persistAuthUserData } = useContext(AppContext)
    const [loader] = useLoader()
    const history = useHistory()

    const signIn = ({ email, password }) => {
        loader.show()

        login({ email, password })
            .then(data => {
                if (typeof data !== 'object') return
                if (Object.keys(data).length < 1) return

                SuccessAlert({
                    title: 'Acceso concedido',
                    message: 'Bienvenido al sistema',
                    timer: 3000,
                })

                const userData = { ...data }
                //Eliminar el token de la informacion del usuario
                delete userData.token

                //Guardar Los datos del usuario en el contexto y en el local storage
                persistAuthUserData(userData)

                //Encriptar y guardar token en local storage
                setAuth(data.token)

                //Redireccionar a la home
                history.push('/framework')
            })
            .finally(() => loader.hide())
    }

    const checkLogin = () => {
        // Sí ya se ha iniciado sesión, se redirige al home
        if (isAuth()) {
            return history.push('/framework')
        }
    }

    useEffect(() => {
        checkLogin()
    }, [])

    return { signIn }
}
