const list_1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list_2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// a. Get a unique set of users from List1 which are not in List2
const uniqueUsers1 = new Set(list_1.filter(user => !list_2.includes(user)));
console.log([...uniqueUsers1]);

// b. Get a unique set of users from List2 which are not in List1
const uniqueUsers2 = new Set(list_2.filter(user => !list_1.includes(user)));
console.log([...uniqueUsers2]);

// c. Get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
const intersection = new Set(list_1.filter(user => list_2.includes(user)));
console.log([...intersection]);
