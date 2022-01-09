import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { tw } from '../../../config'

export const AddButton = () => {
  // TODO render action buttons when clicked
  const plusIcon = <FontAwesomeIcon icon={faPlus} color="#fff" />
  return (
    <TouchableHighlight
      style={tw`flex items-center justify-center w-12 h-12 
      rounded-full bg-accent`}
      onPress={() => {}}>
      <View>{plusIcon}</View>
    </TouchableHighlight>
  )
}
