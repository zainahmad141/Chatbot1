//function showValue(e) {
//  const fname = document.getElementById('fname');
//alert(fname.value)
//}




const MESSAGES = [
  {
    DavidWallace: [
      { sender: 'David', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati.' },
      { sender: 'me', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati.' },
      { sender: 'David', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati.' },
      { sender: 'David', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati.' },
      { sender: 'me', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati.' },
    ]
  }
];


const appendSendersMessage = (msgObj) => {
  const template = `<div class="msg-container">
    <img src="./assets/imgs/img-avatar.png" alt="" class="avatar-img">
      <div class="chat-detail">##MSG##
      </div>
  </div>`;

  return template.replace('##MSG##', msgObj.message);
};

const appendMyMessage = (msgObj) => {
  const template = `<div class="right-container">
  <div class="chat-detail">##MSG##</div>
  <img src="./assets/imgs/img-avatar.png" alt="" class="avatar-img">
</div>`;

  return template.replace('##MSG##', msgObj.message);
};

const appendMessage = (msgObj) => {
  return msgObj.sender === 'me' ? appendMyMessage(msgObj) : appendSendersMessage(msgObj);
}

const loadMessages = () => {
  let msgs = '';
  for (let i = 0; i < MESSAGES[0].DavidWallace.length; i++) {
    const msg = MESSAGES[0].DavidWallace[i];
    msgs += appendMessage(msg);
  }

  if (msgs) {
    const messageWindow = document.getElementById('msg-pane')
    messageWindow.innerHTML = msgs;
  }
};

const loadChats = (chatData) => {

  let chats = '';

  for (let i = 0; i < chatData.length; i++) {
    let template = `<div class="msg-list">
      <div style="display: flex; justify-content: snpace-betwee ; align-items: center;">
        <div>
          <img src="assets/imgs/${chatData[i].profileImg}" alt="" width="50px" height="40px">
        </div>
      <div>
          <h4 class="user-name">${chatData[i].name}</h4>
          <p class="chat-text">${chatData[i].displayMessage}</p>
      </div>
  </div>
  <div class="time">
      52
  </div>
</div>`;
    chats += template;
  }

  const chatList = document.getElementById('chat-list');
  chatList.innerHTML = chats;
}

const CHAT_DATA = [
  {
    name: "David Wallace",
    profileImg: "sakuna.jpg",
    displayMessage: "Hey! How are you?",
  },
  {
    name: "John Doe",
    profileImg: "sakuna.jpg",
    displayMessage: "Hey! How are you?",
  },
  {
    name: "David Miller",
    profileImg: "sakuna.jpg",
    displayMessage: "Hey! How are you?",
  },
  {
    name: "Jane Doe",
    profileImg: "sakuna.jpg",
    displayMessage: "Hey! How are you?",
  },
];

const addMessageToPane = (msg) => {
  const msgPane = document.getElementById("msg-pane");

  // Now Create RIGHT CONTAINER
  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");

  // NOW ADD CHAT DETAIL DIV TO RIGHT CONTAINER
  const chatDetail = document.createElement("div");
  chatDetail.classList.add("chat-detail");
  chatDetail.innerHTML = msg.message;

  // chat detail append
  rightContainer.appendChild(chatDetail);

  // NOW LET'S ADD IMAGE TO RIGHT CONTAINER
  // create new image 
  const img = document.createElement("img");
  img.src = "./assets/imgs/img-avatar.png";
  // add class 
  img.classList.add("avatar-img");

  // append to right container div
  rightContainer.appendChild(img);


  // append msg template to msg pane
  msgPane.appendChild(rightContainer);
};

const sendMsg = () => {
  const inputVal = document.getElementById('msg-input').value;
  const msgObj = { sender: 'me', message: inputVal };
  MESSAGES[0].DavidWallace.push(msgObj);
  document.getElementById('msg-input').value = '';
  addMessageToPane(msgObj)
  // loadMessages();
}

const input = document.getElementById("msg-input");

input.addEventListener("keydown", function (enter) {
  if (enter.code === "Enter") {
    sendMsg();
  }
});



const ShowDropdown = () => {

  const dropdownContent = document.getElementById("dropdown-content");

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }

}

const logOut = () => {

  const dropdownContent = document.getElementById("logout-msg");

  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }

}

loadMessages();

loadChats(CHAT_DATA);