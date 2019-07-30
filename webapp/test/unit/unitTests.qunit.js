/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mySalesApplication/mySalesApplication/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});