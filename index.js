const express = require("express");
const livereload = require("livereload");
// const rootRoutes = require("./router.js");
// const accountRoutes = require("./account.js");
const path = require("path");
const app = express();
const port = 3000;

if (app.get("env") === "development") {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "public"));

  app.use(require("connect-livereload")());

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
}

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const router = express.Router();
// router.use("/", rootRoutes);
// router.use("/account", accountRoutes);

// module.exports = router;
