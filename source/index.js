import List from './List';

import './index.scss';

const List = (selector) => {
  document
    .querySelector(selector)
    .appendChild(document.createTextNode('List'));
}

export default List;
