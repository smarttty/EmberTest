import Ember from 'ember';
import semestr from '../models/semestr'

export default Ember.Route.extend({
  model() {
    this.store.push({
      data:[
        {
          id:1,
          type:'educational-program',
          attributes:{
            name: 'Дискретная математика',
            desc: 'Дискретная математика',
          }

        },
        {
          id:2,
          type:'educational-program',
          attributes:{
            name: 'Механика',
            desc: 'Механика',
          }

        }
      ]
    });
    var ep1 = this.store.peekRecord('educational-program',1);
    var ep2 = this.store.peekRecord('educational-program',2);
    this.store.createRecord('semestr',
      {
        id:1,
        name: 'Первый семестр',
        desc: 'Первый семестр - самый тяжёлый',
        eps:[ep1,ep2],
      }
    );

    var sem = this.store.findRecord('semestr',1);
    console.log(sem);
    return [sem];
  }
});
