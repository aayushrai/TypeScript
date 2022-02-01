import { addTodoActionType, markCompletedTodoActionType, removeTodoActionType } from "./actionType";

export type addTodoActionCreator = (todo: string) => addTodoActionType;
export type removeTodoActionCreator = (todo: string) => removeTodoActionType;
export type markCompletedTodoActionCreator = (todo: string) => markCompletedTodoActionType;