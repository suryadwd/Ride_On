
export const sendMessage = (socket, eventName, message) => {
  if (socket) {
    console.log(`Sending message: ${message} to ${eventName}`);
    socket.emit(eventName, message);  // Emit the message to the server
  }
};

export const recieveMessage = (socket, eventName, callback) => {
  if (socket) {
    socket.on(eventName, callback);  // Listen for a message from the server
  }
};
