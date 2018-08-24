import DS from 'ember-data';
export default DS.Model.extend({
  name : DS.attr('string'),
  desc : DS.attr('number'),
  eps: DS.hasMany('educational-program')

});
