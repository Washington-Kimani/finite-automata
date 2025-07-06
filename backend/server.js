const path = require('path');
const express = require("express");
const cors = require("cors");
const register = require("./routes/register");
const login = require("./routes/login");
const users = require("./routes/users");
const modules = require("./routes/modules");
const enrollToModule = require("./routes/enrollTomodule");
const instructors = require("./routes/instructors");
const stats = require("./routes/stats");
const enrolledAll = require("./routes/enrolled.route");
const viewroute = require("./routes/viewModule");
const allQuestionsData = require("./routes/questions.route");
const checkGrammar = require("./routes/checkGrammar.route");
const markComplete = require("./routes/markModuleComplete.route");
const postResults = require("./routes/postResults.route");
const getResults = require("./routes/results.route");
const generateGrammar = require("./routes/generateGrammar.route");
const playGround =require('./routes/playground.route')
const generatedWords = require("./routes/generateWordsFromGrammar.route");
const { connectDb } = require("./configs/db");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const __dirname = path.resolve();

/*MIDDLEWARES*/
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend", "dist")));


/*ALL ROUTES*/
app.use("/register", register);
app.use("/login", login);
app.use("/users", users);
app.use("/modules", modules);
app.use("/enroll", enrollToModule);
app.use("/enrolled", enrolledAll);
app.use("/instructors", instructors);
app.use("/stats", stats);
app.use("/module", viewroute);
app.use("/exercises", allQuestionsData);
app.use("/complete", markComplete);
app.use("/postResults", postResults);
app.use("/results", getResults);
app.use("/generate", generateGrammar);
app.use("/check", checkGrammar);
app.use("/generateWords", generatedWords);
app.use("/playground", playGround);

// main route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// connect to database
connectDb();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
