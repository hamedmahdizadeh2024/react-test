export interface Task {
    id: string,
    title: string,
    isDone: boolean;
}
let tasks: Task[] = [
    {id: 'a', title: 'Task A', isDone: false},
    {id: 'b', title: 'Task B', isDone: false},
    {id: 'c', title: 'Task C', isDone: false},
    {id: 'd', title: 'Task D', isDone: false},
    {id: 'e', title: 'Task E', isDone: false},
    {id: 'f', title: 'Task F', isDone: false},
    {id: 'g', title: 'Task G', isDone: false}
];

export const getTasks = () => {
    return Promise.resolve(
        tasks
    )
}


export const saveTasks = (updatedTasks: Task[]) => {
    tasks = updatedTasks;
    return Promise.resolve(
        tasks
    );
}