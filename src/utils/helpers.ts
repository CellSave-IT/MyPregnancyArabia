export const removeHtmlTags = (input: string) => {
  return input.replace(/<[^>]+>/g, '')
}
export const checkVideoOrImage = (fileName: string) => {
  const imageExtensions = ['jpg', 'png', 'jpeg', 'gif', 'svg', 'avif', 'webp']
  const videoExtensions = ['mp4']
  const fileExtensions = fileName?.split('.').pop().toLowerCase()
  if (imageExtensions.includes(fileExtensions)) {
    return 'image'
  }
  if (videoExtensions.includes(fileExtensions)) {
    return 'video'
  }

  return ''
}

export const keyValuePairs = (data: any[]) => {
  return data.reduce((acc, item) => {
    acc[item.key] = item.value
    return acc
  }, {})
}
