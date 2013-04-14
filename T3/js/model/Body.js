/**
 * Created with JetBrains WebStorm.
 * User: mauricio
 * Date: 4/10/13
 * Time: 12:43 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    
    var Body;

    Body = function (config) {
        config = config || {};
    
        T3.model.Mesh.call(this, config);
    
        Body.prototype.init.call(this, config);
    };
    
    T3.inheritFrom(Body, T3.model.Mesh);
    
    // ALTERNATIVE: BLUE
    //Body.prototype.materialOptions = {
    //    ambient: '#ffffff',     // ambient
    //    color: '#016b93',       // diffuse
    //    specular: '#016b93',    // specular
    //    shininess: 0.4 * 128    // shininess
    //};
    
    // ALTERNATIVE: SILVER
    //Body.prototype.materialOptions = {
    //    ambient: '#313131',     // ambient
    //    color: '#818181',       // diffuse
    //    specular: '#818181',    // specular
    //    shininess: 0.4 * 128    // shininess
    //};
    
    //ALTERNATIVE: METALLIC SILVER
    Body.prototype.materialOptions = {
        ambient: '#ffffff',     // ambient
        color: '#464646',       // diffuse
        specular: '#f0f0f0',    // specular
        shininess: 51,          // shininess
        wireframe: false
    };
    
    /**
     * Init this object
     * @param {Object} config
     * @chainable
     */
    Body.prototype.init = function (config) {
        return this;
    };
    
    T3.model.Body = Body;
})();