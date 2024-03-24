'use client'

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export const FrequentQuestions = () => {

  const questions = [
    {
      title: 'Do you offer discounts for students?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    }, {
      title: 'Do you offer special pricing for big teams?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    }, {
      title: 'What is the past experience of your teachers?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    }, {
      title: 'What is the course refund policy?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    }, {
      title: 'Do you offer discounts for non-profits?',
      response: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    }, 
  ]
  return (
    <section className="layout-pt-lg layout-pb-lg bg-light-4">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">Frequently Asked Questions.</h2>
              <p className="sectionTitle__text ">Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
            <div className="accordion -block text-left pt-60 lg:pt-40 js-accordion">
              {questions.map((question, index) => (
                <AccordionItem key={index} title={question.title} response={question.response} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

const AccordionItem = ({ title, response }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={`accordion__item ${isExpanded && 'is-active'}`}>
      <div className="accordion__button" onClick={() => setExpanded(!isExpanded)}>
        <div className="accordion__icon">
          {isExpanded 
            ? <FiMinus color='white' /> 
            : <FiPlus />}
        </div>
        <span className="text-17 fw-500 text-dark-1">{title}</span>
      </div>
      {isExpanded && (
        <div className="accordion__content" style={{ maxHeight: isExpanded ? '85px' : '0'}}>
          <div className="accordion__content__inner">
            <p>{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};