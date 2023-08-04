export type Attachment = {
    url: string
    title: string
    description: string
    images: string[]
    videos: string[]
    favicon: string
}
export type Image = {
    thumb: string
    fullsize: string
    alt: string
}
export type EmbedImage = {
    type: string // app.bsky.embed.images#view
    images: Image[]
}
export type EmbedRecord = {
    type: string // app.bsky.embed.record#view
    record: {
        type: string,
        value: {
            text: string,
            type: string,

        }
    }
}
export type Web3Preview = {
    attachments?: Attachment[]
    meta: {
        embed?: EmbedImage | EmbedRecord
        replyCount: number
        repostCount: number
        likeCount: number
    }
}
export type Feed = {
  author: string
  avatar: string
  previewData: {
    creator: string
    img: string
    title: string
    description: string
  }

  createdAt: string
  updatedAt: string

  lang: string
  negativeWeight: number
  positiveWeight: number

  rating: {
    overall: {
      ratingCount: number
      ratingWeight: number
    }
  }
  secondaryTags: string[]
  tag: string

  url: string
  
  web3Preview: Web3Preview

  web3CreatorProfile: {
    avatar: string
    bsky: {
      did: string
      fullname: string
      handle: string
      avatar: string
      bio: string
    }
  }
}

