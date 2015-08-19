import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },

    acceptChanges: function() {
      this.set('isEditing', false);

      this.sendAction('acceptChanges', this.get("todo"));
    },

    deleteTodo: function(todo) {
      this.sendAction('deleteTodo', todo);
    }
  },

  toggleCompleted:  Ember.computed('todo.isCompleted', {
    get: function() {
      var todo = this.get('todo');
      return todo.get('isCompleted');
    },

    set: function(key, newValue) {
      var todo = this.get('todo');
      todo.set('isCompleted', newValue);
      this.sendAction('acceptChanges', todo);
      todo.save();
      return newValue;
    }
  })
});
