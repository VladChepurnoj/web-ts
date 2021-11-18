import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
const collection = User.buildUserCollection();

collection.fetch();
// import { User } from "./models/User";
// const user = User.buildUser({ id: 1 });
// user.on("change", () => {
//   console.log("user");
// });
// user.fetch();
