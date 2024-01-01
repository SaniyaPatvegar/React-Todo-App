import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import "./TodoList.css";
import { Padding } from "@mui/icons-material";
function TodoList() {
  const [task, setTask] = useState([]);
  const [add, setAdd] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editTodos, setEditTodos] = useState([]);

  const remove = (e) => {
    let arr = [...task];
    arr.splice(e, 1);
    console.log(arr);
    setTask(arr);
    setAdd("");
  };

  const startEditing = (e) => {
    setEditIndex(e);
    setEditTodos(task[e]);
  };

  const saveEdit = (e) => {
    let arr = [...task];
    arr[e] = editTodos;
    setTask(arr);
    setEditIndex(null);
  };

  return (
    <>
      <div className="container">
        <h1>Get Things Done !</h1>
        <div className="txt-btn">
          <TextField
            id="outlined-basic"
            placeHolder="Add"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />

          <Button
            id="Addbtn"
            variant="outlined"
            onClick={() => {
              let arr = [...task];
              arr.push(add);
              console.log(arr);
              setTask(arr);
              setAdd("");
            }}
          >
            Add Task
          </Button>
        </div>

        <div>
          <table>
            {task.map((ele, ind) => (
              <tr>
                {ind === editIndex ? (
                  <AppBar id="Appbar" position="static">
                    <div>
                      <TextField
                        id="edit-txt"
                        value={editTodos}
                        onChange={(e) => setEditTodos(e.target.value)}
                      />

                      <IconButton
                        aria-label="delete"
                        size="large"
                        className="btn-icon"
                      >
                        <CheckBoxIcon
                          className="btn-icon"
                          onClick={(e) => saveEdit(ind)}
                        />
                      </IconButton>
                    </div>
                  </AppBar>
                ) : (
                  <div>
                    <AppBar id="Appbar" position="static">
                      <div id="task">
                        {ele}
                        <span>
                          <IconButton
                            aria-label="delete"
                            size="large"
                            className="btn-icon"
                          >
                            <DeleteIcon
                              id="btn-delete"
                              onClick={(e) => remove(ind)}
                            />
                          </IconButton>

                          <IconButton
                            aria-label="delete"
                            size="large"
                            className="btn-icon"
                          >
                            <EditNoteIcon
                              className="btn-icon"
                              onClick={(e) => startEditing(ind)}
                            />
                          </IconButton>
                        </span>
                      </div>
                    </AppBar>
                  </div>
                )}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default TodoList;
