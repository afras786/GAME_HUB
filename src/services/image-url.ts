import placeholder from '../assets/placeholder.webp'

export const getCropedImage = (url: string) => {
    if (!url) return placeholder;
    const target = 'media/'
    const index = url.indexOf('media/') + target.length
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}