import React from 'react'
import { View } from 'react-native'
import { Link, Outlet } from 'react-router-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faListUl,
  faShoppingBag,
  faWallet,
  faCog,
} from '@fortawesome/free-solid-svg-icons'
import { tw } from '../../config'

export const Navigation = () => {
  const todoIcon = <FontAwesomeIcon icon={faListUl} />
  const groceriesIcon = <FontAwesomeIcon icon={faShoppingBag} />
  const moneyIcon = <FontAwesomeIcon icon={faWallet} />
  const settingsIcon = <FontAwesomeIcon icon={faCog} />
  return (
    <View
      style={tw`absolute bottom-0 flex flex-row justify-around items-center`}>
      <Link
        to="/todos"
        underlayColor="#f0f4f7"
        style={tw`flex items-center p-3`}>
        {todoIcon}
      </Link>
      <Link
        to="/groceries"
        underlayColor="#f0f4f7"
        style={tw`flex items-center p-3`}>
        {groceriesIcon}
      </Link>
      <Link
        to="/money"
        underlayColor="#f0f4f7"
        style={tw`flex items-center p-3`}>
        {moneyIcon}
      </Link>
      <Link
        to="/settings"
        underlayColor="#f0f4f7"
        style={tw`flex items-center p-3`}>
        {settingsIcon}
      </Link>
      <Outlet />
    </View>
  )
}
