export const resizeBitmapImage = async (file: ImageBitmapSource, maxSize: number = 256, fileType: string): Promise<{
    data: string,
    width: number,
    height: number
}> => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const bitmap = await createImageBitmap(file)
    const {width, height} = bitmap

    let destWidth = width
    let destHeight = height
    if (width > maxSize || height > maxSize) {
        if (width >= height) {
            destWidth = maxSize
            destHeight = maxSize * (height / width)
        } else {
            destHeight = maxSize
            destWidth = maxSize * (width / height)
        }
    }

    canvas.width = destWidth
    canvas.height = destHeight

    ctx?.drawImage(bitmap, 0, 0, width, height, 0, 0, destWidth, destHeight)

    return new Promise(resolve => {
        resolve({
            data: canvas.toDataURL(fileType, fileType === 'image/jpeg' ? 0.8 : 1),
            width: Math.floor(destWidth),
            height: Math.floor(destHeight)
        });
    })
}