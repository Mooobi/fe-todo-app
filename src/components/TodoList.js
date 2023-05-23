const TodoList = (props) => {
  const todoList = {
    date: props.date,
    title: props.title,
    content: props.content,
  };
  return <>{todoList.map()}</>;
};

export default TodoList;
