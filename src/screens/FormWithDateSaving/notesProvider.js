
const dbkey = 'dbkeypwa';
const storeData = async (textNote) => {

    const oldNotes = JSON.parse(localStorage.getItem(dbkey));
    let notes = [];
    if (oldNotes) {
        notes = oldNotes;
        notes.push(textNote);
    } else {
        notes.push(textNote);
    }
    localStorage.setItem(dbkey, JSON.stringify(notes))

};

const getData = async () => {
    return JSON.parse(localStorage.getItem(dbkey));
}
export { storeData, getData };