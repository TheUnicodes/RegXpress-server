module.exports = function(io) {
  var users = [];
  var rooms = [];
  var roomNames = [];

  io.on('connection', function(socket) {


    socket.on('on message', function(_info) {
      var obj = _info;
      console.log("user", obj.user);
      // io.to(obj.room).emit('on message', obj.msg);
      io.to(obj.room).emit('on message', obj);
    });


    socket.on('disconnect', function(data) {
      console.log('Client disconnected:', socket.id);
    });

    socket.on('room', function(info) {
      var obj = info;
      console.log("Joining room ->", obj.room);
      console.log("Users joined the room ", users);
      socket.join(obj.room.name);
      users.push(obj.user);

      obj.socketId = socket.id;

      var indexOfRoomName = roomNames.indexOf(obj.room.name);

      if (indexOfRoomName == -1) {
        roomNames.push(obj.room.name);

        rooms.push(obj.room);
      } else {
        obj.room = rooms[indexOfRoomName];
      }

      let user = {
        name: obj.user
      }

      obj.room.users.push(user);


      for (var i = 0; i < rooms.length; i++) {
        console.log("Room ", rooms[i].name, " Users ", rooms[i].users);
      }

      io.to(obj.room.name).emit('room', obj);

    });

  });


}
