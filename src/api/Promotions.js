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
    define(['ApiClient', 'model/ListPromotion', 'model/ListPromotionAssignment', 'model/Promotion', 'model/PromotionAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListPromotion'), require('../model/ListPromotionAssignment'), require('../model/Promotion'), require('../model/PromotionAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Promotions = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListPromotion, root.OrderCloud.ListPromotionAssignment, root.OrderCloud.Promotion, root.OrderCloud.PromotionAssignment);
  }
}(this, function(ApiClient, ListPromotion, ListPromotionAssignment, Promotion, PromotionAssignment) {
  'use strict';

  /**
   * Promotion service.
   * @module api/Promotions
   * @version 2.0.0
   */

  /**
   * Constructs a new Promotions. 
   * @alias module:api/Promotions
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Promotion} promotion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Create = function(promotion) {
      var postBody = promotion;

      // verify the required parameter 'promotion' is set
      if (promotion == undefined || promotion == null) {
        throw new Error("Missing the required parameter 'promotion' when calling Create");
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(promotionID) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Delete");
      }


      var pathParams = {
        'promotionID': promotionID
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
        '/promotions/{promotionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(promotionID, buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'promotionID': promotionID
      };
      var queryParams = {
        'buyerID': buyerID,
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
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
        '/promotions/{promotionID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Get = function(promotionID) {
      var postBody = null;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Get");
      }


      var pathParams = {
        'promotionID': promotionID
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPromotion}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
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
      var returnType = ListPromotion;

      return this.apiClient.callApi(
        '/promotions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.promotionID ID of the promotion.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the promotion assignment. Possible values: User, Group, Company.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListPromotionAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'promotionID': opts['promotionID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListPromotionAssignment;

      return this.apiClient.callApi(
        '/promotions/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:model/Promotion} partialPromotion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Patch = function(promotionID, partialPromotion) {
      var postBody = partialPromotion;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Patch");
      }

      // verify the required parameter 'partialPromotion' is set
      if (partialPromotion == undefined || partialPromotion == null) {
        throw new Error("Missing the required parameter 'partialPromotion' when calling Patch");
      }


      var pathParams = {
        'promotionID': promotionID
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} promotionID ID of the promotion.
     * @param {module:model/Promotion} promotion 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Promotion}
     */
    this.Save = function(promotionID, promotion) {
      var postBody = promotion;

      // verify the required parameter 'promotionID' is set
      if (promotionID == undefined || promotionID == null) {
        throw new Error("Missing the required parameter 'promotionID' when calling Save");
      }

      // verify the required parameter 'promotion' is set
      if (promotion == undefined || promotion == null) {
        throw new Error("Missing the required parameter 'promotion' when calling Save");
      }


      var pathParams = {
        'promotionID': promotionID
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
      var returnType = Promotion;

      return this.apiClient.callApi(
        '/promotions/{promotionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/PromotionAssignment} promotionAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(promotionAssignment) {
      var postBody = promotionAssignment;

      // verify the required parameter 'promotionAssignment' is set
      if (promotionAssignment == undefined || promotionAssignment == null) {
        throw new Error("Missing the required parameter 'promotionAssignment' when calling SaveAssignment");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/promotions/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
