const checkEvenFriend = (array) => {
  const friends = [...array];
  const newFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      newFriends.push(friend);
    }
  }
  return newFriends;
};

const friends = [
  "Abhishek",
  "Maruf",
  "Hilda",
  "Granger",
  "Layla",
  "Esmarelda",
  "kashem",
];
console.log(checkEvenFriend(friends));
