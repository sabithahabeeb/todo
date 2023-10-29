import { useState } from 'react';
import './App.css';

function App() {
    const [todo, setTodo] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [editedValue, setEditedValue] = useState('');

    const AddTodo = () => {
        if (!newItem) {
            alert('Enter a List');
        } else {
            const item = {
                id: Math.floor(Math.random() * 1000),
                value: newItem
            };
            setTodo(todos => [...todos, item]);
            setNewItem('');
        }
    };

    const deleteTodo = (id) => {
        const newArray = todo.filter((item) => item.id !== id);
        setTodo(newArray);
    };

    const startEdit = (item) => {
        setEditedValue(item.value);
    };

    const saveEdit = (id) => {
        const updatedTodo = todo.map((item) => {
            if (item.id === id) {
                return { ...item, value: editedValue };
            }
            return item;
        });
        setTodo(updatedTodo);
        setEditedValue('');
    };

    return (
        <>
            <div
                id='body'
                style={{ width: '100%', height: '100vh' }}
                className='flex flex-col p-5 justify-center items-center'
            >
                <div className='flex flex-col justify-center w-4/5 h-1/2 border-double border-4 border-indigo-600 items-center static'>
                    <h1 className='text-4xl bg-slate-200 m-6 w-96 h-14 text-center font-bold rounded-3xl text-rose-700 tracking-normal'>TODO LIST</h1>
                    <input
                        className='w-1/2 h-14 rounded-full'
                        type='text'
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                    <button onClick={AddTodo} className='btn bg-white'>
                        <i className="fa-solid fa-plus absolute top-1/2 mt-3 rounded-full w-9 h-9 text-center font-bold text-xl font-bold bg-red-500 text-gray-50 right-1/3 mb-1 ml-9"></i>
                    </button>
                </div>
                <ul>
                    {todo.length > 0 ? (
                        <>
                            <h3 style={{ width: '100px', height: '60px' }} className='text-2xl bg-white text-black rounded-full p-2 border-double border-4 border-indigo-600 font-bold text-gray-50 text-center'>Tasks :</h3>
                            {todo.map((item) => (
                                <li
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '20px',
                                        margin: '20px',
                                        width: '30rem',
                                        marginLeft: '40px',
                                        border: '2px solid violet',
                                        borderRadius: '10px',
                                    }}
                                    key={item.id}
                                >
                                    {item.value}
                                    <div>
                                        {editedValue === item.value ? (
                                            <>
                                                <input
                                                    type='text'
                                                    value={editedValue}
                                                    onChange={(e) => setEditedValue(e.target.value)}
                                                />
                                                <button style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => saveEdit(item.id)}>Save</button>
                                            </>
                                        ) : (
                                            <>
                                                <button style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => startEdit(item)}>
                                                    <i style={{ color: 'blue' }} className="fa-solid fa-pencil"></i>
                                                </button>
                                                <button style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => deleteTodo(item.id)}>
                                                    <i style={{ color: 'red', marginLeft: 'auto' }} className="fa-solid fa-trash"></i>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </>
                    ) : (
                        <p className='font-bold text-4xl w-96 h-14 text-center text-rose-700'>No item added</p>
                    )}
                </ul>
            </div>
        </>
    );
}

export default App;
