import { Model } from 'objection';

export default class Example extends Model {
  static get tableName() {
    return "Examples";
  }

  message() {
    return this.message;
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["message"],
      properties: {
        id: { type: "integer" },
        message: { type: "string", maxLength: 255 }
      }
    }
  };
}
