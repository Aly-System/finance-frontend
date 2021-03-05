import { type as isLoggedType } from '../Actions/isLogged'
import { type as changeSesionType } from '../Actions/changeSesion'

const defaultState = false;

const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case changeSesionType: {
            return payload
        }
        case isLoggedType: {
            return state
        }
        default:
            return state;
    }
}

export default reducer;