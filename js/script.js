import { dataSource } from './data.js';
import { elementId, selector, classNames } from './settings.js';
import utils from './utils.js';

class Question{
  constructor(data){
    const thisQuestion = this;

    thisQuestion.data = data;
    thisQuestion.render(data);
    thisQuestion.initAccordion();
  }

  render(element){
    const thisQuestion = this;

    const questionsList = document.getElementById(elementId.questionsList);
    const generatedHTML = thisQuestion.generateHTML(element);
    thisQuestion.elementDOM = utils.createDOMFromHTML(generatedHTML);

    questionsList.appendChild(thisQuestion.elementDOM);
  }

  generateHTML(element){
    return (
      `<div class="question clickable-elem">
        <h2>${element.question}</h2>
        <img class="arrow-elem" src="./images/icon-arrow-down.svg">
      </div>
      <p class="answer">${element.answer}</p>`
    );
  }

  initAccordion(){
    const thisQuestion = this;
    const accordionTriger = thisQuestion.elementDOM.querySelectorAll(selector.clickableElement);

    for(const elem of accordionTriger){
      elem.addEventListener('click', function(event){
        event.preventDefault();

        const activeItem = document.querySelector(selector.active);

        if(activeItem && activeItem != thisQuestion.elementDOM){
          activeItem.classList.remove(classNames.active);
        }

        thisQuestion.elementDOM.classList.toggle(classNames.active);
      });
    }
  }

}

const app = {
  initFaq: function() {
    for(const questionData of dataSource.questions){
      new Question(questionData);
    }
  },

  init: function(){
    const thisApp = this;

    thisApp.initFaq();
  }
};

app.init();

