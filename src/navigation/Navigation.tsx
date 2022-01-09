import React from 'react'
import { View } from 'react-native'
import { Link } from 'react-router-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faListUl,
  faShoppingBag,
  faWallet,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons'
import { getColors, tw } from '../../config'
import { AddButton } from '../components'

export const Navigation = () => {
  const colors = getColors()
  const navItems = [
    {
      to: '/todos',
      icon: <FontAwesomeIcon icon={faListUl} color={colors['gray-500']} />,
    },
    {
      to: '/groceries',
      icon: <FontAwesomeIcon icon={faShoppingBag} color={colors['gray-500']} />,
    },
    {
      to: '/money',
      icon: <FontAwesomeIcon icon={faWallet} color={colors['gray-500']} />,
    },
    {
      to: '/planner',
      icon: <FontAwesomeIcon icon={faCalendar} color={colors['gray-500']} />,
    },
  ]
  return (
    <View
      style={tw`absolute bottom-0 pb-4 w-full flex flex-row
      justify-around items-center bg-primary`}>
      {navItems.map(navItem => (
        <Link
          key={navItem.to}
          to={navItem.to}
          underlayColor={colors['primary-link']}
          style={tw`flex items-center py-4`}>
          {navItem.icon}
        </Link>
      ))}
      <View
        style={tw`absolute bottom-8 left-1/2 ml-[-2rem] 
        flex flex-row items-center justify-center bg-primary 
        w-18 h-16 rounded-full`}>
        <AddButton />
        {/* render action buttons here */}
      </View>
    </View>
  )
}
