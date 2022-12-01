import HelloController
    from "./controllers/hello-controller.js"
import express from 'express';
import cors from 'cors'
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

    const CONNECTION_STRING = "mongodb+srv://changyi:YG6G0V054GJNVlLg@cluster0.928mvae.mongodb.net/tuiter?retryWrites=true&w=majority"
                            || process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json())
TuitsController(app)
UserController(app)
HelloController(app)
app.listen(process.env.PORT || 4000);



