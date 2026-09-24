//  we use in memory database
let users = [
  { id: 1, name: "aayush kumar ", mob: "123456", email: "ikpsdk345@gmail.com" },
  {
    id: 2,
    name: "aayush Sharma ",
    mob: "122345t6",
    email: "idfspsdk32435@gmail.com",
  },
  {
    id: 3,
    name: "chota aayush ",
    mob: "876543",
    email: "ik3adfsdk324353425@gmail.com",
  },
];
export let nextId = 3;
const getAllUsers = () => {
  return users;
};
export const getUserById = (pid) => {
  users.find((user) => user.id == pid);
  return found;
};

export const getUsers = () => users;
export const addUsers = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

export const updateUser = (pid, updateData) => {
  const index = users.findIndex((user) => user.id == pid);
  if (index == -1) {
    return false;
  }
  updateData.id = pid;
  user[index] = updateData;
  return updateData;
};
export const deleteUser = (pid) => {
  const index = users.findIndex((user) => user.id == pid);
  if (index == -1) {
    return false;
  }
  return users.splice(index, 1)[0];
};
