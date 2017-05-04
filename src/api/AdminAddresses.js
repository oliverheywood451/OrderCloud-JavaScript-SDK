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
    define(['ApiClient', 'model/Address', 'model/ListAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Address'), require('../model/ListAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.AdminAddresses = factory(root.OrderCloud.ApiClient, root.OrderCloud.Address, root.OrderCloud.ListAddress);
  }
}(this, function(ApiClient, Address, ListAddress) {
  'use strict';

  /**
   * AdminAddress service.
   * @module api/AdminAddresses
   * @version 1.0.50
   */

  /**
   * Constructs a new AdminAddresses. 
   * @alias module:api/AdminAddresses
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Create = function(address) {
      var postBody = address;

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(addressID) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Delete");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Get = function(addressID) {
      var postBody = null;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Get");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search of the admin address.
     * @param {Array.<String>} opts.searchOn Search on of the admin address.
     * @param {Array.<String>} opts.sortBy Sort by of the admin address.
     * @param {Number} opts.page Page of the admin address.
     * @param {Number} opts.pageSize Page size of the admin address.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the admin address.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAddress}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': this.apiClient.buildCollectionParam(opts['searchOn'], 'csv'),
        'sortBy': this.apiClient.buildCollectionParam(opts['sortBy'], 'csv'),
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListAddress;

      return this.apiClient.callApi(
        '/addresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Patch = function(addressID, address) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Patch");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Patch");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} addressID ID of the address.
     * @param {module:model/Address} address 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Address}
     */
    this.Update = function(addressID, address) {
      var postBody = address;

      // verify the required parameter 'addressID' is set
      if (addressID == undefined || addressID == null) {
        throw new Error("Missing the required parameter 'addressID' when calling Update");
      }

      // verify the required parameter 'address' is set
      if (address == undefined || address == null) {
        throw new Error("Missing the required parameter 'address' when calling Update");
      }


      var pathParams = {
        'addressID': addressID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Address;

      return this.apiClient.callApi(
        '/addresses/{addressID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
