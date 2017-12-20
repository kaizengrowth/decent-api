import express from 'express';

export default () => {
  const router = express.Router();

  router.route("/").get((req, res) => {
    res.json({ message: "hello, world" });
  });

  return router;
};
