sap.ui.define([], function () {
	"use strict";

	return {

		status: function (Status) {
			if (Status === "Success") {
				return "sap-icon://accept";
			} else {
				return "sap-icon://message-error";
			}
		}

	};
});