import {MenuItem, Select} from "@mui/material";
import React, {useState} from "react";
import {changeTodoStatus} from "@/api/todos.api";

export default function TodoSelect({status, todoId}: { status: string, todoId: string }) {
    const [newStatus, setStatus] = useState('');
    const handleChange = async (event: any, id: string) => {
        setStatus(event.target.value)
        await changeTodoStatus(id, event.target.value)
    };
    return (
        <Select
            value={newStatus ? newStatus : status}
            onChange={(e) => handleChange(e, todoId as string)}
            label="Select an option"
        >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="done">Done</MenuItem>
        </Select>
    )
}
