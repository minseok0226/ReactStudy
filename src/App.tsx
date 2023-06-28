import React, { useState } from 'react';
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
    padding: '10px 10px',
    borderRadius: '35%'
  };




  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>나눌나누리</h3>
        <p>
         위에 돌아가는 아이콘도 <br/> 수정하고싶어요 ㅎㅎ
        </p>
        <input type="text" id="api-text" name="api-input" />
        <button type="button" id="api-button" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut} style={buttonStyle}>버튼을 눌러주세요</button>
        <p>
           이것 저것 만들어보고 <br/> 뜯어보고 수정해보는 중 입니다 <br/> 하나하나 해볼 수록 재밌네요
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=SXKlJuO07eM"
          target="_blank"
          rel="noopener noreferrer"
        >
          제가 좋아하는 노래입니다
        </a>
      </header>
    </div>
  );
}

export default App;
