import express from 'express';

import ExamplesController from './controllers/ExamplesController';

export default () => {
  const router = express.Router();


  router.route("/").get((req, res) => {
    return res.json({ message: "It's alive!" })
  });


  router.route("/examples/:exampleId").get((req, res) => {
    return ExamplesController.getExampleById(req.params.exampleId, res)
  });

  router.route("/examples").get((req, res) => {
    ExamplesController.getExamples(res)
  });


  return router;
}
