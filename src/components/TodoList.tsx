import React from 'react';
import {Container, Typography} from "@mui/material";
import {ITodoListProps} from "@/types/todo.types";

export default function TodoList({todos, deleteTodo}: ITodoListProps) {
    return (
        <Container>
            {todos.map((todo) => (
                <ul key={todo.id}>
                    <li>
                        <Container>
                            <Typography variant='h5'>{todo.name}</Typography>
                            <Typography>{todo.description}</Typography>
                            <button onClick={() => deleteTodo(todo.id as string)}>Delete</button>
                        </Container>
                    </li>
                </ul>
            ))}
        </Container>
    );
};
