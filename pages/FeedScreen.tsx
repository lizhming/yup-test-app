import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import getFeed from '../utils/api'
import FeedComponent from '../components/FeedComponent'

const FeedScreen: React.FC = ({}) => {
  const [refreshing, setRefreshing] = useState(false)
  const [feeds, setFeeds] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  const loadMore = async () => {
    setRefreshing(true)
    const data = await getFeed(currentPage)
    console.log(data)
    if (currentPage == 0) {
      setFeeds(data)
    } else {
      setFeeds(feeds.concat(data))
    }
    setRefreshing(false)
  }

  useEffect(() => {
    loadMore()
  }, [currentPage])

  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        renderItem={({ item, index }) => <FeedComponent feed={item} key={index} />}
        onEndReachedThreshold={2}
        onEndReached={() => {
          console.log('endReached')
          setCurrentPage(currentPage + 1)
        }}
        ItemSeparatorComponent={({ highlighted }) => <View style={styles.separator} />}
        ListEmptyComponent={
          <View style={styles.loadingView}>
            <Text style={styles.loadingText}>Loading ...</Text>
          </View>
        }
        overScrollMode="never"
        viewabilityConfig={{ itemVisiblePercentThresold: 50 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              console.log('refresh-')
              setCurrentPage(0)
            }}
          />
        }
        style={styles.flatList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flex: 1,
    // backgroundColor: 'red',
  },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlignVertical: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
  },
})

export default FeedScreen
