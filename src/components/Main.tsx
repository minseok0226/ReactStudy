import React, {useState} from 'react';
import '../css/Main.css';


function Main() {

  const [ApiText, setMessage] = useState('');

  return (
    <div id='main-header'>
      <header>
        <h2 id='SimSimi-header'>왜 메인브랜치에 작업을 해서 막 푸시하는가 성창식</h2>
        <input
          type='text'
          name='ApiName'
          placeholder='API 명을 입력하세요'
          value={ApiText}
          onChange={
            (e) => {
                setMessage(e.target.value);
            }
          }
        />
        <button onClick={
          () => {
            alert(ApiText);
            setMessage('');
          }
        }>성창식 버튼
        </button>
      </header>
    </div>
  );
}

export default Main;
