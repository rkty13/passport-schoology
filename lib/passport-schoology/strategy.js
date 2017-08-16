var util = require('util');
var OAuthStrategy = require('passport-oauth1').Strategy;

function Strategy(options, verify) {
  options = options || {};

  var providerUrl = options.providerURL || 'https://api.schoology.com/v1';

  options.requestTokenURL = providerURL + (options.requestTokenURL || '/oauth/request_token');
  options.requestTokenHttpMethod = options.requestTokenHttpMethod || 'GET';
  options.accessTokenURL = providerURL + (options.accessTokenURL || '/oauth/access_token');
  options.accessTokenHttpMethod = options.accessTokenHttpMethod || 'GET';
  options.userAuthorizationURL = options.userAuthorizationURL || 'https://www.schoology.com/oauth/authorize';
  options.signatureMethod = options.signatureMethod || 'HMAC-SHA1';
  
  OAuthStrategy.call(this, options, verify);

  this._oauth.setClientOptions({
    requestTokenHttpMethod: options.requestTokenHttpMethod,
    accessTokenHttpMethod: options.requestTokenHttpMethod
  });
}

util.inherits(Strategy, OAuthStrategy);

module.exports = Strategy;
