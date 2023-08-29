// const mongoose = require("mongoose");

// const Scheme = mongoose.Schema;

// const userSchema = new Scheme({
//   email: String,
//   password: String,
// });

// module.exports = mongoose.model("user", userSchema, "users");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
