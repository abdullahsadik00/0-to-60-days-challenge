const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(
<<<<<<< HEAD
  'mongodb+srv://sadik:Sadik%403012@cluster0.7v7sara.mongodb.net/course_selling_app'
);


=======
  'mongodb+srv://sadik:Sadik@3012@cluster0.7v7sara.mongodb.net/course_selling_app'
);

>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
<<<<<<< HEAD
  password: String
=======
  password: String,
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
<<<<<<< HEAD
  purchasedCourses: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course'
  }]
=======
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
<<<<<<< HEAD
  imageLink: String,
  price: Number
=======
  price: Number,
  imageLink: String,
  published: Boolean,
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
  Admin,
  User,
<<<<<<< HEAD
  Course
}
=======
  Course,
};
>>>>>>> 1931795ddae93232f7284b8b07ffb2e35fb6e14c
