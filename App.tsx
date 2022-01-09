/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import {
  BaseLayout,
} from './src/navigation'

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }

  return (
    <NativeRouter>
      <Routes>
          <Route path="/" element={<BaseLayout />}>
          <Route path="todos" element={<Todos />} />
        </Route>
        {/* <Route path="groceries" component={<Money />} />
        <Route path="money" component={<Groceries />} />
        <Route path="settings" component={<Settings />} /> */}
      </Routes>
    </NativeRouter>
  )
}

export default App
