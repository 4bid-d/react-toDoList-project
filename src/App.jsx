import { useState } from "react";
import "./App.css";
// import Header from "./comp/comp";
// import Counter from "./comp/Counter";
// import { useState } from "react"
function App() {
  let [toDo, setToDo] = useState('');
  let [toDos, setNewOne] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input obj={toDo} onChange={(event) => { setToDo(event.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => { setNewOne([...toDos, { id: Date.now(), text: toDo, status: false }]) }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input value={obj.status} onChange={(e) => {
                    setNewOne(
                      toDos.filter(filteredObj => {
                        if (filteredObj.id === obj.id) {
                          if (e.target.checked === true) {
                            filteredObj.status = true
                          } else {
                            filteredObj.status = false
                          }
                        }
                        console.log(toDos)
                        return filteredObj
                      })
                    )


                  }} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {
                    setNewOne(
                      toDos.filter(filteredObj => {
                        if (filteredObj.id === obj.id) {
                          return null
                        }
                        return filteredObj
                      })
                    )
                  }
                  } className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }

        <h2>Active Tasks</h2>
        {toDos.map(obj => {

          if (obj.status) {
            return (
              <div className="todo">
                <div className="left">
                  <input value={obj.status} onChange={(e) => {
                    setNewOne(
                      toDos.filter(filteredObj => {
                        if (filteredObj.id === obj.id) {
                          if (e.target.checked === true) {
                            filteredObj.status = true
                          } else {
                            filteredObj.status = false
                          }
                        }
                        console.log(toDos)
                        return filteredObj
                      })
                    )


                  }} type="checkbox" name="" id="" />
                  <p><strike>{obj.text}</strike></p>
                </div>
                <div className="right">
                  <i onClick={() => {
                    setNewOne(
                      toDos.filter(filteredObj => {
                        if (filteredObj.id === obj.id && filteredObj.status === true) {
                            filteredObj.status = false                          
                        }
                        return filteredObj
                      })
                    ) 
                  }
                  } className="fas fa-times"></i>
                </div>
              </div>
            )
          } else {
            return (
              <div className="todo">
                <div className="left">
                  <input value={obj.status} onChange={(e) => {
                    setNewOne(
                      toDos.filter(filteredObj => {
                        if (filteredObj.id === obj.id) {
                          if (e.target.checked === true) {
                            filteredObj.status = true
                          } else {
                            filteredObj.status = false
                          }
                        }
                        return filteredObj
                      })
                    )


                  }} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {

                  }
                  } className="fas fa-times"></i>
                </div>
              </div>
            )
          }

        }
        )
        }
      </div>
    </div>
  );
}

export default App;
