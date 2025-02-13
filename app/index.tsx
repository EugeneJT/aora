import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import "../global.css";


const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pbold'>Aora</Text>
      <StatusBar style='auto' />
      <Link href='/home' style={{ color: 'blue' }}> Go to Home</Link>
    </View>
  )
}

export default App
