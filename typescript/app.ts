// Define a Task interface
interface Task {
    id: number;
    description: string;
  }
  
  // Main class for the Task List Manager
  class TaskListManager {
    private tasks: Task[];
    private taskInput: HTMLInputElement;
    private addTaskBtn: HTMLButtonElement;
    private taskList: HTMLUListElement;
  
    constructor() {
      this.tasks = [];
      this.taskInput = document.getElementById('taskInput') as HTMLInputElement;
      this.addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
      this.taskList = document.getElementById('taskList') as HTMLUListElement;
  
      this.addTaskBtn.addEventListener('click', this.addTask.bind(this));
    }
  
    private addTask() {
      const taskDescription = this.taskInput.value.trim();
      if (!taskDescription) return;
  
      const newTask: Task = {
        id: this.tasks.length + 1,
        description: taskDescription,
      };
  
      this.tasks.push(newTask);
      this.renderTasks();
      this.taskInput.value = '';
    }
  
    private renderTasks() {
      this.taskList.innerHTML = '';
      this.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.description;
        this.taskList.appendChild(li);
      });
    }
  }
  
  // Create an instance of TaskListManager when the DOM is ready
  window.addEventListener('DOMContentLoaded', () => {
    new TaskListManager();
  });
  