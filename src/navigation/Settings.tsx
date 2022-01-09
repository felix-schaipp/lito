import React from 'react'
import { Switch, Text, View } from 'react-native'
import { getColors, tw } from '../../config'
import { useTheme, useThemeUpdate } from '../containers'

export function Settings() {
  const isDarkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const colors = getColors()

  function showThemeEmoji() {
    if (isDarkTheme) return <Text>🌑</Text>
    return <Text>🌕</Text>
  }

  return (
    <View style={tw`flex flex-col p-4`}>
      <Text style={tw`font-jost text-xl text-gray-500`}>Settings</Text>
      <Text>Current Theme is: {showThemeEmoji()}</Text>
      <Text>Toggle theme 🌓</Text>
      <Switch
        trackColor={{ false: colors['gray-500'], true: colors.primary }}
        value={isDarkTheme}
        onValueChange={toggleTheme}
      />
    </View>
  )
}
