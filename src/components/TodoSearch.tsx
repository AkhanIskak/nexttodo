import {Input} from "@mui/material";
import React from "react";

export default function SearchTodo({searchTodo}: { searchTodo: any }) {
    return (
        <Input
            type="text"
            onChange={(e) => searchTodo(e.target.value as string)}
            placeholder="Todo name"
        />
    )
}
