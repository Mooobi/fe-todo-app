import { NavLink } from 'react-router-dom';
import Button from '../UI/Button';
import { useState } from 'react';
import classes from './Start.module.css';

const Start = ({ setUserName }) => {
  const [localUserName, setLocalUserName] = useState('');

  const handleName = (event) => {
    setLocalUserName(event.target.value);
  };

  const handleSave = () => {
    console.log(localUserName);
    setUserName(localUserName);
  };
  return (
    <>
      <input
        placeholder="이름을 입력해주세요"
        value={localUserName}
        onChange={handleName}
        className={classes.name}
      />
      <NavLink to="/add-todo" onClick={handleSave} className={classes.start}>
        새로운 뚜두리스트 만들기
      </NavLink>
    </>
  );
};

export default Start;
