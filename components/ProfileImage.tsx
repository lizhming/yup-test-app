import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { humanReadablePastTime } from '../utils/utils'

interface ProfileImageProps {
  imageURI: string
  name: string
}

const ProfileImage: React.FC<ProfileImageProps> = ({ name, imageURI }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageURI }} style={styles.profileImage} />
      <Text style={styles.profileName}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: '#EEE',
    borderColor: '#DDD',
    borderWidth: 1,
  },
})

export default ProfileImage
