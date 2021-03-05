import React from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const PasswordInput = ({ onChange, password, switchShow, show }) => {
    return (
        <>
            <div className="inputGroup">
                <label htmlFor="password" className="label">Contraseña:</label><br />
                <div className="inputContainer">
                    <input
                        id="Password"
                        className="input"
                        type={show ? 'text' : 'password'}
                        name="Password"
                        placeholder="Password"
                        onChange={onChange}
                        value={password}
                    />
                    {
                        show
                            ? <AiFillEyeInvisible onClick={switchShow} className="eye" />
                            : <AiFillEye onClick={switchShow} className="eye" />
                    }
                </div>
            </div>

        </>
    )
}

export default PasswordInput