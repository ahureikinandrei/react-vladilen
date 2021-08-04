import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import "./Quiz.css";

class Quiz extends Component {
  state = {
    results: {}, // {[id] : 'succes' / 'error'}
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Какого цвета небо",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Черный", id: 1 },
          { text: "Синий", id: 2 },
          { text: "Красный", id: 3 },
          { text: "Зеленый", id: 4 },
        ],
      },
      {
        question: "В каком году основали Санкт-Петербург",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "1700", id: 1 },
          { text: "1705", id: 2 },
          { text: "1703", id: 3 },
          { text: "1803", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHendler = (answerId) => {
    if (this.state.answerState) {
      const [key] = Object.keys(this.state.answerState);
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const { results } = this.state;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = "succes";
      }
      this.setState({
        answerState: {
          [answerId]: "succes",
        },
        results,
      });

      const timeOut = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeOut);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: {
          [answerId]: "error",
        },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className="Quiz">
        <div className="QuizWrapper">
          <h1>Quiz</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
              onAnswerClick={this.onAnswerClickHendler}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
