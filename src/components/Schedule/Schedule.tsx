import React, { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { observer } from 'mobx-react';
import useStores from '../../hooks/useStores';
import { Redirect } from 'react-router-dom';

const Schedule = observer(() => {

    const { todoState } = useStores();
    const [back,setBack] = useState(false);

    const handleBack = () => {
        setBack(true);
    }

    if(back) {
        return(<Redirect to="/"/>)
    }

    return (
        <div className="todo-app container" id="todo-list">
            <h2 className="center blue-text">To do</h2>
            <Todo todos={todoState.todos} />
            <AddTodo />
            <p onClick={handleBack} style={{color:"blue", cursor: "pointer"}}>Go to home</p>
        </div>
    )
})

export default Schedule