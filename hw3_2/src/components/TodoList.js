
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleTask=(e)=>{
        setNewTask(e.target.value);
    }

    const addTask=()=>{
        if (newTask.trim() !== "") {
            setTask([...task, newTask]);
            setNewTask("");
          }
    };
    const deleteUl = (index) => {
        setTask(task.filter((item, id) => id !== index));
        
      };
    return ( 
    < div > 
    <p>Новая задача</p>
    <TextField id="standard-basic" label="Task" variant="standard" onChange={handleTask}/>
    <Button onClick={addTask}>Добавить</Button>
    <p className='text'>Список задач</p>
    <div >
     {task.map((item, index)=>(
        <div className='cont'>
            <CardContent>
            <Typography  sx={{ fontSize: 24 }} className='text1' variant="body2" id={index}>
                {item}
            </Typography>
            </CardContent>
            <Button  onClick={()=>deleteUl(index)} variant="outlined" startIcon={<DeleteIcon/>}>
                Удалить
            </Button>
        </div>
    
 ))
    }
    </div>
    </div>)
    }
    export default TodoList;