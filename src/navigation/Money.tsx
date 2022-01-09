import React from 'react'
import { Text, View } from 'react-native'
import { tw } from '../../config'

export const Money = () => {
  return (
    <View style={tw`flex flex-col p-4`}>
      <Text style={tw`font-jost text-xl text-gray-500`}>Money</Text>
    </View>
  )
}
