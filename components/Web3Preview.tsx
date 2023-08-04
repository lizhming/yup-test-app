import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Web3Preview } from '../utils/types'
import { isEmbedImage } from '../utils/utils'
import AutoHeightImage from './AutoHeightImage'

interface Web3PreviewComponentProps {
  web3Preview: Web3Preview
}

const Web3PreviewComponent: React.FC<Web3PreviewComponentProps> = ({ web3Preview }) => {
  // Media, Link attachments?

  return (
    <View style={styles.container}>
      {/* Display first imbed image */}
      {web3Preview.meta.embed && isEmbedImage(web3Preview.meta.embed) && (
        <AutoHeightImage source={{ uri: web3Preview.meta.embed.images[0].thumb }} />
      )}

      {/* Display first attachments */}
      {!(web3Preview.meta.embed && isEmbedImage(web3Preview.meta.embed)) &&
        web3Preview.attachments?.[0]?.images.length > 0 && (
          <AutoHeightImage source={{ uri: web3Preview.attachments?.[0]?.images[0] }} />
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
})

export default Web3PreviewComponent
