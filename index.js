'use strict';

var callBind = require('es-abstract/helpers/callBind');

var $deref = typeof WeakRef === 'undefined' ? null : callBind(WeakRef.prototype.deref);

module.exports = typeof WeakRef === 'undefined'
	? function isWeakRef(value) { // eslint-disable-line no-unused-vars
		return false;
	}
	: function isWeakRef(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		try {
			$deref(value);
			return true;
		} catch (e) {
			return false;
		}
	};
