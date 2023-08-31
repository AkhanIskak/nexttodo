import React, {useState} from 'react';
import {Button, Input, Typography} from "@mui/material";
import {ITodoFrom} from "@/types/todo.types";

export default function TodoForm({addTodo}: ITodoFrom) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!description || !name) return;
        await addTodo({name, description});
        setName('');
        setDescription('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography>Task name</Typography>
            <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task name"
            />
            <Typography>Task description</Typography>
            <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
            /><br/>
            <Button type='submit' variant='contained'>Create todo</Button>
        </form>
    );
};

