import React, {useEffect, useState} from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import {Button, Container, Typography} from "@mui/material";
import {ITodo} from "@/types/todo.types";
import {getTodos, postTodo, removeTodo} from "@/api/todos.api";
import useAuthentication from "@/hooks/authentication";
import {useRouter} from "next/router";

const TodoPage = () => {
    useAuthentication()
    const [todos, setTodos] = useState<ITodo[]>([]);
    const addTodo = async (todo: ITodo) => {
        const response = await postTodo(todo);
        setTodos([...todos, {name: response.name, description: response.description, createdAt: response.createdAt}]);
    };
    const deleteTodo = async (id: string) => {
        const response = await removeTodo(id);
        if (response.status !== 200) {
            alert("Todo deletion failed, please try again");
            return
        }
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/')
    }
    useEffect(() => {
        getTodos().then((data) => {
            setTodos(data);
        })
    }, []);

    return (
        <div>
            <Button variant='contained' color='error' onClick={logout}>Logout</Button>
            <Container className='container-styles'>
                <Typography variant="h4" textAlign='center'>Todo App</Typography>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} deleteTodo={deleteTodo}/>
            </Container>
        </div>

    );
};

export default TodoPage;
