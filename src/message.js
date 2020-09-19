import React , { usestate} from 'react';

export function Message ({counter}) { 
    return (
    <div>
        <h1>
        This is message component: {counter}
        </h1>
    </div>
)

}