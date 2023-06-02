import React from 'react';
import logo from './logo.svg';
import './App.css';

//React 컴포넌트 작성 방식 : 객체지향 프로그래밍 방식, 함수형 프로그래밍 방식
function App() {
  

  const handleClick = () => {
    console.log('Input Value: Nanul');
    // 여기서 입력값을 처리하거나 원하는 동작을 수행할 수 있습니다.
  };

  const handleMouseEnter = () => {
    console.log('Mouseenter');

  }

  const handleMouseOut = () => {
    console.log('MouseOut');
  }

  const buttonStyle = {
    backgroundColor: 'pink',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '50%'
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>나누리</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input type="text" id="api-text" name="api-input" />
        <button type="button" id="api-button" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} style={buttonStyle}>실행</button>
        <p>
           아직도 두시간이나 남았다니 믿고싶지 않네요
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
