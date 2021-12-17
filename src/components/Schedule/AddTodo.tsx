import React, { useState } from 'react'
import useStores from '../../hooks/useStores';

const AddTodo = () => {

    const [id, setId] = useState(0);
    const [content, setContent] = useState('');
    const { todoState } = useStores();

    const handleChange = (e: any) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        todoState.addTodo({ id, content })
        //To make the text field empty after submitting one task
        setId(0);
        setContent('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label className="left black-text">Add new Todo:</label>
                <input type="text" onChange={handleChange} value={content} data-testid="add-todo"/>
                <button type="submit" className="center green white-text" id="add" >Add Task</button>
            </form>
        </div>
    )
}

export default AddTodo