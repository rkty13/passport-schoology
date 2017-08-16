var util = require('util');
var OAuthStrategy = require('passport-oauth1').Strategy;

function Strategy(options, verify) {
  options = options || {};

  var providerURL = options.providerURL || 'https://api.schoology.com/v1';

  options.requestTokenURL = providerURL + (options.requestTokenURL || '/oauth/request_token');
  options.requestTokenHttpMethod = options.requestTokenHttpMethod || 'GET';
  options.accessTokenURL = providerURL + (options.accessTokenURL || '/oauth/access_token');
  options.accessTokenHttpMethod = options.accessTokenHttpMethod || 'GET';
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://www.schoology.com/oauth/authorize';
  options.signatureMethod = options.signatureMethod || 'HMAC-SHA1';
  options.providerName = options.providerName || 'schoology';
  
  OAuthStrategy.call(this, options, verify);

  this.name = options.providerName;

  this._oauth.setClientOptions({
    requestTokenHttpMethod: options.requestTokenHttpMethod,
    accessTokenHttpMethod: options.requestTokenHttpMethod
  });
}

util.inherits(Strategy, OAuthStrategy);

module.exports = Strategy;
