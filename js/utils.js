import { classNames } from './settings.js';

const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let li = document.createElement('li');
  li.classList.add(classNames.listItem);
  li.innerHTML = htmlString;
  return li;
};

export default utils;
