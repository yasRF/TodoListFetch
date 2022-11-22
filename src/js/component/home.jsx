import React, { useState, useEffect } from "react";

const Home = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [inputText, setInputText] = useState("");

  function eliminar(index) {
    if (index > -1) {
      const filterList = listaTareas.filter(
        (item) => item !== listaTareas[index]
      );
      setListaTareas(filterList);
    }
  }

  const creartodo = () => {
    fetch("http://assets.breatheco.de/apis/fake/todos/user/yas07", {
      method: "POST",
      body: [],
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok);

        return resp.json();
      })
      .then((data) => {
        setListaTareas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const llamarTodo = () => {
    fetch("http://assets.breatheco.de/apis/fake/todos/user/yas07", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok);

        return resp.json();
      })
      .then((data) => {
        setListaTareas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarTodo = () => {
    fetch("http://assets.breatheco.de/apis/fake/todos/user/yas07", {
      method: "PUT",
      body: JSON.stringify(listaTareas),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => llamarTodo())

      .catch((error) => {
        console.log(error);
      });
  };

  const borrarTodo = () => {
    fetch("http://assets.breatheco.de/apis/fake/todos/user/yas07", {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => llamarTodo())

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    llamarTodo();
  }, []);

  return (
    <div className="text-center mt-5 container">
      <h1>TAREAS</h1>
      {}
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          if (inputText.label.length > 0)
            setListaTareas([...listaTareas, inputText]);
          setInputText({ label: "", done: false });
        }}
      >
        <input
          className="form-control form-control-lg my-3 elinput"
          placeholder="Agrega tus tareas"
          onChange={(evento) =>
            setInputText({
              label: evento.target.value,
              done: false,
            })
          }
         
          value={inputText.label}
        ></input>
      </form>
      <ul className="list-group row">
        {listaTareas.map((item, index) => {
          return (
            <li className="list-group-item text-left elementos" key={index}>
              <span>{item.label}</span>
              <button
                className="btn btn-danger eliminador float-right"
                onClick={() => {
                  eliminar(index);
                }}
              >
                <span>x</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="pendientes">{listaTareas.length} pendiente/s</div>
      <footer className="footerr">
        <button className="" onClick={() => cargarTodo()}>
          Cargar en API
        </button>
        <button className="" onClick={() => borrarTodo()}>
          Eliminar to-do de la Api
        </button>
      </footer>
    </div>
  );
};

export default Home;
