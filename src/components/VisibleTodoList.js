import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../actionCreators';
import { getVisibleTodos } from '../selectors/selectors';
 
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
 
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
 
export default VisibleTodoList
