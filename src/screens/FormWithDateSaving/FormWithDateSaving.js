import React, { useState, useEffect } from 'react'
import { storeData, getData } from './notesProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './FormWithDateSaving.scss';
import { v4 as uuidv4 } from 'uuid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function FormWithDateSaving() {
    const saveNoteToDb = () => {
        if (textNote == '') {
            return;
        }
        storeData(textNote);
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
    return (
        <div className='FormWithDateSaving'>

            <TextField
                onChange={onChangeNote}
                value={textNote}
                id="textFieldAddNote" label="Wprowadź notatkę" />
            <Button id="buttonAddNote" onClick={saveNoteToDb} variant="contained" color="primary">
                Dodaj notatkę do bazy
            </Button>

            <List component="nav" aria-label="secondary mailbox folders">
                {
                    notes &&
                    notes.map(note => (
                        <div key={uuidv4()}>
                            <ListItem id="notesLisItem" button >
                                <ListItemText primary={note} />
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
