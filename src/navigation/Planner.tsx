import React from 'react'
import { Text, View } from 'react-native'
import { Agenda } from 'react-native-calendars'
import { tw } from '../../config'

export const Planner = () => {
  return (
    <View style={tw`flex flex-col p-4`}>
      <Text style={tw`font-jost text-xl text-gray-500`}>Planner</Text>
      <Agenda />
    </View>
  )
}
