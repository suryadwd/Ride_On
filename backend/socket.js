import { Server } from "socket.io";
import { User } from "./models/user.model.js";
import { Captain } from "./models/cap.model.js";

let io;

export const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    socket.on('join', async (data) => {
      const { userId, userType } = data;

      console.log(`user ${userId} joined as ${userType}`)

      if (userType === 'user') {
        await User.findByIdAndUpdate(userId, { socketId: socket.id });
      } else if (userType === 'captain') {
        await Captain.findByIdAndUpdate(userId, { socketId: socket.id });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

  

export const sendMessageToSocketId = (socketId, message) => {
  if (io) {
    io.to(socketId).emit("message", message);
  } else {
    console.error("Socket.io is not initialized.");
  }
};
