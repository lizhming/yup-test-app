import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { humanReadablePastTime } from '../utils/utils'
import ProfileImage from './ProfileImage'
import { Feed } from '../utils/types'
import Web3PreviewComponent from './Web3Preview'
import Icon from 'react-native-vector-icons/Ionicons'

interface FeedComponentProps {
  feed: Feed
}

const FeedComponent: React.FC<FeedComponentProps> = ({ feed }) => {
  return (
    <View style={styles.container}>
      {/* Header View */}
      <View style={styles.authorContainer}>
        <ProfileImage imageURI={feed.web3CreatorProfile.avatar} name={feed.web3CreatorProfile.bsky.fullname} />
        <Text style={styles.handleText} numberOfLines={1} ellipsizeMode="middle">
          <Text ellipsizeMode="tail" numberOfLines={1}>
            @{feed.web3CreatorProfile.bsky.handle}
          </Text>
          <Text style={styles.feedTime}>· {humanReadablePastTime(feed.createdAt)}</Text>
        </Text>
      </View>

      {/* Content View */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{feed.previewData.title}</Text>
      </View>

      {/* Web3Preview */}
      <Web3PreviewComponent web3Preview={feed.web3Preview} />

      {/* ActionView like, repost, reply, more */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.flex}>
          <Icon name="heart-outline" size={16} />
          <Text style={styles.actionText}>{feed.web3Preview.meta.likeCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex}>
          <Icon name="chatbubble-outline" size={16} />
          <Text style={styles.actionText}>{feed.web3Preview.meta.repostCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex}>
          <Icon name="repeat-outline" size={16} />
          <Text style={styles.actionText}>{feed.web3Preview.meta.replyCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex}>
          <Icon name="ellipsis-horizontal-sharp" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  authorContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  handleText: {
    color: '#888',
    flex: 1,
    textAlign: 'right',
  },
  feedTime: {
    color: '#888',
  },
  contentContainer: {
    padding: 5,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    textAlign: 'justify',
  },
  description: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  flex: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  actionText: {
    paddingStart: 5,
  },
})

export default FeedComponent
