const usernames = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const possibleThoughts = [
  'This is awesome',
  'What should we think about?',
  'Thoughts, thoughts, thoughts, thoughts',
  'What else is there?',
  'Life is good!',
  'It is time to make a change',
  'Keep truckin',
  'Hello world',
];

const possibleReactions = [
  'Wow!', 
  'I cannot believe it',
  'You go girl',
  'You have got this!',
  'I do not like it'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(usernames)}`;


const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(possibleThoughts),
      buildSuccess: Math.random() < 0.5,
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomUsername(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThoughts };
