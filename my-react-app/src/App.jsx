import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation-controls";
import Submit from "./components/Submit-Panel";
import questionsData from "./Question-data";
import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


export default function App() {
  const [questionCounter, setQuestionCounter] = React.useState(0);
  const [prevBtnDisability, setPrevBtnDisability] = React.useState(false);
  const [nextBtnDisability, setNextBtnDisability] = React.useState(false);

  const [randomQuestions, setRandomQuestions] = React.useState(() => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  });

  const [selectedAnswers, setSelectedAnswers] = React.useState(() =>
    Array(5).fill("")
  );

  function updateAnswer(index, value) {
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  function nextBtnClick() {
    setQuestionCounter((prev) => prev + 1);
  }

  function prevBtnClick() {
    setQuestionCounter((prev) => prev - 1);
  }

  React.useEffect(() => {
    setNextBtnDisability(questionCounter >= randomQuestions.length - 1);
    setPrevBtnDisability(questionCounter <= 0);
  }, [questionCounter, randomQuestions.length]);

  const [createQuiz, setCreateQuiz] = React.useState(true)
  const[yourScore, setYourScore] = React.useState(null)

  function calculateScore() {
    let score = 0;
    for (let i = 0; i < randomQuestions.length; i++) {
      if (selectedAnswers[i] === randomQuestions[i].correctAnswer) {
        score++;
      }
    }
    setYourScore(score);
    setCreateQuiz(false);
  }

  
  
  
  function toggleQuiz(){
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    setRandomQuestions(shuffled.slice(0, 5));        
    setSelectedAnswers(Array(5).fill(""));           
    setQuestionCounter(0);   
    setYourScore(null);                          
    setCreateQuiz(true); 
  }

  const { width, height } = useWindowSize()

  return (
    <>
      <Header
        createQuiz = {toggleQuiz}
      
      />
      {createQuiz ? ( <div>
        <Main
          key={questionCounter}
          questionNumber={questionCounter + 1}
          question={randomQuestions[questionCounter].question}
          options={randomQuestions[questionCounter].options}
          selected={selectedAnswers[questionCounter]}
          setSelected={(val) => updateAnswer(questionCounter, val)}
        />
        <Navigation
          previous={prevBtnClick}
          next={nextBtnClick}
          prevDisability={prevBtnDisability}
          nextDisability={nextBtnDisability}
          submit={calculateScore}
        />

      </div>) : (
        <>
          <Submit score ={yourScore} quizLength={randomQuestions.length}/>
          <Confetti width={width} height={height}/>

        </>
        
        
        
        
        )}
      
      
    </>
  );
}
