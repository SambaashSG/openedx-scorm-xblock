function SCORM_12_API(GetValue, SetValue) {
  this.LMSInitialize = function() {
    console.log("SCORM_12_LMSInitialize");
    return "true";
  };
  this.LMSFinish = function() {
    console.log("SCORM_12_LMSFinish");
    return "true";
  };
  this.LMSCommit = function() {
    console.log("SCORM_12_LMSCommit");
    return "true";
  };
  this.LMSGetLastError = function() {
    console.log("SCORM_12_LMSGetLastError");
    return "0";
  };
  this.LMSGetErrorString = function(errorCode) {
    console.log("SCORM_12_LMSGetErrorString");
    return "Some Error";
  };
  this.LMSGetDiagnostic = function(errorCode) {
    console.log("SCORM_12_LMSGetDiagnostic");
    return "Some Diagnostic";
  };
  this.LMSGetValue = GetValue;
  this.LMSSetValue = SetValue;
}

function SCORM_2004_API(GetValue, SetValue) {
  this.Initialize = function() {
    console.log("SCORM_2004_Initialize");
    return "true";
  };
  this.Terminate = function() {
    console.log("SCORM_2004_Terminate");
    return "true";
  };
  this.Commit = function() {
    console.log("SCORM_2004_Commit");
    return "true";
  };
  this.GetLastError = function() {
    console.log("SCORM_2004_GetLastError");
    return "0";
  };
  this.GetErrorString = function(errorCode) {
    console.log("SCORM_2004_GetErrorString");
    return "Some Error";
  };
  this.GetDiagnostic = function(errorCode) {
    console.log("SCORM_2004_GetDiagnostic");
    return "Some Diagnostic";
  };
  this.GetValue = GetValue;
  this.SetValue = SetValue;
}

function initScorm(scormVersion, getValueFunc, setValueFunc) {
  if (scormVersion == 'SCORM_12') {
      API = new SCORM_12_API(getValueFunc, setValueFunc);
  } else {
      API_1484_11 = new SCORM_2004_API(getValueFunc, setValueFunc);
  }
}
