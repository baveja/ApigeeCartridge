/*jshint expr: true*/

var expect = require('chai').expect;
var common = requireUncached(__dirname + '/../../../../../scripts/unitTesting/js/common.js');

var aemwebMockId = "aem.default.environmentStatus.aemWeb";
var aemretailMockId = "aem.default.environmentStatus.aemRetail";
var aemcareMockId = "aem.default.environmentStatus.aemCare";
var esMockId = "aem.default.environmentStatus.es";
var freegeoMockId = "aem.default.environmentStatus.geoIp";
var autoSuggestMockId = "aem.default.environmentStatus.autoSuggest";
var bazarVoiceMockId = "aem.default.environmentStatus.bazaarVoice";

var aemwebMock = common.getMock("FULL", aemwebMockId);
var aemretailMock = common.getMock("FULL", aemretailMockId);
var aemcareMock = common.getMock("FULL", aemcareMockId);
var esMock = common.getMock("FULL", esMockId);
var freegeoMock = common.getMock("FULL", freegeoMockId);
var autoSuggestMock = common.getMock("FULL", autoSuggestMockId);
var bazarVoiceMock = common.getMock("FULL", bazarVoiceMockId);

describe(common.getFeatureName(__filename), function() {
  it('positive Scenarios for environment Status', function() {
    common.setContextStub('aemEndpoint_web', "");
    common.setContextStub('aemEndpoint_care', "");
    common.setContextStub('aemEndpoint_retail', "");
    common.setContextStub('rts_es_endpoint_staging', "");
    common.setContextStub('rts_es_index_ref_staging', "qat01-rbl-rts-offer-catalog/_search");
    common.setContextStub('rts_es_read_only_token', "c3ZjX3JibF9xYXQwMV9ybzo4bysyeTYrKTUjSTl0NypmRXZhKVk5cyNNazIqdilSbDVONkpJNkNUKzhxMjVYN3YpKykqbGVMYylOUUM=");
    common.setContextStub('freegeoIP', "");
    common.setContextStub('awayacontext', "NA");
    common.setContextStub('autosuggest', "");
    common.setContextStub('bazaarEndpoint', "");
    common.setContextStub('bazaarPassKey', "8rzubp9jv3sekq3gkkxghk9m");
    common.setContextStub('bazaarApiVersion', "5.4");
    
    var aemweb_callout = common.setHttpHandlerStub(aemwebMock);
    
    var aemretail_callout = common.setHttpHandlerStub(aemretailMock);
    var aemcare_callout = common.setHttpHandlerStub(aemcareMock);
    var es_callout = common.setHttpHandlerStub(esMock);
    var freegeo_callout = common.setHttpHandlerStub(freegeoMock);
    var autoSuggest_callout = common.setHttpHandlerStub(autoSuggestMock);
    var bazarVoice_callout = common.setHttpHandlerStub(bazarVoiceMock);
    
    var errorThrown = common.executeFile(__filename);

    expect(errorThrown).to.equal(false);

    var message_content_value = common.extractSetVariable('message.content');
    
    
  });
  
  it('Negative Scenarios for environment Status', function() {
	    common.setContextStub('aemEndpoint_web', "");
	    common.setContextStub('aemEndpoint_care', "");
	    common.setContextStub('aemEndpoint_retail', "");
	    common.setContextStub('rts_es_endpoint_staging', "");
	    common.setContextStub('rts_es_index_ref_staging', "qat01-rbl-rts-offer-catalog/_search");
	    common.setContextStub('rts_es_read_only_token', "c3ZjX3JibF9xYXQwMV9ybzo4bysyeTYrKTUjSTl0NypmRXZhKVk5cyNNazIqdilSbDVONkpJNkNUKzhxMjVYN3YpKykqbGVMYylOUUM=");
	    common.setContextStub('freegeoIP', "");
	    common.setContextStub('awayacontext', "NA");
	    common.setContextStub('autosuggest', "");
	    common.setContextStub('bazaarEndpoint', "");
	    common.setContextStub('bazaarPassKey', "8rzubp9jv3sekq3gkkxghk9m");
	    common.setContextStub('bazaarApiVersion', "5.4");
	    
	    aemwebMock = common.getMock("FULL", "aem.default.environmentStatus.aemWebError");
	    aemretailMock = common.getMock("FULL", "aem.default.environmentStatus.aemRetailError");
	    aemcareMock = common.getMock("FULL", "aem.default.environmentStatus.aemCareError");
	    esMock = common.getMock("FULL", "aem.default.environmentStatus.esError");
	    freegeoMock = common.getMock("FULL", "aem.default.environmentStatus.geoIpError");
	    autoSuggestMock = common.getMock("FULL", "aem.default.environmentStatus.autoSuggestError");
	    bazarVoiceMock = common.getMock("FULL", "aem.default.environmentStatus.bazaarVoiceError");
	    
	    var aemweb_callout = common.setHttpHandlerStub(aemwebMock);
	    
	    var aemretail_callout = common.setHttpHandlerStub(aemretailMock);
	    var aemcare_callout = common.setHttpHandlerStub(aemcareMock);
	    var es_callout = common.setHttpHandlerStub(esMock);
	    var freegeo_callout = common.setHttpHandlerStub(freegeoMock);
	    var autoSuggest_callout = common.setHttpHandlerStub(autoSuggestMock);
	    var bazarVoice_callout = common.setHttpHandlerStub(bazarVoiceMock);
	    
	    var errorThrown = common.executeFile(__filename);

	    expect(errorThrown).to.equal(false);

	    var message_content_value = common.extractSetVariable('message.content');
	    
	    
	  });
});

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}