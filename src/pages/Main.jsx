import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { VStack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const Main = () => {
    const title = 'Todo List'
    const [todos, setTodos] = useState([]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <VStack spacing={4} align='stretch' p={8}>
          <TodoList todos={todos} setTodos={setTodos}/>
          <AddTodo todos={todos} setTodos={setTodos}/>
      </VStack>
    </>
  )
}

export default Main