// ********* For PA3 only
var messageCounter = 0;
var programmedMessages = [
  'Hello Annie! The deal seems perfect. I will meet you at the scheduled time. Please tell me the pickup zone when you arrive.',
  'Perfect. I am looking forward to meeting you! See you then.'
]
// *********

function createMessage(message, messageType) {
  var newMsg = document.createElement('p');
  newMsg.appendChild(document.createTextNode(message));

  var newDiv = document.createElement('div');
  newDiv.className = messageType;
  newDiv.appendChild(newMsg);

  var messagesDiv = document.getElementsByClassName('messages')[0];
  messagesDiv.appendChild(newDiv);
}

function sendNewMessage() {
  var message = document.getElementById('messageInput').value;
  if (message !== '') {
    createMessage(message, 'my-message');
  }
  document.getElementById('messageInput').value = '';
  setTimeout(function () {
    if (messageCounter >= programmedMessages.length) {
      messageCounter = programmedMessages.length - 1;
    }
    var message = programmedMessages[messageCounter];
    createMessage(message, 'others-message')
    messageCounter += 1;
  }, 5000)
}

window.onload = function () {
  document.getElementById('sendButton').addEventListener('click', sendNewMessage);
}
