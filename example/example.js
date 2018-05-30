import Column from '../source/Column.js';

import './example.scss';

var LIST = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', () => {
  let column = new Column('Column 1', '1');
  console.log(column);
  LIST.appendChild(column.node);
});
