import type { Todo } from '../types/todo'
import type { useState } from 'react'

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: stirng) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {

    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        if (!editText.trim()) {
            alert("Todo cannot be empty");
            return;
        }

        onEdit(todo.id, editText.trim());
        setIsEditing(false);
    };

    return (
        <li className='todo-item'>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <span
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                    }}
                >
                    {todo.text}
                </span>
            )}

            {isEditing ? (
                <button onClick={handleSave}>💾</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>✏️</button>
            )}

            <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
    );
}