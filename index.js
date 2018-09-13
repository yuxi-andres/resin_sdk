var token = 'MyToken';
var appId = 1251071; // Yuxi-Lab
var deviceId = 1287096; // Yuxi-Lab
var serviceId = 123;
var varName = 'ALLOWED_URL';

var resin = require('resin-sdk')({
  apiUrl: "https://api.resin.io/",
  dataDirectory: "data"
})

console.error("Starting Resin");
resin.auth.loginWithToken(token);

// APPLICATION LEVEL
resin.models.application.getAll(function(error, applications) {
  if (error) throw error;
  console.log("All Applications");
  console.log(applications);
});

resin.models.application.get(appId, function(error, application) {
  if (error) throw error;
  console.log("Application: " + appId);
  console.log(application);
});

resin.models.application.getWithDeviceServiceDetails(appId, function(error, device) {
  if (error) throw error;
  console.log("Application: " + appId + " with Devices");
  console.log(device);
});

resin.models.application.restart('MyApp', function(error) {
  if (error) throw error;
  console.log("Restarting Application: " + appId);
});

resin.models.application.shutdown('MyApp', function(error) {
  if (error) throw error;
  console.log("Shuting Down Application: " + appId);
});

resin.models.application.reboot('MyApp', function(error) {
  if (error) throw error;
  console.log("Rebooting Application: " + appId);
});

// APPLICATION TAGS LEVEL
resin.models.application.tags.getAll(function(error, tags) {
  if (error) throw error;
  console.log("All Tags Application Level");
  console.log(tags);
});

resin.models.application.tags.getAllByApplication(appId, function(error, tags) {
  if (error) throw error;
  console.log("Tags for Application: " + appId);
  console.log(tags);
});

// DEVICE TAGS LEVEL
resin.models.device.tags.getAllByApplication(appId, function(error, tags) {
  if (error) throw error;
  console.log("Tags for Application: " + appId);
  console.log(tags);
});

resin.models.device.tags.getAllByDevice(deviceId, function(error, tags) {
  if (error) throw error;
  console.log("Tags for Device: " + deviceId);
  console.log(tags);
});

resin.models.device.tags.getAll(function(error, tags) {
  if (error) throw error;
  console.log("All Tags Device Level");
  console.log(tags);
});

// APPLICATION CONFIG VAR LEVEL
resin.models.application.configVar.getAllByApplication(appId, function(error, vars) {
  if (error) throw error;
  console.log("Config variables for Application: " + appId);
  console.log(vars);
});

resin.models.application.configVar.get(appId, varName, function(error, value) {
  if (error) throw error;
  console.log("Config variable in Application: " + appId);
  console.log(varName + ": " + value);
});

// DEVICE CONFIG VAR LEVEL
resin.models.device.configVar.getAllByApplication(appId, function(error, vars) {
  if (error) throw error;
  console.log("Config variables for Application: " + appId);
  console.log(vars);
});

resin.models.device.configVar.getAllByDevice(deviceId, function(error, vars) {
  if (error) throw error;
  console.log("Config variables for Device: " + deviceId);
  console.log(vars);
});

resin.models.device.configVar.get(deviceId, varName, function(error, value) {
  if (error) throw error;
  console.log("Config variable in Device: " + deviceId);
  console.log(varName + ": " + value);
});

// APPLICATION ENV VAR LEVEL
resin.models.application.envVar.getAllByApplication(appId, function(error, vars) {
  if (error) throw error;
  console.log("Environment variables for Application: " + appId);
  console.log(vars);
});

resin.models.application.envVar.get(appId, varName, function(error, value) {
  if (error) throw error;
  console.log("Environment variable in Application: " + appId);
  console.log(varName + ": " + value);
});

// DEVICE ENV VAR LEVEL
resin.models.device.envVar.getAllByApplication(appId, function(error, vars) {
  if (error) throw error;
  console.log("Environment variables for Application: " + appId);
  console.log(vars);
});

resin.models.device.envVar.getAllByDevice(deviceId, function(error, vars) {
  if (error) throw error;
  console.log("Environment variables for Device: " + deviceId);
  console.log(vars);
});

resin.models.device.envVar.get(deviceId, varName, function(error, value) {
  if (error) throw error;
  console.log("Environment variable in Device: " + deviceId);
  console.log(varName + ": " + value);
});

// DEVICE SERVICE VAR LEVEL
resin.models.device.serviceVar.getAllByApplication(appId, function(error, vars) {
  if (error) throw error;
  console.log("Service variables for Application: " + appId);
  console.log(vars);
});

resin.models.device.serviceVar.getAllByDevice(deviceId, function(error, vars) {
  if (error) throw error;
  console.log("Service variables for Device: " + deviceId);
  console.log(vars);
});

resin.models.device.serviceVar.get(deviceId, serviceId, varName, function(error, value) {
  if (error) throw error;
  console.log("Service variable in Device: " + deviceId + " and Service: " + serviceId);
  console.log(varName + ": " + value);
});

// DEVICE LEVEL
resin.models.device.getAll(function(error, devices) {
  if (error) throw error;
  console.log("All devices");
  console.log(devices);
});

resin.models.device.getAllByApplication(appId, function(error, devices) {
  if (error) throw error;
  console.log("All devices for Application: " + appId);
  console.log(devices);
});

resin.models.device.get(deviceId, function(error, device) {
  if (error) throw error;
  console.log("Device info: " + deviceId);
  console.log(device);
});

resin.models.device.getWithServiceDetails(deviceId, function(error, device) {
  if (error) throw error;
  console.log("Services in Device: " + deviceId);
  console.log(device);
});

resin.models.device.isOnline(deviceId, function(error, isOnline) {
  if (error) throw error;
  console.log("Is device " + deviceId + "online? ", isOnline);
});

resin.models.device.restartApplication(deviceId, function(error) {
  if (error) throw error;
  console.log("Restarting Device: " + deviceId);
});

resin.models.device.startService(deviceId, serviceId, function(error) {
  if (error) throw error;
  console.log("Starting Service: " + serviceId + " in Device: " + deviceId);
});

resin.models.device.stopService(deviceId, serviceId, function(error) {
  if (error) throw error;
  console.log("Stoping Service: " + serviceId + " in Device: " + deviceId);
});

resin.models.device.restartService(deviceId, serviceId, function(error) {
  if (error) throw error;
  console.log("Restarting Service: " + serviceId + " in Device: " + deviceId);
});

resin.models.device.reboot(deviceId, function(error) {
  if (error) throw error;
  console.log("Rebooting Device: " + deviceId);
});

resin.models.device.shutdown(deviceId, function(error) {
  if (error) throw error;
  console.log("Shuting Down Device: " + deviceId);
});

resin.models.device.update(deviceId, {
  force: true
}, function(error) {
  if (error) throw error;
  console.log("Force Update in Device: " + deviceId);
});

resin.models.device.getManifestByApplication(appId, function(error, manifest) {
  if (error) throw error;
  console.log("Manifest for Application: " + appId);
  console.log(manifest);
});

resin.models.device.getDeviceUrl(deviceId, function(error, url) {
  if (error) throw error;
  console.log("Public URL for Device: " + deviceId);
  console.log(url);
});

resin.models.device.ping(deviceId, function(error) {
  if (error) throw error;
  console.log("Successful Ping Device: " + deviceId);
});

// FIX ME: This method receive a device object instead of a deviceId
resin.models.device.getStatus(deviceId, function(error, status) {
  if (error) throw error;
  console.log("Get Status for Device: " + deviceId);
  console.log(status);
});
