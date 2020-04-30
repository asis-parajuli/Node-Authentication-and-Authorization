const bcrypt = require("bcrypt");

async function run() {
  // here 10 defines the number of round we want the salt to operate, more round takes more time and makes password more complex to break
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash("abcd", salt);
  console.log(salt);
  console.log(hashed);
}

run();
