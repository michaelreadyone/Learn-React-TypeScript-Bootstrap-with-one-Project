import * as React from 'react';
import { Note } from '../models/note.model';

interface INotesProps {
  note: Note
}

const Notes: React.FunctionComponent<INotesProps> = ({note}) => {
  return (
    <>
      <div>Note card</div>
    </>
  );
};

export default Notes;
