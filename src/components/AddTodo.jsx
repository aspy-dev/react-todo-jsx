import { Box, Button, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddTodo = ({ todos, setTodos }) => {
    const {
        handleSubmit,
        register,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const newTodo = {
            id: Date.now().toLocaleString(),
            content: data.content,
            isDone: false
        };
        setTodos([newTodo, ...todos]);
        reset();
    }

  return (
    <Box display='flex' justifyContent='center'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl w={{base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}>
                <Input 
                    id='content'
                    placeholder='Enter Todo'
                    {...register('content')}
                />
            </FormControl>
            <Box w='100%' display='flex' justifyContent='flex-end'>
                <Button mt={4} colorScheme='teal' type='submit'>Submit</Button>
            </Box>
        </form>
    </Box>
  )
}

export default AddTodo