const express = require('express');

const handle = requier('./handlers')

const app = express();
 
const port = 4000;


app.get('/', (req, res) => res.json({ hello: "World"}));

app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`Server started on port ${port}`));


