import React from 'react'
import TodoItem from '../add/TodoItem'

export default function TodoList({id, title, like}) {
  return (
    <ul className="list_item">
      <TodoItem 
      title={title}
      like={like}
      id={id}
      />
    </ul>
  )
}