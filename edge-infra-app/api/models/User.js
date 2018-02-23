/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // Name table in database
  tableName: 'users',

  // attributes: types, validations ans defaults values
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: 'string',
      required: true,
      size: 45
    },
    lastName: {
      type: 'string',
      required: true,
      size: 45
    },
    email: {
      type: 'email',
      unique: true,
      required: true,
      size: 100
    },
    phone: {
      type: 'string',
      required: true
    },
    address: {
      type: 'string',
      required: true,
      size: 30
    },
    createdData: {
      type: 'datetime'
    },
    updateDate: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    }
  },
  // before execute function createsss
  beforeCreate: function (values, cb) {
    values.createdData = new Date();
    cb();
  }
};

