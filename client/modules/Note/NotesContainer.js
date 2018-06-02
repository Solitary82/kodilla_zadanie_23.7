import { connect } from 'react-redux';
import Notes from './Notes';

import { editNote, updateNoteRequest, deleteNoteRequest } from './NoteActions';

const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
