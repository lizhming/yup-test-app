import React, { useEffect, useState } from 'react'
import { Image, ImageSourcePropType, ImageURISource, StyleSheet, Text, View } from 'react-native'

interface AutoHeightImageProps {
  source: ImageURISource
}

const AutoHeightImage: React.FC<AutoHeightImageProps> = ({ source }) => {
  const [imageLoading, setImageLoading] = useState(true)
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    Image.getSize(
      source.uri,
      (w, h) => {
        setAspectRatio(w / h)
      },
      (error) => {
        console.log('ScaledImage,Image.getSize failed with error: ', error)
      }
    )
  }, [])

  return <Image source={source} style={[styles.autoHeightImage, {height: 'auto', aspectRatio: aspectRatio}]} />
}

const styles = StyleSheet.create({
  autoHeightImage: {
    borderRadius: 20,
    borderColor: '#DDD',
    borderWidth: 1,
    width: '100%',
    height: 300,
  },
})

export default AutoHeightImage
