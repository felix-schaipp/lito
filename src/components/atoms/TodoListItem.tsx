import React from 'react'
import { View } from 'react-native'
import { Todo } from '../../types'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

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
      <BouncyCheckbox
        isChecked={todoListItem.checked}
        text={todoListItem.name}
        onPress={handleChange}
      />
    </View>
  )
}
