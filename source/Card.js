import Utilities from './utilities';

import './Card.scss';

export default class Card {
  constructor(text, order, options) {
    this.text = text;
    this.order = order;
    this.options = options;
    return this;
  }
}
