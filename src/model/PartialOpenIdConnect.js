/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Sdk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PartialOpenIdConnect = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The PartialOpenIdConnect model module.
   * @module model/PartialOpenIdConnect
   */

  /**
   * Constructs a new <code>PartialOpenIdConnect</code>.
   * @alias module:model/PartialOpenIdConnect
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PartialOpenIdConnect</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialOpenIdConnect} obj Optional instance to populate.
   * @return {module:model/PartialOpenIdConnect} The populated <code>PartialOpenIdConnect</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = Sdk.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('StateHashKey')) {
        obj['StateHashKey'] = Sdk.convertToType(data['StateHashKey'], 'String');
      }
      if (data.hasOwnProperty('OrderCloudApiClientID')) {
        obj['OrderCloudApiClientID'] = Sdk.convertToType(data['OrderCloudApiClientID'], 'String');
      }
      if (data.hasOwnProperty('ConnectClientID')) {
        obj['ConnectClientID'] = Sdk.convertToType(data['ConnectClientID'], 'String');
      }
      if (data.hasOwnProperty('ConnectClientSecret')) {
        obj['ConnectClientSecret'] = Sdk.convertToType(data['ConnectClientSecret'], 'String');
      }
      if (data.hasOwnProperty('AppStartUrl')) {
        obj['AppStartUrl'] = Sdk.convertToType(data['AppStartUrl'], 'String');
      }
      if (data.hasOwnProperty('AuthorizationEndpoint')) {
        obj['AuthorizationEndpoint'] = Sdk.convertToType(data['AuthorizationEndpoint'], 'String');
      }
      if (data.hasOwnProperty('TokenEndpoint')) {
        obj['TokenEndpoint'] = Sdk.convertToType(data['TokenEndpoint'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} StateHashKey
   */
  exports.prototype['StateHashKey'] = undefined;
  /**
   * @member {String} OrderCloudApiClientID
   */
  exports.prototype['OrderCloudApiClientID'] = undefined;
  /**
   * @member {String} ConnectClientID
   */
  exports.prototype['ConnectClientID'] = undefined;
  /**
   * @member {String} ConnectClientSecret
   */
  exports.prototype['ConnectClientSecret'] = undefined;
  /**
   * @member {String} AppStartUrl
   */
  exports.prototype['AppStartUrl'] = undefined;
  /**
   * @member {String} AuthorizationEndpoint
   */
  exports.prototype['AuthorizationEndpoint'] = undefined;
  /**
   * @member {String} TokenEndpoint
   */
  exports.prototype['TokenEndpoint'] = undefined;



  return exports;
}));


