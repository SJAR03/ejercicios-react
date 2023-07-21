export class Task {
  name = '';
  description = '';
  status = false;

  constructor(name, lastName, status) {
    this.name = name;
    this.description = lastName;
    this.status = status;
  }
}
