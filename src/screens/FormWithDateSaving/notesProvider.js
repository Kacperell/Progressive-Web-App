
const dbkey = 'dbkeypwa';
const storeData = async (textNote, selectValue, checkboxValues, radioValue) => {

    const oldNotes = JSON.parse(localStorage.getItem(dbkey));
    let notes = [];
    let note = {
        textNote,
        selectValue,
        checkboxValues,
        radioValue
    }
    if (oldNotes) {
        notes = oldNotes;
        notes.push(note);
    } else {
        notes.push(note);
    }
    localStorage.setItem(dbkey, JSON.stringify(notes))

};

const getData = async () => {
    return JSON.parse(localStorage.getItem(dbkey));
}
export { storeData, getData };