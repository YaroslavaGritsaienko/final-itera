import React, {useState} from 'react';
import {Form, Button, Row, Container, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TodoForm = (props) => {
    const [value, setValue] = useState(' ')
    const {onAdd} = props


    const submitTodoHandler = (event) => {
        event.preventDefault()
        onAdd(value)
        console.log(value)
        setValue('')
    }


    return (
        <>
            <div className="center-align">
                <h2>Todos</h2>
                <form onSubmit={submitTodoHandler}>

                        <div className="file-path-wrapper">
                            <input className="file-path validate" value={value} onChange={(e) => {
                                setValue(e.target.value)
                            }} type="text" placeholder="Upload one or more files" style={{width: 300}}/>
                        </div>
                        <button className='btn' type='submit'  >Submit</button>

                </form>
            </div>
        </>
    );
};

export default TodoForm;

