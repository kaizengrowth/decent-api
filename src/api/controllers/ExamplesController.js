import Example from '../models/Example';

const ExamplesController = {
  getExampleById: (exampleId, res) => {
    Example.query().where({
      "id": exampleId
    }).then(example => {
      return res.json(example);
    });
  },

  getExamples: (res) => {
    Example.query().then(examples => {
      return res.json(examples);
    });
  }
}

module.exports = ExamplesController;
