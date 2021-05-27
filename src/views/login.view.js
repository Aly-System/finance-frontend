import React from 'react'
import { FieldText, FieldPassword, Button } from 'components/'
import { useForm } from 'react-hook-form'
import useLogin from 'hooks/auth/useLogin.hook'

//Import logos
import Logo from 'assets/img/logo.png'
import Logo_footer from 'assets/img/Powered.svg'

function Login() {
    const { register, handleSubmit, errors } = useForm()
    const { signIn } = useLogin()

    /**
     * @param  {String} {email //Obtiene el email del usuario para hacer login
     * @param  {String} password} //Obtiene el password del usuario para hacer login
     */
    const onSubmit = ({ email, password }) => {
        signIn({ email, password })
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit(onSubmit)} className='login__content'>
                <figure className='login__logo-container'>
                    <img src={Logo} alt='login-logo' className='login__logo' />
                </figure>
                <FieldText
                    label='Email'
                    placeholder='Ingrese su email'
                    inputRef={register({ required: true })}
                    name='email'
                    errorMessage={errors.email ? 'Ingrese un email valido' : ''}
                />
                <FieldPassword
                    label='Contraseña'
                    placeholder='Ingrese su Contraseña'
                    inputRef={register({ required: true })}
                    name='password'
                    errorMessage={
                        errors.password ? 'Ingrese un contraseña' : ''
                    }
                />
                <Button
                    width={'435px'}
                    style={'margin: 10px'}
                    variant='filled'
                    type='submit'>
                    Iniciar sesion
                </Button>
                <figure className='footer_logo'>
                    <img src={Logo_footer} alt='Aly System' />
                </figure>
            </form>
        </div>
    )
}

export default React.memo(Login)
