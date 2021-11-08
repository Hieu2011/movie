import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from '../todoForm';


TodoList.propTypes = {
    todos : PropTypes.array,
    ontodoClick : PropTypes.func,
};
TodoList.defaultProps = {
    todos :[],
    ontodoClick : null
}
function s4(){
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1);
  }
  function getGenderid(){
    return s4() + s4() + '-' + s4() + s4() + '-' + s4()+ s4();
  }
function TodoList(props) {
    const {todos,ontodoClick,onSubmitValue} = props;
    console.log(todos);
    function handelClick(todo) {
        ontodoClick(todo);
    }
    function handelTodoFormSubmit(value) {
        console.log(value);
        onSubmitValue(value);
    }
    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onSubmitValue = {handelTodoFormSubmit}/>
            <ul>
                {todos.map((todo,index) =>(
                    <li style={{cursor:'pointer'}} onClick={() => handelClick(todo)} key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;