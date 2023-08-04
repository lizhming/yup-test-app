import { EmbedImage, EmbedRecord } from "./types"

export const humanReadablePastTime = (dateStr) => {
  const now = new Date()
  const pastDate = new Date(dateStr)
  const timeDifferenceInMilliseconds = now.getTime() - pastDate.getTime()

  const seconds = Math.floor(timeDifferenceInMilliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (years > 0) {
    return `${years} y${years > 1 ? 's' : ''}`
  } else if (months > 0) {
    return `${months} m${months > 1 ? 's' : ''}`
  } else if (days > 0) {
    return `${days} d${days > 1 ? 's' : ''}`
  } else if (hours > 0) {
    return `${hours} h${hours > 1 ? 's' : ''}`
  } else if (minutes > 0) {
    return `${minutes} min${minutes > 1 ? 's' : ''}`
  } else if (seconds > 0) {
    return `${seconds} sec${seconds > 1 ? 's' : ''}`
  } else {
    return 'just now'
  }
}


export const isEmbedImage = (embed: EmbedImage | EmbedRecord): embed is EmbedImage => {
    return embed.type == 'app.bsky.embed.images#view'
}