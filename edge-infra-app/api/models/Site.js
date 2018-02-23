/**
 * Site.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'site',
  timestamps: false,
  
  attributes: {
   

locationID:{
  type: 'integer',
  autoIncrement: true,
  primaryKey: true
},
locationType:{
  type: 'string',
      required: true,
      size:20
},
clli:{
  type: 'string',
  required: true,
  size: 20
},
Region:{
  type: 'string',
      required: true,
      size: 20
},
siteIAliasEqpmt:{
  type: 'string',
  required: true,
  size: 20
},
state:{
  type: 'string',
  required: true,
  size: 20
},
StreetAddress:{
  type: 'string',
required: true,
size: 20
},
siteIAliasNetwork:{
  type: 'string',
  required: true,
  size: 20
},
ZipCode:{
  type: 'string',
  required: true,
  size: 20
},
Country:{
  type: 'string',
  required: true,
  size: 20
},
City:{
  type: 'string',
  required: true,
  size: 20
},
telephone:{
  type: 'integer',
  required: true,
  size: 11
},
SiteContact:{
  type: 'string',
  required: true,
  size: 20
},
type:{
  type: 'string',
  required: true,
  size: 20
},
Comment:{
  type: 'string',
  required: true,
  size: 20
},
LastUpdate:{
  type: 'string',
  required: true,
  size: 20
},
RowNum:{
  type: 'integer',
  required: true,
  size: 11
}

  }
};

