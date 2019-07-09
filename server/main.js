import { Meteor } from 'meteor/meteor';
const liveDb = new LiveMysql({
  "host": "localhost",
  "user": "root",
  "password": "root",
  "database": "clinique-reality-2019",
  "serverId": 1,
  "minInterval": 200
});

Meteor.methods({
  updateDate: function(){
    const randomNumber = Math.floor(Math.random() * 100000000);
    liveDb.db.query('UPDATE reality2019_register SET `tel`=' + randomNumber + ' WHERE id="5"', function(err, results, fields){
      // console.log(results)
    });
  }
})

Meteor.publish('register', function () {
  return liveDb.select(
    `SELECT * FROM reality2019_register`,
    null,
    LiveMysqlKeySelector.Index(),
    [{ table: 'reality2019_register' }]
  );
});


Meteor.startup(() => {

});
