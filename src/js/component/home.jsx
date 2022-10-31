import React,{useState, useEffect} from "react";

const Home = () => {
		const [newItem, setNewItem] = useState("");
		const [items, setItems] = useState([]);

		//fetch
		useEffect(() => {
		  
		  fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
			.then(response => response.json())
			.then(result => {
				setNewItem(result)
				console.log(result)})
			.catch(error => console.log('error', error));
			}, []);

			/*/response
			[
    {
        "label": "sample task",
        "done": false
    },
    {
        "label": "ggfgdgfd",
        "id": "ebd0e30f-c5ac-4813-a69c-19aeed9b597e",
        "done": false
    },
    {
        "label": "fsdsf",
        "id": "665aabab-1f17-435e-8c01-b54ffb0853dc",
        "done": true
    }
] /*/
		function addItem() {
		const item= {
			id: Math.floor(Math.random() * 1000),
			value: newItem
		};
		setItems(oldList => [...oldList, item]);
		setNewItem("");
	 }
	 function deleteItem(id){
		const newArray = items.filter(item => item.id !==id);
		setItems(newArray);
	
	 };

	return(
		<div className="App">
			<div className="text-center">
			<h1>Lista de tareas</h1>
			<input type="text" placeholder='Add an item...' value={newItem}
			onChange={e => setNewItem(e.target.value)}
			/>
			<button onClick={() => addItem()}>Crear</button>
			<ul>
				{items.map(item => {
					return(
						<li key={item.id}>{item.value}<button onClick={() => deleteItem(item.id)}>Eliminar</button></li>
					)
				})}
			</ul>
		</div>
		</div>
	)
};

export default Home;
