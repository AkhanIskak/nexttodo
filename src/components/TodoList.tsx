import React from 'react';
import {Button, Container, Select, Typography, MenuItem} from "@mui/material";
import {ITodoListProps} from "@/types/todo.types";
import TodoSelect from "@/components/Select";

export default function TodoList({todos, deleteTodo}: ITodoListProps) {
    try {
        return (
            <Container>
                {todos.map((todo) => (
                    <ul key={todo.id}>
                        <li>
                            <Container>
                                <Typography variant='h5'>{todo.name}</Typography>
                                <Typography>{todo.description}</Typography>
                                <Typography>Created
                                    at:{new Date(todo.createdAt as number * 1000).toISOString()}</Typography>

                                <TodoSelect status={todo.status as string} todoId={todo.id as string}></TodoSelect><br/>
                                <Button variant='contained' color='error'
                                        onClick={() => deleteTodo(todo.id as string)}>Delete</Button>
                            </Container>
                        </li>
                    </ul>
                ))}
            </Container>
        );
    } catch (err) {
        return (<div>Sorry Error</div>)
    }
};
