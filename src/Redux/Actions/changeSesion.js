export const type = 'changeSesion';

const changeSesion = value => {
    return {
        type,
        payload:value,
    }
}

export default changeSesion