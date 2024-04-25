import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Convert() {
    const [cell, setCell] = useState('');
    const [farenget, setFarenget] = useState('');


    const convertInFarenget = (temp) => {
        setFarenget(temp * 1.8 + 32);
    };
    const convertInCell = (temp) => {
        setCell((temp - 32) / 1.8);
    };
    const handleCell = (e) => {
        let { value } = e.target;
        setCell(value);
        convertInFarenget(value);

    };
    const handleFarenget = (e) => {
        const { value } = e.target;
        setFarenget(value);
        convertInCell(value);
    };


    return (
        < div className = 'convert' >
        <p className = 'text' > Конвертер температуры < /p>
        <div className = 'convert_item' >
            <TextField helperText = "Please input value in celsius"
                id = "demo-helper-text-misaligned"
                label = "celsius "
                onChange = { handleCell }
                value = { cell }

            />
            <TextField helperText = "Please input value in fahrenheit"
                id = "demo-helper-text-misaligned"
                label = "fahrenheit"
                onChange = { handleFarenget }
                value = { farenget }
            />
            <Stack direction = "row"
                spacing = { 2 }
                className = 'btn' >
                <Button variant = "outlined"
                    onClick = {(e) => {
                        setCell("");
                        setFarenget("");
                        e.target.parentNode.parentNode.firstChild.children[1].firstChild.value = '';
                    }
                } >
                    Delete
                </Button>
            </Stack >
        </div >





        <
        /div> )
    }
    export default Convert