import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import {
    RiCheckboxBlankCircleLine, 
    RiCheckboxCircleFill
} from 'react-icons/ri';
import {BsFillTrashFill} from 'react-icons/bs';


const TodoItem = ({ id, content, isDone, handleChange, handleDelete }) => {

  return (
    <Flex w='100%' align='center' justify='space-between'>
        <Flex align='center'>
            <Icon key={id}
                as={ isDone ? RiCheckboxCircleFill : RiCheckboxBlankCircleLine } 
                id={id}
                color='teal' 
                cursor='pointer'
                w={6}
                h={6}
                mr={2}
                onClick={() => handleChange(id)}
            />
            <Text fontSize='xl'>{content}</Text>
        </Flex>
        <Icon 
            as={ BsFillTrashFill } 
            color='pink' 
            cursor='pointer'
            w={5}
            h={5}
            onClick={() => handleDelete(id) }
        />
    </Flex>
  )
}

export default TodoItem