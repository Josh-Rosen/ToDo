import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../constants';
import '../App.css';
 
const Footer = () => (
  <div className="App-footer">
    <p>
      Show:
      {' '}
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
      </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </p>
  </div>
)
 
export default Footer
