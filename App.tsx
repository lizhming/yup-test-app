import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FeedScreen from './pages/FeedScreen'

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FeedScreen />
    </SafeAreaView>
  )
}
