import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import { tw, getColors } from '../../../config'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const colors = getColors()
  const settingsIcon = (
    <FontAwesomeIcon icon={faCogs} color={colors['gray-500']} />
  )
  return (
    <View style={tw`flex flex-row justify-between px-5 pt-12 bg-primary`}>
      <Link to="/" underlayColor={colors['primary-link']}>
        <Text style={tw`font-jost text-lg font-bold text-gray-500`}>Lito</Text>
      </Link>
      <Link
        to="/settings"
        underlayColor={colors['primary-link']}
        style={tw`flex items-center p-3`}>
        {settingsIcon}
      </Link>
    </View>
  )
}
