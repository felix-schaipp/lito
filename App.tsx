import React from 'react'
import { NativeRouter, Route, Routes } from 'react-router-native'
import { ThemeProvider } from './src/containers'
import {
  Todos,
  BaseLayout,
  Settings,
  Money,
  Groceries,
  Planner,
} from './src/navigation'

const App = () => {
  return (
    <ThemeProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="todos" element={<Todos />} />
            <Route path="settings" element={<Settings />} />
            <Route path="money" element={<Money />} />
            <Route path="groceries" element={<Groceries />} />
            <Route path="planner" element={<Planner />} />
          </Route>
        </Routes>
      </NativeRouter>
    </ThemeProvider>
  )
}

export default App
