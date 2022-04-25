
var devConfig = require("C:\\Users\\user\\Documents\\Unicorn\\tga_uuappdev_repo466-4967-1\\final_workshop\\uuTravelAgency\\uu_travel_agency-hi\\env\\development.json").uu5Environment;
var config = require("C:\\Users\\user\\Documents\\Unicorn\\tga_uuappdev_repo466-4967-1\\final_workshop\\uuTravelAgency\\uu_travel_agency-hi\\env\\production.json").uu5Environment || {};
if (devConfig) for (var k in devConfig) config[k] = devConfig[k];
window.UU5 = { Environment: config };
