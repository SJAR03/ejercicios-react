import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import '../styles/task_list.css';

const TaskComponent = ({ task, status, deleted }) => {
  function TaskStatus() {
    if (task.status) {
      return (
        <h5 className='mb-0'>
          <span
            className='badge bg-primary task-actions'
            style={{ borderRadius: 20, fontSize: 20 }}>
            Completed
          </span>
        </h5>
      );
    } else {
      return (
        <h5 className='mb-0'>
          <span
            className='badge bg-danger'
            style={{ borderRadius: 20, fontSize: 20 }}>
            Pending
          </span>
        </h5>
      );
    }
  }

  const [TasksStatus, setTasksStatus] = useState(task.status);

  function taskChangeStatus() {
    if (TasksStatus) {
      return (
        <i
          onClick={() => {
            status(); // update reference here
            setTasksStatus(!TasksStatus);
          }}
          className='bi bi-toggle-on task-actions'
          style={{ color: 'green', fontSize: '30px' }}></i>
      );
    } else {
      return (
        <i
          onClick={() => {
            status();
            setTasksStatus(!TasksStatus);
          }}
          className='bi bi-toggle-off task-actions'
          style={{ color: 'gray', fontSize: '30px' }}></i>
      );
    }
  }

  return (
    <tr>
      <th className='align-middle'>
        <span>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>{TaskStatus()}</td>
      <td className='align-middle'>
        {taskChangeStatus()}
        <i
          onClick={() => deleted()}
          className='bi bi-trash task-actions'
          style={{ color: 'tomato', fontSize: '30px' }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
};

export default TaskComponent;
