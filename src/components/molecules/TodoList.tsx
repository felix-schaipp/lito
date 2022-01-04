import React from 'react'
import { TodoListItem } from '../atoms'
import { Todo } from '../../types'
import { tw } from '../../../config'
import { Text, View } from 'react-native'

export function TodoList({
  todoList,
  toggleTodo,
}: {
  todoList: Todo[]
  toggleTodo: (id: string) => void
}) {
  const noTodos = todoList.length === 0
  return (
    <View style={tw`flex flex-col text-left mb-2`}>
      {todoList.map(todoListItem => (
        <TodoListItem
          toggleTodo={toggleTodo}
          todoListItem={todoListItem}
          key={todoListItem.id}
        />
      ))}
      {noTodos && <Text>You have no todos yet</Text>}
    </View>
  )
}
