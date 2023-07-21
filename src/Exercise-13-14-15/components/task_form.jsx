import React from 'react';
import '../styles/task_form.css';
import { Task } from '../models/task.class';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({ add }) => {
  const initialValues = {
    name: '',
    description: '',
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .required('Task name is required')
      .min(4, 'Task name is too short'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description is too short')
      .max(150, 'Description is to large'),
  });

  function addTask(values, { setSubmitting, resetForm }) {
    const newTask = new Task(values.name, values.description, false);
    add(newTask);

    // Reset the form after adding the task
    resetForm();
    setSubmitting(false);
  }

  return (
    <div>
      <div className='form-container mt-5'>
        <h2>Add New Task</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={addTask}>
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form>
              {/* <!-- Name task field --> */}
              <div className='form-outline mb-4'>
                <label className='form-label' htmlFor='name'>
                  Task name
                </label>
                <Field
                  id='name'
                  name='name'
                  type='text'
                  className='form-control'
                />
                {/* Name task errors */}
                {errors.name && touched.name && (
                  <ErrorMessage name='name' component='div'></ErrorMessage>
                )}
              </div>

              {/* <!-- Description field --> */}
              <div className='form-outline mb-4'>
                <label className='form-label' htmlFor='description'>
                  Description
                </label>
                <Field
                  id='description'
                  name='description'
                  type='text'
                  className='form-control'
                />
                {/* Description task errors */}
                {errors.description && touched.description && (
                  <ErrorMessage
                    name='description'
                    component='div'></ErrorMessage>
                )}
              </div>

              {/* <!-- Submit button --> */}
              <button type='submit' className='btn btn-primary btn-block'>
                Add task
              </button>
              {isSubmitting && <p>Adding task</p>}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
