import React, { useState } from 'react';
import { EdittableList } from './EdittableList';

type listItem = {
    content: string;
    id: string;
}

export function ToDoList() {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState<listItem[]>([]);

    const addItem = () => {
        setItems((prevItems: listItem[]) => {
            return [
                ...prevItems,
                {
                    content: newItem,
                    id: new Date().toString()
                }
            ];
        })
        setNewItem('');
    }

    const updateItem = (id: string, newContent: string) => {
        const itemIndex = items.findIndex((item) => id === item.id);
        setItems((prevItems: listItem[]) => {
            prevItems[itemIndex].content = newContent;
            return prevItems;
        })       
    }

    const deleteItem = (id: string) => {
        setItems((prevItems: listItem[]) => {
            return prevItems.filter((item) => item.id !== id)
        })  
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewItem(e.target.value)
    }

    return (
        <div className="todo-list">
            <section className="input-container">
                <form>
                    <input value={newItem} type="text" placeholder="what to do?" onChange={handleChange} autoComplete="off" tabIndex={0}/>
                    <button onClick={addItem} className="btn btn--confirm" title="Add new item" aria-label="Add a new item to the list" tabIndex={0}>+</button>
                </form>
                
            </section>
            <section className="list-container">
                <EdittableList items={items} handleUpdate={updateItem} handleDelete={deleteItem}/>
            </section>
        </div>
    )
}