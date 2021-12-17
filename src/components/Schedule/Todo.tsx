import React from 'react'
import useStores from '../../hooks/useStores';
import { workTodoI } from '../../models/todos.interface';

type Props = {
    todos: Array<workTodoI>;
}

const Todo = (props: Props) => {
    const { todoState } = useStores();

    //display each element using map:
    const todoList = props.todos.length ? (
        props.todos.map((todo, index) => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.id}. {todo.content}</span>
                    <button className="right green white-text" data-testid={`todo-${index}`} onClick={() => todoState.deleteTodos(todo.id)}>Remove</button>
                </div>
            )
        })

    ) : (<p className="center">You have no todo's left</p>)
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todo;