let users = [];

for (let index = 9999; index >= 0; index --) {
  users[index] = {
    id: index,
    name: Math.random().toString()
  }
}
// console.log(users);

const list = [];

for (let index = 0; index < 10000; index++) {
  list[index] = {

    id: index,
    name: Math.random(),
    created_by: Math.floor(Math.random() * 10000)
  }
}

// console.log(list);

console.time('using find');
const conUserFind = list.map(element => {
  return {
    ...element,
    created_by: users.find(user => user.id === element.created_by)
  }
})
console.timeEnd('using find');
// console.log('xxx conUserFind-->: ', conUserFind);

console.time('using reduce');
const usersIndexed = users.reduce((acc, el) =>{
  acc[el.id] = el;
  return acc;
},{})
console.timeEnd('using reduce');

console.time('using find');
const conUserReduce = list.map(element => {
  return {
    ...element,
    created_by: usersIndexed[element.created_by]
  }
})
console.timeEnd('using find');
// console.log('xxx conUserReduce-->: ', conUserReduce);

// in lodash => _.keyBy
// https://lodash.com/docs/4.17.15#keyBy

// in Ramda => indexBy
// https://ramdajs.com/0.21.0/docs/#indexBy

