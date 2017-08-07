module.exports = function(io) {
  var users = [];
  var rooms = [];
  var roomNames = [];
  var timerCount = 5000;

  io.on('connection', function(socket) {


    socket.on('on message', function(_info) {
      var obj = _info;
      console.log("user", obj.user);
      console.log("Message ", obj.msg)
      // io.emit("on message", obj)





      // socket.broadcast.emit("on message", obj);
      socket.broadcast.to(obj.room).emit('on message', obj);



      // io.to(obj.room).emit('on message', obj.msg);
      // io.to(obj.room).emit('on message', obj);
    });

    socket.on("close server", function() {
      io.httpServer.close();
      console.log("Socket closed");
    });

    socket.on('disconnect', function(data) {
      console.log('Client disconnected:', socket.id);
    });

    socket.on("start game", function(gameInfo) {
      // socket.broadcast.emit("start game", numPlayers);
      // io.to("room1").emit("start game", numPlayers);
      console.log("The game should start", gameInfo.numPlayers , "players joined");
      console.log("The game room ", gameInfo.room);

      // socket.emit.to("Coders").emit('start game', numPlayers);


      var timer = setInterval(function() {
        // io.to("Coders").emit('start game', gameInfo);
        timerCount -= 100;
        if(timerCount % 1000 == 0) {
          console.log("Time to start ", timerCount);
          io.to(gameInfo.room.name).emit("count down", timerCount)
        }
        if(timerCount <= 0) {
          io.to(gameInfo.room.name).emit('start game', gameInfo);
          // timer.clearInterval();
          timerCount = 5000;
          clearInterval(timer);
        }
      }, 1000)

    });

    socket.on('room', function(info) {
      var obj = info;
      console.log("Joining room ->", obj.room);
      console.log("Users joined the room ", users);

      socket.join(obj.room.name);
      users.push(obj.user);

      obj.room.socketId = socket.id;

      obj.room.numPlayersJoined ++;

      console.log("Num players joined", obj.room.numPlayersJoined);

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
      // socket.broadcast.emit("room", obj);


    });

  });


}
