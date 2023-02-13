import { nanoid } from "nanoid";
import axios from "axios";
class FriendsList {
  constructor() {
    this.list = [];
  }
  add(name, age) {
    this.list.push({
      id: nanoid(),
      name,
      age,
    });
    return this;
  }
  changeName(id, newName) {
    this.list.find((personObj) => personObj.id === id).name = newName;
    return this;
  }
  remove(id) {
    this.list = this.list.filter((el) => el.id !== id);
    return this;
  }
  age(id) {
    this.list.find((el) => el.id === id).age++;
  }
  async makeRandomStarWarsFriend() {
    //https://swapi.dev/api/people/30
    const randomId = Math.ceil(Math.random() * 83);
    const { data: starWarsPersonObj } = await axios(
      `https://swapi.dev/api/people/${randomid}`
    );
    this.add(starWarsPersonObj.name, 10);
    return this;
  }
}
async function main() {}
main();
await makeRandomStarWarsFriend;
export default FriendsList;
