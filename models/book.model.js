const { default: mongoose } = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the book name"],
    },
    Auther: {
      type: String,
      required: [true, "Please enter the authers name"],
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
