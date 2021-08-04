import React from "react";
import AnswersItem from "./AnswerItem/AnswerItem";
import "./AnswersList.css";

const AnswersList = (props) => {
  return (
    <ul className="AnswersList">
      {props.answers.map((answer, index) => {
        return (
          <AnswersItem
            answer={answer}
            key={index}
            state={props.state ? props.state[answer.id] : null}
            onAnswerClick={props.onAnswerClick}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
