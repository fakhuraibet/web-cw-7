const project = {
  type: "tech",
  users: 1000,
  biography() {
    return "This is my project";
  },
};

function randomProperty(obj) {
  const keys = Object.keys(obj);

  const random = Math.floor(Math.random() * keys.length);

  //console.log(keys[`${random}`]);
  //console.log(obj[` ${keys[`${random}`]} `]);

  console.log(keys[random]);
  console.log(obj[`${keys[random]}`]);
}

randomProperty(project);
