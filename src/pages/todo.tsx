// import {Container, Typography} from "@mui/material";
//
//
// export default  function todoPage(){
//
//
//     return(
//         <Container className='container-styles'>
//             <Typography variant="h4" textAlign='center'>Todo App</Typography>
//
//         </Container>
//     )
// }
import React, {useEffect, useState} from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import {Container, Typography} from "@mui/material";
import {ITodo} from "@/types/todo.types";
import {getTodos, postTodo, removeTodo} from "@/api/todos.api";

const TodoPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = async (todo: ITodo) => {
        const response = await postTodo(todo);
        setTodos([...todos, {name: todo.name, description: todo.description}]);
    };
    const deleteTodo = async (id: string) => {
        const response = await removeTodo(id);
        if (response.status !== 200) {
            alert("Todo deletion failed, please try again");
            return
        }
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    useEffect(() => {
        getTodos().then((data) => {
            setTodos(data);
        })
    }, []);


    return (
        <Container className='container-styles'>
            <Typography variant="h4" textAlign='center'>Todo App</Typography>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
        </Container>
    );
};

export default TodoPage;
