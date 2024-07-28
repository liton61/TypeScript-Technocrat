// object destructuring

const userInfo = {
  id: 101,
  name: {
    firstName: "Ayman",
    lastName: "Awsaf",
  },
  contact: "017",
  address: "Bangladesh",
};

const {
  contact,
  name: { firstName },
} = userInfo;

// array destructuring

const myFriends = ["Liton", "Shakil", "Mamun"];
const [, , besFriends] = myFriends;
