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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SpendingAccountAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SpendingAccountAssignment model module.
   * @module model/SpendingAccountAssignment
   * @version 1.0.50
   */

  /**
   * Constructs a new <code>SpendingAccountAssignment</code>.
   * @alias module:model/SpendingAccountAssignment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SpendingAccountAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpendingAccountAssignment} obj Optional instance to populate.
   * @return {module:model/SpendingAccountAssignment} The populated <code>SpendingAccountAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SpendingAccountID')) {
        obj['SpendingAccountID'] = ApiClient.convertToType(data['SpendingAccountID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('AllowExceed')) {
        obj['AllowExceed'] = ApiClient.convertToType(data['AllowExceed'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} SpendingAccountID
   */
  exports.prototype['SpendingAccountID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {Boolean} AllowExceed
   */
  exports.prototype['AllowExceed'] = undefined;



  return exports;
}));


