const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// Routers
const calendarRouter = require('./routes/Calendar');
app.use("/calendar", calendarRouter);

const databaseRouter = require('./routes/Database')
app.use("/database", databaseRouter)

const notesRouter = require('./routes/Notes');
app.use("/notes", notesRouter);

const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

app.listen(3001, () => {
    console.log(`Server running on port 3001`)
});