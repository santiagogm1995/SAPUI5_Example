sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox",
	"../model/formatter"
], function (Controller, JSONModel, UIComponent, Fragment, MessageBox, formatter) {
	"use strict";

	var oView;

	return Controller.extend("Santiago.ListEntities.controller.List", {
		formatter: formatter,

		onInit: function () {
			oView = this.getView();

			oView.setModel(new JSONModel({
				Customers: [{
					CIF: "B73571002",
					Name: "Frutas Manolo",
					Status: "Success"
				}, {
					CIF: "E60671930",
					Name: "Sandias Julian",
					Status: "Error"
				}]
			}));
		},

		getUser: function (oEvent) {
			var oButton = oEvent.getSource();
			// create popover
			if (!this._oPopover) {
				Fragment.load({
					id: "popoverPerfilCon",
					name: "Santiago.ListEntities.view.fragments.popUpPerfil",
					controller: this
				}).then(function (oPopover) {
					this._oPopover = oPopover;
					this.getView().addDependent(this._oPopover);
					this._oPopover.openBy(oButton);
				}.bind(this));
			} else {
				this._oPopover.close();
				this._oPopover.destroy();
				this._oPopover = undefined;
			}
		},

		showMenu: function (oEvent) {
			var oButton = oEvent.getSource();
			// create popover
			if (!this._oPopover) {
				Fragment.load({
					id: "popoverPerfilCon",
					name: "Santiago.ListEntities.view.fragments.popUpNav",
					controller: this
				}).then(function (oPopover) {
					this._oPopover = oPopover;
					this.getView().addDependent(this._oPopover);
					this._oPopover.openBy(oButton);
				}.bind(this));
			} else {
				this._oPopover.close();
				this._oPopover.destroy();
				this._oPopover = undefined;
			}
		},

		onPress: function (oEvent) {
			var oRoute = this.getRouter(oView);
			oRoute.navTo("DetailID", {
				CIF: "E60671930"
			}, true);
		},

		Crear: function (oEvent) {
			var oRoute = this.getRouter(oView);
			oRoute.navTo("Detail", {}, true);
		},

		Enviar: function () {
			MessageBox.confirm("¿Está seguro de enviar todos los documentos seleccionados?");
		},
	
		Logout: function(){
			var oRoute = this.getRouter(oView);
			oRoute.navTo("RouteApp", {}, true);
		},

		getRouter: function (oView) {
			return UIComponent.getRouterFor(oView);
		}

	});

});