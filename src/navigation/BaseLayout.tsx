import React from 'react'
import { View } from 'react-native'
import { Navigation } from './Navigation'
import { Header } from '../components'
import { tw } from '../../config'
import { Outlet } from 'react-router'

export const BaseLayout = () => {
  return (
    <View style={tw`h-full`}>
      <Header />
      <Outlet />
      <Navigation />
    </View>
  )
}
