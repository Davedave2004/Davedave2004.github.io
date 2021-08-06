import React from 'react';

type listItem = {
    content: string;
    id: string;
}

interface listProps {
    items: listItem[];
    handleUpdate?: (id: string, newContent: string) => void;
    handleDelete: (id: string) => void;
}

export function EdittableList(props: listProps) {

    return (
        <ul className="edit-list">
            {props.items.map((item) => (
                <li key={item.id}>
                    {item.content}
                    <button 
                        onClick={() => {props.handleDelete(item.id)}} 
                        className="btn btn--delete"
                        aria-label="Delete list item"
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    )
}