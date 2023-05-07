import React from 'react'
import TodoItem from './TodoItem'
import { Center, Flex, Heading, VStack, Text, StackDivider } from '@chakra-ui/react';

const TodoList = ({ todos, setTodos }) => {

    const handleChange = (id) => {
        const newTodos = todos.map((item) => {
            if ( item.id === id ) {
                item.isDone = !item.isDone
            }
            return item
        });
        setTodos(newTodos)
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter((item) => item.id !== id );
        setTodos(newTodos)
    };

  return (
    <Flex flexDirection='column' align='center'>
        <Center mb={4}>
            <Heading>Todo List</Heading>
        </Center>
        <VStack
            w={{base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
            p={4}
            align='stretch'
            border='2px'
            borderColor='gray.300'
            borderRadius='md'
            divider={<StackDivider borderColor='gray.200'/>}  
            maxH='65vh'
            overflow='scroll'
        >
            {todos.length === 0 ? (
                <Text align='center' fontWeight='bold' fontSize='lg'>No Todo</Text>
            ) : (
                todos.map((item) => {
                    return (
                    <TodoItem 
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        isDone={item.isDone}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                    )
                })
            )}
            
        </VStack>
    </Flex>
  )
}

export default TodoList