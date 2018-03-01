const geoRoutes = require('./geo_routes');

module.exports = function(app, data) {
    geoRoutes(app, data);
    // Other route groups could go here, in the future
};