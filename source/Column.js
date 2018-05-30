import Utilities from './utilities';

import './Column.scss';

export default class Column {
  constructor(title, order, options) {
    this.id = Utilities.FN.guid('column');
    this.name = name;
    this.order = order;
    this.options = options || {};

    this.element = Utilities.DOM.createNode('div', {
      'class': ['column'],
      'onDragOver': this.onColumnDragOver,
      'onDragEnter': this.onColumnDragEnter,
      'onDragLeave': this.onColumnDragLeave,
      'onDrop': this.onColumnDrop
    }, this.renderTitle(), this.renderColumnList(), this.renderAddItemInput());

    this.node = Utilities.DOM.createElement(this.element);

    return this;
  }

  renderTitle() {
    return Utilities.DOM.createNode('div', {
      'class': ['column_title']
    }, this.name);
  }

  renderColumnList() {
    return Utilities.DOM.createNode('div', {
      'class': ['column_list']
    });
  }

  renderAddItemInput() {
    return Utilities.DOM.createNode('div', {
      'class': ['column_add_card']
    }, Utilities.DOM.createNode('input', {
      'type': 'text',
      'class': ['column_add_card_input'],
      'placeholder': 'Add new card',
      'onKeyPress': this.onAddCard
    }));
  }

  onColumnDragOver = (event) => {
    console.log(event, this);
  }

  onColumnDragEnter = (event) => {
    console.log(event, this);
  }

  onColumnDragLeave = (event) => {
    console.log(event, this);
  }

  onColumnDrop = (event) => {
    console.log(event, this);
  }

  onAddCard = (event) => {
    event.preventDefault();

    if (event.keyCode === Utilities.KEY_CODES.ENTER_KEY) {
      console.log(event, event.target.value, this);
    }
  }
}
