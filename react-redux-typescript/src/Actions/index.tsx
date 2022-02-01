import { addTodoActionCreator, markCompletedTodoActionCreator, removeTodoActionCreator } from "Types/actionsCreatorType";

export const addTodo: addTodoActionCreator = (todo) => {
  return {
    type: "ADD_TODO",
    todo,
  };
};

export const removeTodo: removeTodoActionCreator = (todo) => {
  return {
    type: "REMOVE_TODO",
    todo,
  };
};

export const completedTodo: markCompletedTodoActionCreator = (todo) => {
  return {
    type: "MARK_COMPLETED_TODO",
    todo,
  };
};
