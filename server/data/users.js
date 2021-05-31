import bcrypt from "bcryptjs";

const users = [
  {
    name: "prafful",
    email: "prafful026@gmail.com",
    password: bcrypt.hashSync("1234", 10),
    role: "root",
  },
  {
    name: "prafful agrawal",
    email: "bcs_2019039@iiitm.ac.in",
    password: bcrypt.hashSync("1234", 10),
    role: "student",
  },
  {
    name: "adarsh tiwari",
    email: "imt_2019110@iiitm.ac.in",
    password: bcrypt.hashSync("1234", 10),
    role: "student",
  },
  {
    name: "jalaj varshney",
    email: "jv@gm.com",
    password: bcrypt.hashSync("1234", 10),
    role: "alumni",
  },
  {
    name: "hardik khandelwal",
    email: "hk@gm.com",
    password: bcrypt.hashSync("1234", 10),
    role: "alumni",
  },

  {
    name: "gaurav kaushal",
    email: "gk@iiitm.ac.in",
    password: bcrypt.hashSync("1234", 10),
    role: "faculty",
  },
  {
    name: "joydip dhar",
    email: "jd@iiitm.ac.in",
    password: bcrypt.hashSync("1234", 10),
    role: "faculty",
  },
];
export default users;
