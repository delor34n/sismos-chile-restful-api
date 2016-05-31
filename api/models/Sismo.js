/**
 * Sismo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	epicentro: {
  		type: 'string'
  	},
  	magnitud: {
  		type: 'float'
  	},
  	profundidad: {
  		type: 'float'
  	},
  	hora_epicentro: {
  		type: 'datetime',
  		defaultsTo: Date.now
  	}
  }
};