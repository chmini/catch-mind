// eslint-disable-next-line no-undef
const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message: message });
  console.log(`You : ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname: nickname });
}

socket.on("receiveMessage", (data) => {
  const { nickname, message } = data;
  console.log(`${nickname} : ${message}`);
});
