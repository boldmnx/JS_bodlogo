const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // public хавтаснаас файл үйлчилнэ

app.get("/api/hello", (req, res) => {
  res.send("Hello from backend!!!");

  //   res.send(`
  // <!DOCTYPE html>
  // <html>

  // <head>
  //   <title>Express Example</title>
  // </head>

  // <body>
  //   <h1>Hello</h1>
  //   <script>
  //     console.log('its express');
  //   </script>
  // </body>

  // </html>
  // `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});