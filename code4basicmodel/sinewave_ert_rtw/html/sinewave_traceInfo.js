function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "sinewave"};
	this.sidHashMap["sinewave"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "sinewave:15"};
	this.sidHashMap["sinewave:15"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Signal Generator"] = {sid: "sinewave:14"};
	this.sidHashMap["sinewave:14"] = {rtwname: "<Root>/Signal Generator"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
