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
    root.OrderCloud.ProductAssignment = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductAssignment model module.
   * @module model/ProductAssignment
   * @version v1.0.43-staging-prerelease
   */

  /**
   * Constructs a new <code>ProductAssignment</code>.
   * @alias module:model/ProductAssignment
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProductAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAssignment} obj Optional instance to populate.
   * @return {module:model/ProductAssignment} The populated <code>ProductAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ProductID')) {
        obj['ProductID'] = ApiClient.convertToType(data['ProductID'], 'String');
      }
      if (data.hasOwnProperty('BuyerID')) {
        obj['BuyerID'] = ApiClient.convertToType(data['BuyerID'], 'String');
      }
      if (data.hasOwnProperty('UserID')) {
        obj['UserID'] = ApiClient.convertToType(data['UserID'], 'String');
      }
      if (data.hasOwnProperty('UserGroupID')) {
        obj['UserGroupID'] = ApiClient.convertToType(data['UserGroupID'], 'String');
      }
      if (data.hasOwnProperty('PriceScheduleID')) {
        obj['PriceScheduleID'] = ApiClient.convertToType(data['PriceScheduleID'], 'String');
      }
      if (data.hasOwnProperty('StandardPriceScheduleID')) {
        obj['StandardPriceScheduleID'] = ApiClient.convertToType(data['StandardPriceScheduleID'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ProductID
   */
  exports.prototype['ProductID'] = undefined;
  /**
   * @member {String} BuyerID
   */
  exports.prototype['BuyerID'] = undefined;
  /**
   * @member {String} UserID
   */
  exports.prototype['UserID'] = undefined;
  /**
   * @member {String} UserGroupID
   */
  exports.prototype['UserGroupID'] = undefined;
  /**
   * @member {String} PriceScheduleID
   */
  exports.prototype['PriceScheduleID'] = undefined;
  /**
   * @member {String} StandardPriceScheduleID
   */
  exports.prototype['StandardPriceScheduleID'] = undefined;



  return exports;
}));


