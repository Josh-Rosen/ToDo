import React from 'react';
import PropTypes from 'prop-types';

const style = (completed) => (
  {
    textDecoration: completed ? 'line-through' : 'none',
    textAlign: 'center',
    padding: '5px',
  }
);
 
const Todo = ({ onClick, completed, text }) => (
  <div
    onClick={onClick}
    style={style(completed)}
  >
    {text}
  </div>
)
 
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
 
export default Todo
