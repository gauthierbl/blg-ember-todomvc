import Ember from 'ember';

export default Ember.ObjectController.extend({
  isCompleted: function(key, value) {
    // get the model we want to reference
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
