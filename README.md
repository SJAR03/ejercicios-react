# Exercises 4, 5, and 6: Converting Class Component to Functional Component

**Exercise Explanation and Requirements:**

Given the following class component that includes several lifecycle methods, we need to convert it into a functional component that performs the same functionality.

```jsx
import React, { Component } from 'react';
import '../../styles/clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);
    // Component's private state
    this.state = {
      // Generate initial date as component's state
      date: new Date(),
      age: 0,
      name: 'Martin',
      lastName: 'San Jose',
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.date.toLocaleTimeString()}</h2>
        <h3>
          {this.state.name} {this.state.lastName}
        </h3>
        <h1>Age: {this.state.age}</h1>
      </div>
    );
  }

  tick() {
    this.setState((prevState) => {
      let age = prevState.age + 1;
      return {
        ...prevState,
        date: new Date(),
        age,
      };
    });
  }
}

export default Clock;
```

### Exercise Screenshot:

![Exercise 2 Solution](readme-assets/Exercise-4-5-6.png)

_The code can be found in the repository, in its respective folder or branch_
