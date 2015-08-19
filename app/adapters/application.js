import DS from 'ember-data';

export default DS.LSAdapter.extend({
  namespace: 'blg-ember-todomvc',

  shouldReloadAll() { return false; }
});
