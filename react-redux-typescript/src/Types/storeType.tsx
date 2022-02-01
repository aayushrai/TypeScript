type taskListType = string[];
type completedTaskListType = string[];

interface storeType {
  taskList: taskListType;
  completedTaskList: completedTaskListType;
}
