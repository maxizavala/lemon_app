export const UPDATE_COTIZACION = "UPDATE_COTIZACION"


export const updateCotizacion = (cotizacion) => ({
    type: UPDATE_COTIZACION,
    payload: cotizacion,
})