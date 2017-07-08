 /*
  Check Environment status Script
  */
 var environmentStatus = {};
 var headers = {
     "content-type": 'application/json',
     "accept": 'application/json'
 }

 var aemEndpointWeb = context.getVariable('aemEndpoint_web');
 var aemEndpointRetail = context.getVariable('aemEndpoint_care');
 var aemEndpointCare = context.getVariable('aemEndpoint_retail');

 var esPath = context.getVariable('rts_es_endpoint_staging');
 var esIndex = context.getVariable('rts_es_index_ref_staging');

 var esCred = context.getVariable('rts_es_read_only_token');

 var freegeoIP = context.getVariable('freegeoIP');

 var awayaEndpoint = context.getVariable('awayacontext');

 var autoSuggestEndpoint = context.getVariable('autosuggest');

 var bazarVoiceEndpoint = context.getVariable('bazaarEndpoint');
 var bazarPassKey = context.getVariable('bazaarPassKey');
 var bazarVersion = context.getVariable('bazaarApiVersion');

 var aemUrlweb = aemEndpointWeb + '/content/t-mobile/en/prepaid/homePage.content.json';
 
 var aemUrlretail = aemEndpointRetail + '/content/t-mobile/en/prepaid/homePage.content.json';
 var aemUrlcare = aemEndpointCare + '/content/t-mobile/en/prepaid/homePage.content.json';

 var req = httpHandler.call("GET", aemUrlweb, headers);
 var res = httpHandler.getResponse(req);

 var responseStatus = res.status.code;

 if (responseStatus == 200) {
     environmentStatus.aemWeb = "success";
 } else {
     environmentStatus.aemWeb = "false";
 }
 var reqRetail = httpHandler.call("GET", aemUrlretail, headers);
 var resRetail = httpHandler.getResponse(reqRetail);

 var responseStatusRetail = resRetail.status.code;

 if (responseStatusRetail == 200) {
     environmentStatus.aemRetail = "success";
 } else {
     environmentStatus.aemRetail = "false";
 }
 var reqCare = httpHandler.call("GET", aemUrlcare, headers);
 var resCare = httpHandler.getResponse(reqCare);

 var responseStatusCare = resCare.status.code;

 if (responseStatusCare == 200) {
     environmentStatus.aemCare = "success";
 } else {
     environmentStatus.aemCare = "false";
 }
 
 var esUrl = esPath +'/'+ esIndex;
 headers.Authorization = 'Basic ' + esCred;

 var reqEs = httpHandler.call("GET", esUrl, headers);
 var resEs = httpHandler.getResponse(reqEs);
 
 var responseStatusEs = resEs.status.code;

 if (responseStatusEs == 200) {
     environmentStatus.elasticSearchStagging = "success";
 } else {
     environmentStatus.elasticSearchStagging = "false";
 }
 
 var freegeoUrl = freegeoIP + '/json/8.8.8.8';
 delete headers.Authorization;
 
 var reqGeo = httpHandler.call("GET", freegeoUrl, headers);
 var resGeo = httpHandler.getResponse(reqGeo);
 var responseStatusGeo = resGeo.status.code;
 if (responseStatusGeo == 200) {
     environmentStatus.freegeoIP = "success";
 } else {
     environmentStatus.freegeoIP = "false";
 }
 
 var autoSuggestUrl = autoSuggestEndpoint + '/autocomplete/sp10/05/0d/43-stage?query=12';
 
 var reqAuto = httpHandler.call("GET", autoSuggestUrl, headers);
 var resAuto = httpHandler.getResponse(reqAuto);
 var responseStatusAuto = resAuto.status.code;
 if (responseStatusAuto == 200) {
     environmentStatus.autoSuggest = "success";
 } else {
     environmentStatus.autoSuggest = "false";
 }
 
 var bazarVoiceUrl = bazarVoiceEndpoint + '/data/bazzarvoiceType?passkey='+bazarPassKey+'&apiversion='+bazarVersion;
 
 var reqBazar = httpHandler.call("GET", bazarVoiceUrl, headers);
 var resBazar = httpHandler.getResponse(reqBazar);
 var responseStatusBazar = resBazar.status.code;
 if (responseStatusBazar == 200) {
     environmentStatus.bazaarVoice = "success";
 } else {
     environmentStatus.bazaarVoice = "false";
 }

 context.setVariable('message.content', JSON.stringify(environmentStatus));