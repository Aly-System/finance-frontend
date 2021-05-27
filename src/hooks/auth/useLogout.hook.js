const cerrarSesion = () => {
    localStorage.removeItem('_tkn_aly_finances')
    window.location.href = '/'
}
export default cerrarSesion
