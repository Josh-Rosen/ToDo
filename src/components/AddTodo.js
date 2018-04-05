import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actionCreators'
import '../App.css';

let AddTodo = ({ dispatch }) => {
  let input
 
  return (
    <div className="centered-div">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)
 
export default AddTodo