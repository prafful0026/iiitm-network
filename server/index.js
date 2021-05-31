import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/frontend/build")));
//     app.get("*",(req,res)=>res.sendFile(path.resolve(__dirname,'frontend','build','index.html')));
//   } else {
//     app.get("/", (req, res) => {
//       res.send("yo");
//     });
//   }
app.get("/",(req,res)=>{
    res.send("yo");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server on ${process.env.NODE_ENV} on ${PORT}`));