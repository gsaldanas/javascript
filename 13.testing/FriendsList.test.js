import FriendsList from "./friendsList.js";

describe("FriendsList class", () => {
  test("adding 2 people and getting their correct ages", () => {
    expect(
      new FriendsList()
        .add("Jos", 10)
        .add("Els", 20)
        .list.reduce((acc, el) => acc + el.age, 0)
    ).toBe(30);
  });
  //add function
  test("adding 2 people names", () => {
    expect(
      new FriendsList()
        .add("Jos", 18)
        .add("Els", 22)
        .list.map((el) => el.name)
        .join(",")
        .toLowerCase()
    ).toBe("jos,els");
  });
  //remove friend
  test("removing a friend should work", () => {
    const myList = new FriendsList().add("kanja", 30);
    myList.remove(myList.list[0].id);
    expect(myList.list.length).toBe(0);
  });
  //changeName method test
  test("renaming a friend should work", () => {
    const myList = new FriendsList().add("django", 30);
    const id = myList.list[0].id;
    myList.changeName(id, "tomato");
    //myList.list[0].name
    expect(myList.list.find((el) => el.id === id).name).toBe("tomato");
  });
  //age method test
  test("age a person should make him/her/they/them 1 year older", () => {
    const myList = new FriendsList().add("otto", 20);
    const id = myList.list[0].id;
    myList.age(id);
    expect(myList.list[0].age).toBe(21);
  });
  //verglijk array
  // test("adding 2 persons should return the correct array contents", () => {
  //   const myList = new FriendsList().add("otto", 20).add("gaalo", 30);
  //   const id1 = myList.list[0].id;
  //   const id2 = myList.list[1].id;
  //   //expect(myList.list).toEqual()
  // });
});
