import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  desc : DS.attr('string'),
  sem :  DS.belongsTo('semestr')
});
