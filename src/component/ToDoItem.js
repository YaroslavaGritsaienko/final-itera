import React from 'react';

const TodoItem = (props) => {
    const {content, onCheck, id, onDelete, onUpdate} = props

    const onCheckHandler = () => {
        onCheck(id)
    }

    const onDeleteHandler = () => {
        onDelete(id)
    }

    const onUpdateHandler = () => {
        onUpdate(id, `${content} has been updated!`)
    }

    return (
        <li className='center-align' style={{display: 'flex', justifyContent: "center", marginTop: 20}}>
            <div className='red lighten-5' style={{width: 700, display: "flex", justifyContent: 'space-between'}}>
                <input type="checkbox" onChange={onCheckHandler}/>
                <span  onClick={onUpdateHandler}>{content}</span>
                <button className='btn red lighten-2' style={{width: 150}} onClick={onDeleteHandler}>delete todo
                </button>
            </div>
        </li>
    );
};


export default TodoItem;
