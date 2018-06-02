import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';

const Kanban = (props) => (
  <div>
    <button className={styles.AddLane}>Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

// Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
};

const mapStateToProps = state => ({
  lanes: state.lanes,
});

export default connect(mapStateToProps)(Kanban);
