const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false},
    {todo: 'Teach class', done: true}
  ];
  
  module.exports = {
    getAll: function() {
      return todos;
    }
  };