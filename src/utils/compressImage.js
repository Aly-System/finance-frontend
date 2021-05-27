import Compress from 'compress.js'

/**
 * Función para comprimir una imagen seleccionada de la galería del usuario
 * @param {File} image - Imagen original
 * @return {File} compressImage - Imagen comprimida
 */
export const compressImage = image =>
    new Promise(async (resolve, _) => {
        if (!image) {
            resolve(null)
            return
        }
        // Sí el no es una imagen, se retorna el archivo
        if (!/^image/.test(image.type)) {
            resolve(image)
            return
        }
        // Instancia de la librería de compresión
        const _compress = new Compress()
        // Configuraciones de la compresión
        const compressOptions = {
            // Tamaño máximo en MB
            size: 2,
            // Radio de compresión
            quality: 0.75,
            // Ancho y alto máximo permitido
            maxWidth: 1080,
            maxHeight: 1080,
            resize: true,
        }
        // Procesa la imagen original
        const compressData = await _compress.compress(
            [image],
            compressOptions,
            false
        )
        // Se extrae la data, el tipo y el nombre original de la imagen
        const { data, ext: type, alt: filename } = compressData[0]
        // Se convierte la data en un Blob
        const compressBlob = Compress.convertBase64ToFile(data, type)
        // Se crea una instancia File con el blob obtenido
        const _image = new File([compressBlob], filename, { type: type })
        resolve(_image)
    })
