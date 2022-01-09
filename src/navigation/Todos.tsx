import React, { useState, useEffect } from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import { Todo } from '../types'
import { TodoList } from '../components'
import { v4 as uuid } from 'uuid'
import { tw } from '../../config'

// const LOCAL_STORAGE_TODO_LIST_KEY = 'todoApp.todoList'

export const Todos = () => {
  const [todoList, setTodos] = useState<Todo[]>([])
  const [currentTodoInput, setCurrentTodoInput] = useState<string>('')

  useEffect(() => {
    // get from where?
    // if (storedTodoList) setTodos(storedTodoList)
  }, [])

  useEffect(() => {
    // save where?
  }, [todoList])

  function toggleTodo(id: string): void {
    const newTodos = [...todoList]
    const todoToUpdate = newTodos.find(todoListItem => todoListItem.id === id)
    if (!todoToUpdate) return
    todoToUpdate.checked = !todoToUpdate.checked
    setTodos(newTodos)
  }

  function resetInputField(): void {
    setCurrentTodoInput('')
  }

  function handleAddTodo(): void {
    if (currentTodoInput.length === 0) return

    const newTodo: Todo = {
      id: uuid(),
      checked: false,
      name: currentTodoInput,
    }
    const newTodos = [...todoList, newTodo]
    setTodos(newTodos)
    resetInputField()
  }

  return (
    <ScrollView style={tw`w-full h-full`}>
      <View style={tw`flex flex-col p-4`}>
        <Text style={tw`font-jost text-xl text-gray-500`}>Todos</Text>
        <TodoList
          todoList={todoList.filter(todoListItem => !todoListItem.checked)}
          toggleTodo={toggleTodo}
        />
        <View>
          <TextInput
            defaultValue={currentTodoInput}
            clearButtonMode="while-editing"
            onChangeText={text => setCurrentTodoInput(text)}
          />
          <Button
            onPress={handleAddTodo}
            title="Add todo"
            disabled={currentTodoInput.length === 0}
            accessibilityLabel="Add the todo you inputed"
          />
        </View>
      </View>
    </ScrollView>
  )
}
