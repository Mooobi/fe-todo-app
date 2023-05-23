import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../UI/Card';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import classes from './AddTodo.module.css';
import { useState } from 'react';

const AddTodo = () => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClick = () => {
    const newTodo = {
      title: title,
      content: content,
      date: date,
    };
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faArrowLeft}
        onClick={handleGoBack}
        className={classes.arrow}
      />
      <Card>
        <form className={classes.form}>
          <input
            className={classes.date}
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <input
            className={classes.title}
            type="text"
            placeholder="뚜두 제목"
            value={title}
            onChange={handleTitleChange}
          />
          <Card>
            <textarea
              className={classes.content}
              placeholder="뚜두 내용"
              value={content}
              onChange={handleContentChange}
            />
          </Card>
          <NavLink
            to="/todo-lists"
            className={classes.save}
            onClick={handleClick}
          >
            저장하기
          </NavLink>
        </form>
      </Card>
    </>
  );
};

export default AddTodo;
