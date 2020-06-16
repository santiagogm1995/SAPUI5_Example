sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageBox"
], function (Controller, History, MessageBox) {
	"use strict";

	return Controller.extend("Santiago.ListEntities.controller.Detail", {

		onInit: function () {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.getRoute("Detail").attachMatched(this.onRouteMatchedDetail, this);
			oRouter.getRoute("DetailID").attachMatched(this.onRouteMatchedDetail, this);
		},

		onRouteMatchedDetail: function (oEvent) {
			var oArgs = oEvent.getParameter("arguments");
			var CIF = oArgs.CIF;

			if (!CIF) {
				MessageBox.information(
					"1. El Cuestionario se refiere a una cobertura de responsabilidad civil en base a reclamaciones.El Contrato de Seguro ampara las Reclamaciones que se formulen por primera vez contra el Asegurado durante el periodo de vigencia del seguro de acuerdo a los términos y condiciones que se establezcan y acuerden entre las partes" +
					"\n\n2. El Cuestionario deberá ser rellenado, firmado y fechado por una persona que esté legalmente capacitada y autorizada para suscribir la solicitud de seguro de responsabilidad civil en representación de la empresa que actúa como solicitante" +
					"\n\n3. Tal y como se indica en el Art.10 de la Ley 50 / 80 de Contrato de Seguro, es deber del solicitante aportar toda la información que en el cuestionario se indica así como dar a conocer cualquier hecho relevante" +
					"\n\n4. Un hecho relevante es aquel hecho y / o circunstancia conocido que pueda influir en la valoración del riesgo por parte del asegurador. Si le queda duda de qué constituye un hecho relevante que deba ser comunicado al asegurador, por favor no dude en consultar a su corredor de seguros o al asegurador" +
					"\n\n5. Este Cuestionario no obliga a la formalización del seguro pero formará parte de cualquier contrato de Seguro que pueda emitirse como consecuencia" +
					"\n\n6. Es imprescindible contestar a todas las preguntas contenidas en este cuestionario."
				);
			}else{
				
			}

		},

		goBack: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("List", true);
		}

	});

});