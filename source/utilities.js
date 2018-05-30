const isFunction = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Function]";
}

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

const isString = (obj) => {
  return Object.prototype.toString.call(obj) === "[object String]";
}

function guid(text) {
  return `${text}-${Math.random().toString(36).substr(2, 16)}`;
}

function createNode(element, attributes, ...childNodes) {
  let tag = ((element || element !== null) ? element : tags.DIVISION).toLowerCase();
  let children = new Array();
  let properties = new Map();

  for (let key in attributes) {
    properties.set(key, attributes[key]);
  }

  if (isArray(childNodes)) {
    if (childNodes.length > 0) {
      for (let i = 0; i < childNodes.length; i++) {
        children.push(childNodes[i]);
      }
    }
  }

  return {
    domId: guid('dom'),
    tag,
    properties,
    children
  };
}

function createElement(nodeObject) {
  if (isString(nodeObject))
    return document.createTextNode(nodeObject);

  let node = document.createElement(nodeObject.tag);

  const properties = nodeObject.properties;

  if (properties.size > 0) {
    for (let [key, value] of properties) {
      if (key === 'class') {
        node.classList.add.apply(node.classList, value);
      } else if (isEventAttribute(key)) {
        node.addEventListener(
          key.slice(2).toLowerCase(),
          value
        );
      } else {
        node.setAttribute(key, value);
      }
    }
  }

  const children = nodeObject.children;

  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      let childNode = createElement(children[i]);
      if (childNode)
        node.appendChild(childNode);
    }
  }

  return node;
}

function isEventAttribute(key) {
  return /^on/.test(key);
}

const KEY_CODES = {
  'ENTER_KEY': 13
};

export default {
  DOM: {
    createNode,
    createElement
  },
  FN: {
    guid,
    isArray,
    isObject,
    isString,
    isFunction
  },
  KEY_CODES
}
