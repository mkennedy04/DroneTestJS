var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
  .after(5000, function(){
    this.up(0.5);
  })
  .after(2500, function(){
    this.down(0.5);
  })
  .after(2500, function(){
    this.stop();
    this.land();
  });