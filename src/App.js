
import './App.css';
import Container from './components/Container';
import Typeracer from './components/Typeracer';
import Words from './words';
import { useEffect, useState } from 'react'
import Results from './components/Results';
function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setnewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prev) => [...prev, newWord]);
      setCountCorrect(prev => prev + 1)
    } else {
      setWrongResults(prev => [...prev, inputValue])
    }
  }

  const handleInput = (e) => {
    if (e.charCode === 13 && inputValue.trim() !== '') {
      checkAnswer();
      setnewWord(word[randomWord]);
      setInputValue('')
    }
  }

  const handleStart = () => {
    setDisabled(!disabled);
    setWrongResults([]);
    setCountCorrect(0);
    setCorrectResults([]);
    setInputValue('')
  }

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime(prev => prev - 1), 1000)
    } else if (disabled) {
      setTime(30);
      setAnimation(null)
    } else if (time === 0) {
      setAnimation('scaleNumber 2s infinite')
    }
  }, [disabled, time])

  useEffect(() => {
    setnewWord(word[randomWord])
  }, [])
  return (
    <div className="app">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
      </Container>
      <Results
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect} />
    </div>
  );
}

export default App;
