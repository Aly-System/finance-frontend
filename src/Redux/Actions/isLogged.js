export const type = 'isLogged';

const isLogged = _ => {
    return {
        type,
        payload: null,
    }
}

export default isLogged