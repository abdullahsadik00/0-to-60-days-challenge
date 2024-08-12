const { mongoose } = require('mongoose');

// Connect to MongoDB
mongoose.connect(
  'mongodb+srv://sadik:Sadik%403012@cluster0.7v7sara.mongodb.net/course_selling_app'
);

const todosSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model('Todo', todosSchema);

module.exports = {
  Todos,
};
