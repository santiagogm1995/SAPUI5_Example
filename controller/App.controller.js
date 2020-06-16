sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast"
], function (Controller, UIComponent, MessageToast) {
	"use strict";
	var oView;

	return Controller.extend("Santiago.ListEntities.controller.App", {
		onInit: function () {
			oView = this.getView();
		},

		Login: function () {
			var oRoute = this.getRouter(oView);

			if (oView.byId("InputUsername").getValue() == "user01" && oView.byId("InputPassword").getValue() == "user01") {
				oRoute.navTo("List", {}, true);
			} else {
				oView.byId("InputUsername").setValueState(sap.ui.core.ValueState.Error);
				oView.byId("InputPassword").setValueState(sap.ui.core.ValueState.Error);
				var msg = 'Credenciales incorrectas';
				MessageToast.show(msg);
			}

		},

		getRouter: function (oView) {
			return UIComponent.getRouterFor(oView);
		}
	});
});