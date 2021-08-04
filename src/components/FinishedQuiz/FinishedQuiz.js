import React from "react";
import "./FinishedQuiz.css";

import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = ({ quiz, results, onRetry }) => {
  console.log(results);
  const succesCount = Object.keys(results).reduce((total, key) => {
    if (results[key] === "succes") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className="FinishedQuiz">
      <ul>
        {quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            results[quizItem.id] === "error"
              ? "fa-times error"
              : "fa-check success",
          ];
          return (
            <li key={index}>
              <strong> {index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>
        {" "}
        правильно {succesCount} из {quiz.length}
      </p>
      <div>
        <Button onClick={onRetry} type="primary">
          Повторить
        </Button>
        <Link to="/">
          <Button type="succes">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
