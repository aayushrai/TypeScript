import { addTodoActionType, markCompletedTodoActionType, removeTodoActionType } from "Types/actionType";
import { actionTypeName } from "Types/actionType";

const intialState: taskListType = [];

const completedTasksReducer = (state: taskListType = intialState, action: addTodoActionType | removeTodoActionType | markCompletedTodoActionType) => {
    switch(action.type) {
        case actionTypeName.RemoveTodo:
            return [...state.filter((todo) => todo != action.todo)];
        case actionTypeName.AddTodo:
            return [...state];
        default:
            return [...state];
    }
}