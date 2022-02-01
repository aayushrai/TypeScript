export enum actionTypeName{
    AddTodo = "ADD_TODO",
    RemoveTodo = "REMOVE_TODO",
    MarkCompletedTodo = "MARK_COMPLETED_TODO"
}

export interface addTodoActionType {
    type: actionTypeName.AddTodo,
    todo: string
}

export interface removeTodoActionType {
    type: actionTypeName.RemoveTodo,
    todo: string
}

export interface markCompletedTodoActionType {
    type: actionTypeName.MarkCompletedTodo,
    todo: string
}
