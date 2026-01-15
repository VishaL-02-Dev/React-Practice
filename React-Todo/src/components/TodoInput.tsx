import { useState } from 'react'

interface TodoInputProps{
    onAdd: (text: string)=> void;
}

export function TodoInput({onAdd}: TodoInputProps){
    const [text, setText] = useState("");

    const handleSubmit = () => {
        onAdd(text);
        setText("");
    };

    return (
        <div className="todo-input">
            <input
                type= "text"
                value={text}
                placeholder="Enter todo"
                onChange = {(e)=> setText(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>    
        </div>
    );
}