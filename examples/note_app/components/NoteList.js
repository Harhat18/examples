import React, { useContext } from "react";
import Note from "./Note";
import NotesContext from "../context/note-context";

const NoteList = ({ removeNote }) => {
  const { notes } = useContext(NotesContext);
  return notes.map((note) => <Note key={note.title} note={note} />);
};

export default NoteList;
