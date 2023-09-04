import React, {useEffect, useState} from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import {Button, Container, Typography} from "@mui/material";
import {ITodo} from "@/types/todo.types";
import {getTodos, postTodo, removeTodo} from "@/api/todos.api";
import useAuthentication from "@/hooks/authentication";
import {useRouter} from "next/router";
import SearchTodo from "@/components/TodoSearch";
import {set} from "zod";

const TodoPage = () => {
    useAuthentication()
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [oldest, setOldest] = useState(true);
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
    const searchTodo = async (name: string) => {
        getTodos(name).then((data) => setTodos(data))
    }
    const logout = () => {
        localStorage.removeItem('token');
        router.push('/')
    }
    const toggleOldest = () => {
        if (oldest)
            setTodos(todos.sort((a, b) => a.createdAt - b.createdAt))
        else
            setTodos(todos.sort((a, b) => b.createdAt - a.createdAt))

        setOldest(!oldest)
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
                <Typography variant="h6" textAlign='center'>Sort Todo</Typography>
                <Button onClick={toggleOldest} variant="contained" color="primary">
                    {oldest ? "Oldest" : "Latest"}
                </Button>
                <Typography variant="h6" textAlign='center'>Search todo</Typography>
                <SearchTodo searchTodo={searchTodo}/>
                <Typography variant="h6" textAlign='center'>Create todo</Typography>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} deleteTodo={deleteTodo}/>
            </Container>
        </div>

    );
};

export default TodoPage;
