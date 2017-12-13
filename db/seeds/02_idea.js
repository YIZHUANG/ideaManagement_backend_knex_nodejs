
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('idea').del()
    .then(function () {
      // Inserts seed entries
      return knex('idea').insert([
        {title: 'B-day party',description:'Biry party for collegues from work',budget:557.00,isReadyForComments:1,peopleNeeded:9,categoryid:2},
        {title: 'Little Xmas party',description:'A little xmas party so early that the restaurants still have vacancy. E.g. early Sept?',budget:250.00,isReadyForComments:1,peopleNeeded:5,categoryid:2},
        {title: 'Car purchase',description:'It is time to buy a new car',budget:19900.00,isReadyForComments:1,peopleNeeded:1,categoryid:1},
        {title: 'Washing machine',description:'Better your own than common',budget:400.00,isReadyForComments:1,peopleNeeded:2,categoryid:1},
        {title: 'Cesar Salad',description:'Dont forget the ingredients',budget:45.00,isReadyForComments:1,peopleNeeded:1,categoryid:5},
        {title: 'New switch',description:'Do not mess up Nintendo Switch and network switch',budget:100.00,isReadyForComments:0,peopleNeeded:7,categoryid:6},
        {title: 'PS4 Pro',description:'PS4 Pro is out, check out the new VR possibilities',budget:900.00,isReadyForComments:1,peopleNeeded:20,categoryid:6},
        {title: 'Running',description:'Running event shape yourself',budget:54.00,isReadyForComments:0,peopleNeeded:70,categoryid:3},
        {title: 'Work party',description:'For all newcomers in our company we organaize this event',budget:370.00,isReadyForComments:1,peopleNeeded:37,categoryid:4},
      ]);
    });
};
