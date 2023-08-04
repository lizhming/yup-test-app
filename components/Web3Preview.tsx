import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Web3Preview, EmbedImage } from '../utils/types'
import { isEmbedImage } from '../utils/utils'

interface Web3PreviewComponentProps {
  web3Preview: Web3Preview
}

const Web3PreviewComponent: React.FC<Web3PreviewComponentProps> = ({ web3Preview }) => {
  // Media, Link attachments?

  return (
    <View style={styles.container}>
      {/* {web3Preview.attachments?.[0]?.images.length > 0 && (
        <>
          <Image source={{ uri: web3Preview.attachments?.[0]?.images[0] }} style={styles.previewImage} />
        </>
      )} */}
      {web3Preview.meta.embed && isEmbedImage(web3Preview.meta.embed) && (
        <>
          <Image
            source={{ uri: web3Preview.meta.embed.images[0].thumb }}
            style={styles.previewImage}
            resizeMode="contain"
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  profileName: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  previewImage: {
    // flex: 1,
    borderRadius: 20,
    borderColor: '#DDD',
    borderWidth: 1,
    width: '100%',
    height: 300,
  },
})

export default Web3PreviewComponent
