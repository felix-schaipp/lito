import React from 'react'
import { Switch, Text, View } from 'react-native'
import { tw } from '../../../config'
import { Todo } from '../../types'

export function TodoListItem({
  todoListItem,
  toggleTodo,
}: {
  todoListItem: Todo
  toggleTodo: (id: string) => void
}) {
  function handleChange(): void {
    toggleTodo(todoListItem.id)
  }
  return (
    <View>
      <Switch value={todoListItem.checked} onChange={handleChange} />
      <Text style={tw`ml-2`}>{todoListItem.name}</Text>
    </View>
  )
}
