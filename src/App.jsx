import { useState } from 'react';

import './App.css';

function App() {
	const [todos, addTodo] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	const handleSubmit = () => {
		addTodo([...todos, newTodo]);
		setNewTodo('');
	};

	const handleChange = event => {
		console.log('text', event);
		setNewTodo(event.target.value);
	};

	return (
		<>
			<h1>TODO</h1>
			{/* <form> */}
			<input type="text" onChange={handleChange}></input>
			<button onClick={handleSubmit}>Add</button>
			{/* </form> */}
			<div className="card">
				{todos.map((todo, index) => {
					return (
						<div key={index} className="todo">
							{todo}
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
