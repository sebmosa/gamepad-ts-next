export type Url = string

export const useCropVersion = (url: Url) => {
  if (url) {
    if (url.indexOf('screenshots') === -1) {
      return url.replace('media/games', 'media/crop/600/400/games')
    } else {
      return url.replace('media/screenshots', 'media/crop/600/400/screenshots')
    }
  }
}
