import React, { useState } from 'react';
import TaskComponent from './task';
import { Task } from '../models/task.class';
import '../styles/task_form.css';
import TaskForm from './task_form';

const TaskList = () => {
  const defaultTask1 = new Task('Task 1', 'Description 1', false);

  const defaultTask2 = new Task('Task 2', 'Description 2', true);

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2]);

  function statusTask(task) {
    console.log('Changed status of this this:', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask[index].status = !tempTask[index].status;
    setTasks(tempTask);
  }

  function deleteTask(task) {
    console.log('Delete this task:', task);
    const index = tasks.indexOf(task);
    const tempTask = [...tasks];
    tempTask.splice(index, 1);
    setTasks(tempTask);
  }

  function addTask(task) {
    console.log('Added task', task);
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <div className='page-content page-container' id='page-content'>
        <div className='padding'>
          <div className='row container d-flex justify-content-center'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>Task list</h4>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((task, index) => {
                        return (
                          <TaskComponent
                            key={index}
                            task={task} // Pass the entire task object
                            status={() => statusTask(task)}
                            deleted={() => deleteTask(task)}></TaskComponent>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
