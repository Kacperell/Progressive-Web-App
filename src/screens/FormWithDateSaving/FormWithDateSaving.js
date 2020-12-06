import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { storeData, getData } from './notesProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './FormWithDateSaving.scss';
import { v4 as uuidv4 } from 'uuid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
function FormWithDateSaving() {
    const saveNoteToDb = () => {


        let checkboxValues = '';
        if (checkbox1) checkboxValues = checkboxValues + 'Check 1 ';
        if (checkbox1) checkboxValues = checkboxValues + 'Check 2 ';
        if (checkbox3) checkboxValues = checkboxValues + 'Check 3 ';

        if (textNote == '' || !selectValue) {
            return;
        }
        storeData(textNote, selectValue, checkboxValues, radioValue);
        let note = {
            textNote,
            selectValue,
            checkboxValues,
            radioValue
        }
        console.log(note);
        let newNotes;
        if (notes) {
            newNotes = notes;
        } else {
            newNotes = [];
        }

        newNotes.push(textNote);
        setNotes(newNotes);
        setTextNote('');
    }
    const [notes, setNotes] = useState([]);
    const [textNote, setTextNote] = useState('');
    const [selectValue, setSelectValue] = useState(null);

    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);
    const [radioValue, setRadioValue] = useState('radio1');

    async function fetchNotes() {
        const notes = await getData();
        setNotes(notes);
    }


    useEffect(() => {
        fetchNotes();
    }, []);


    const onChangeNote = (e) => {
        setTextNote(e.target.value);
    }



    const handleChangeRadioValue = (event) => {
        setRadioValue(event.target.value);
    };

    return (
        <div className='FormWithDateSaving'>

            <TextField
                onChange={onChangeNote}
                value={textNote}
                className="textFieldAddNote" label="Wprowadź notatkę" />
            <FormControl className="textFieldAddNote">
                <InputLabel htmlFor="age-native-simple">Select</InputLabel>
                <Select
                    native
                    value={selectValue}
                    onChange={
                        (event) => {
                            setSelectValue(event.target.value);
                        }
                    }
                >
                    <option aria-label="None" value="" />
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                </Select>
            </FormControl>

            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            value={checkbox1}
                            checked={checkbox1}
                            onChange={(event) => {
                                setCheckbox1(!checkbox1);
                            }}
                            name="checked1"
                            color="primary"
                        />
                    }
                    label="Check1"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            value={checkbox2}
                            checked={checkbox2}
                            onChange={(event) => {
                                setCheckbox2(!checkbox2);
                            }}
                            name="checked2"
                            color="primary"
                        />
                    }
                    label="Check2"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            value={checkbox3}
                            checked={checkbox3}
                            onChange={(event) => {
                                setCheckbox3(!checkbox3);
                            }}
                            name="checked3"
                            color="primary"
                        />
                    }
                    label="Check3"
                />
            </div>


            <FormControl component="fieldset">
                <RadioGroup name="radio" value={radioValue} onChange={handleChangeRadioValue}>
                    <FormControlLabel value="radio1" control={<Radio color="primary" />} label="radio1" />
                    <FormControlLabel value="radio2" control={<Radio color="primary" />} label="radio2" />
                </RadioGroup>
            </FormControl>


            <Button id="buttonAddNote" onClick={saveNoteToDb} variant="contained" color="primary">
                Dodaj notatkę do bazy
            </Button>

            <List component="nav" aria-label="secondary mailbox folders">
                {
                    notes &&
                    notes.map(note => (
                        <div key={uuidv4()}>
                            <ListItem id="notesLisItem" button >
                                <ListItemText primary={note.textNote} />
                                <ListItemText primary={note.selectValue} />
                            </ListItem>
                            <ListItem id="notesLisItem" button >
                                <ListItemText primary={note.checkboxValues} />
                                <ListItemText primary={note.radioValue} />
                            </ListItem>
                            <Divider id="notesLisItem" />

                        </div>
                    ))
                }
            </List>
        </div>
    )
}

export default FormWithDateSaving
