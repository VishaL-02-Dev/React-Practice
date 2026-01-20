import { useState } from 'react';

export function LiveText(){
    const [text, setText] = useState('');

    return(
        <>
            <input onChange={(e)=> setText(e.target.value)}/>
            <p>{text}</p>
        </>
    )
}