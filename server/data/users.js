import bcrypt from "bcryptjs";

const users = [
  {
    name: "Prafful Agrawal",
    email: "prafful026@gmail.com",
    password: "1234",
    role: "root",
  },
  {
    name: "Prafful Agrawal",
    email: "bcs_2019039@iiitm.ac.in",
    password: "1234",
    role: "student",
    rollNumber:"2019bcs-039"
  },
  {
    name: "Adarsh Tiwari",
    email: "imt_2019110@iiitm.ac.in",
    password: "1234",
    role: "student",
    rollNumber:"2019imt-110"
  },
  {
    name: "Harshit Dave",
    email: "imt_2019036@iiitm.ac.in",
    password: "1234",
    role: "student",
    rollNumber:"2019imt-036"
  },
  {
    name: "Jalaj Varshney",
    email: "jv@gm.com",
    password: "1234",
    role: "alumni",
    currentCompany:"Amazon",
    jobRole:"Software Developer",
    yearOfPassing:"2020"
  },
  {
    name: "Hardik Khandelwal",
    email: "hk@gm.com",
    password: "1234",
    role: "alumni",
    currentCompany:"Amazon",
    jobRole:"Software Developer",
    yearOfPassing:"2020"
  },
  {
    name: "Prajwal Singh",
    email: "ps@gm.com",
    password: "1234",
    role: "alumni",
    currentCompany:"Gojek",
    jobRole:"Software Developer",
    yearOfPassing:"2021"
  },
  {
    name: "Dr.Pinku Ranjan",
    email: "pr@gm.com",
    password: "1234",
    role: "faculty",
    designation:"Assistant Professor",
    honour:"Ph.D. (Indian Institute of Technology IIT (ISM), Dhanbad)",
    department:"Electrical / Electronics"
  },
  {
    email:"gk@gm.com",
    password:"1234",
    name:"Dr.Gaurav Kaushal",
    role:"faculty",
    designation:"Assistant Professor",
    honour:"PhD (IIT, Roorkee)",
  },
  {
    email:"pg@gm.com",
    password:"1234",
    name:"Pankaj Gupta",
    role:"admin",
    designation:"Registrar",
  }
];
export default users;
