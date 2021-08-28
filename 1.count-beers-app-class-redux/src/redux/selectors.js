export const getPersons = (store) => {
  console.log(store.addPersonR.persons);
  return store.addPersonR.persons;
};

export const getPersonByName = (store, name) => {
  return getPersons(store)
    ? { ...getPersonByName(store).name[name], name }
    : {};
};
