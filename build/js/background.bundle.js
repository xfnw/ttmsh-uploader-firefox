/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function Storage() {
        _classCallCheck(this, Storage);

        browser.storage.local.get("firefox-uploader-imgur").then(function (obj) {
            if (Object.getOwnPropertyNames(obj).length == 0) {
                console.log("test");
                browser.storage.local.set({
                    'firefox-uploader-imgur': []
                });
            }
        });
    }

    _createClass(Storage, [{
        key: "add",
        value: function add(image) {
            return new Promise(function (resolve, reject) {
                var checkStorage = browser.storage.local.get("firefox-uploader-imgur").then(function (obj) {
                    var send = obj['firefox-uploader-imgur'];

                    image['viewable'] = true;

                    send.push(image);
                    console.log(send);
                    browser.storage.local.set({
                        'firefox-uploader-imgur': send
                    }).then(function () {
                        resolve("test");
                    });
                });
            });
        }
    }, {
        key: "remove",
        value: function remove(imageId) {
            var checkStorage = browser.storage.local.get("firefox-uploader-imgur").then(function (obj) {
                var send = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = obj['firefox-uploader-imgur'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var img = _step.value;

                        if (img.id != imageId) {
                            send.push(img);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                browser.storage.local.set({
                    'firefox-uploader-imgur': send
                });
            });
        }
    }, {
        key: "change",
        value: function change(imageId, status) {
            if (!imageId instanceof Array) {
                imageId = [imageId];
            }
            var checkStorage = browser.storage.local.get("firefox-uploader-imgur").then(function (obj) {
                var send = [];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = obj['firefox-uploader-imgur'][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var img = _step2.value;

                        if (imageId.indexOf(img.id) >= 0) {
                            console.log(imageId);
                            console.log(status);
                            for (var property in status) {
                                if (status.hasOwnProperty(property)) {
                                    img[property] = status[property];
                                }
                            }
                            console.log(img);
                            send.push(img);
                        } else {
                            send.push(img);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                browser.storage.local.set({
                    'firefox-uploader-imgur': send
                });
            });
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            browser.storage.local.set({
                'firefox-uploader-imgur': []
            });
        }
    }]);

    return Storage;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var request = __webpack_require__(2);
module.exports = function () {
    function Uploader() {
        var _this = this;

        _classCallCheck(this, Uploader);

        browser.storage.local.get("firefox-uploader-client-id").then(function (result) {
            var backupList = ['a6bebdd6a51f656', 'f752792c52f4cdf', '474d8a50e7e752d', '9089d7837e30269', '6c6fa522da181b8', 'bbf63f907ae5614', '480391db79e87b6', 'ea76f402e22007a'];
            if (typeof result['firefox-uploader-client-id'] !== "undefined") {
                _this.clientID = result['firefox-uploader-client-id'];
                console.log(result['firefox-uploader-client-id']);
            } else {
                _this.clientID = backupList[Math.floor(Math.random() * backupList.length)];
            }
            console.log(_this.clientID);
        });
    }

    _createClass(Uploader, [{
        key: "update",
        value: function update() {
            var _this2 = this;

            browser.storage.local.get("firefox-uploader-client-id").then(function (result) {
                var backupList = ['a6bebdd6a51f656', 'f752792c52f4cdf', '474d8a50e7e752d', '9089d7837e30269', '6c6fa522da181b8', 'bbf63f907ae5614', '480391db79e87b6', 'ea76f402e22007a'];
                if (typeof result['firefox-uploader-client-id'] !== "undefined") {
                    _this2.clientID = result['firefox-uploader-client-id'];
                    console.log(result['firefox-uploader-client-id']);
                } else {
                    _this2.clientID = backupList[Math.floor(Math.random() * backupList.length)];
                }
                console.log(_this2.clientID);
            });
        }
    }, {
        key: "uuid",
        value: function uuid() {

            var d = Date.now();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
                d += performance.now(); //use high-precision timer if available
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
            });
        }
    }, {
        key: "imageReader",
        value: function imageReader(image) {
            var _this3 = this;

            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onload = function (event) {
                    resolve(event.target.result.split("base64,")[1]);
                };

                reader.onerror = function () {
                    return reject(_this3);
                };

                reader.readAsDataURL(image);
            });
        }
    }, {
        key: "uploadToImgur",
        value: function uploadToImgur(file) {
            var _this4 = this;

            var that = this;
            return new Promise(function (resolve, reject) {
                console.log(_this4);
                console.log(that.uuid());
                var options = {
                    url: "https://api.imgur.com/3/image",
                    headers: {
                        authorization: "Client-ID " + that.clientID
                    },
                    json: {
                        image: file
                    }

                };
                console.log(options);
                request.post(options, function (error, res, body) {
                    console.log(body.data);
                    if (body.data.error) {
                        reject(body.data);
                    } else {
                        resolve(body.data);
                    }
                });
            });
        }
    }, {
        key: "uploader",
        value: function uploader(image) {
            return this.imageReader(image).then(this.uploadToImgur.bind(this));
        }
    }, {
        key: "remove",
        value: function remove(deletehash) {
            var that = this;
            return new Promise(function (resolve, reject) {
                var options = {
                    method: "delete",
                    url: "https://api.imgur.com/3/image/" + deletehash,
                    headers: {
                        authorization: "Client-ID " + that.clientID
                    }

                };
                console.log(options);
                request(options, function (error, res, body) {
                    var result = JSON.parse(body);
                    if (!result.data) {
                        reject(result);
                    } else {
                        resolve(result);
                    }
                });
            });
        }
    }]);

    return Uploader;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Browser Request
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// UMD HEADER START 
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {
// UMD HEADER END

var XHR = XMLHttpRequest
if (!XHR) throw new Error('missing XMLHttpRequest')
request.log = {
  'trace': noop, 'debug': noop, 'info': noop, 'warn': noop, 'error': noop
}

var DEFAULT_TIMEOUT = 3 * 60 * 1000 // 3 minutes

//
// request
//

function request(options, callback) {
  // The entry-point to the API: prep the options object and pass the real work to run_xhr.
  if(typeof callback !== 'function')
    throw new Error('Bad callback given: ' + callback)

  if(!options)
    throw new Error('No options given')

  var options_onResponse = options.onResponse; // Save this for later.

  if(typeof options === 'string')
    options = {'uri':options};
  else
    options = JSON.parse(JSON.stringify(options)); // Use a duplicate for mutating.

  options.onResponse = options_onResponse // And put it back.

  if (options.verbose) request.log = getLogger();

  if(options.url) {
    options.uri = options.url;
    delete options.url;
  }

  if(!options.uri && options.uri !== "")
    throw new Error("options.uri is a required argument");

  if(typeof options.uri != "string")
    throw new Error("options.uri must be a string");

  var unsupported_options = ['proxy', '_redirectsFollowed', 'maxRedirects', 'followRedirect']
  for (var i = 0; i < unsupported_options.length; i++)
    if(options[ unsupported_options[i] ])
      throw new Error("options." + unsupported_options[i] + " is not supported")

  options.callback = callback
  options.method = options.method || 'GET';
  options.headers = options.headers || {};
  options.body    = options.body || null
  options.timeout = options.timeout || request.DEFAULT_TIMEOUT

  if(options.headers.host)
    throw new Error("Options.headers.host is not supported");

  if(options.json) {
    options.headers.accept = options.headers.accept || 'application/json'
    if(options.method !== 'GET')
      options.headers['content-type'] = 'application/json'

    if(typeof options.json !== 'boolean')
      options.body = JSON.stringify(options.json)
    else if(typeof options.body !== 'string')
      options.body = JSON.stringify(options.body)
  }
  
  //BEGIN QS Hack
  var serialize = function(obj) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  
  if(options.qs){
    var qs = (typeof options.qs == 'string')? options.qs : serialize(options.qs);
    if(options.uri.indexOf('?') !== -1){ //no get params
        options.uri = options.uri+'&'+qs;
    }else{ //existing get params
        options.uri = options.uri+'?'+qs;
    }
  }
  //END QS Hack
  
  //BEGIN FORM Hack
  var multipart = function(obj) {
    //todo: support file type (useful?)
    var result = {};
    result.boundry = '-------------------------------'+Math.floor(Math.random()*1000000000);
    var lines = [];
    for(var p in obj){
        if (obj.hasOwnProperty(p)) {
            lines.push(
                '--'+result.boundry+"\n"+
                'Content-Disposition: form-data; name="'+p+'"'+"\n"+
                "\n"+
                obj[p]+"\n"
            );
        }
    }
    lines.push( '--'+result.boundry+'--' );
    result.body = lines.join('');
    result.length = result.body.length;
    result.type = 'multipart/form-data; boundary='+result.boundry;
    return result;
  }
  
  if(options.form){
    if(typeof options.form == 'string') throw('form name unsupported');
    if(options.method === 'POST'){
        var encoding = (options.encoding || 'application/x-www-form-urlencoded').toLowerCase();
        options.headers['content-type'] = encoding;
        switch(encoding){
            case 'application/x-www-form-urlencoded':
                options.body = serialize(options.form).replace(/%20/g, "+");
                break;
            case 'multipart/form-data':
                var multi = multipart(options.form);
                //options.headers['content-length'] = multi.length;
                options.body = multi.body;
                options.headers['content-type'] = multi.type;
                break;
            default : throw new Error('unsupported encoding:'+encoding);
        }
    }
  }
  //END FORM Hack

  // If onResponse is boolean true, call back immediately when the response is known,
  // not when the full request is complete.
  options.onResponse = options.onResponse || noop
  if(options.onResponse === true) {
    options.onResponse = callback
    options.callback = noop
  }

  // XXX Browsers do not like this.
  //if(options.body)
  //  options.headers['content-length'] = options.body.length;

  // HTTP basic authentication
  if(!options.headers.authorization && options.auth)
    options.headers.authorization = 'Basic ' + b64_enc(options.auth.username + ':' + options.auth.password);

  return run_xhr(options)
}

var req_seq = 0
function run_xhr(options) {
  var xhr = new XHR
    , timed_out = false
    , is_cors = is_crossDomain(options.uri)
    , supports_cors = ('withCredentials' in xhr)

  req_seq += 1
  xhr.seq_id = req_seq
  xhr.id = req_seq + ': ' + options.method + ' ' + options.uri
  xhr._id = xhr.id // I know I will type "_id" from habit all the time.

  if(is_cors && !supports_cors) {
    var cors_err = new Error('Browser does not support cross-origin request: ' + options.uri)
    cors_err.cors = 'unsupported'
    return options.callback(cors_err, xhr)
  }

  xhr.timeoutTimer = setTimeout(too_late, options.timeout)
  function too_late() {
    timed_out = true
    var er = new Error('ETIMEDOUT')
    er.code = 'ETIMEDOUT'
    er.duration = options.timeout

    request.log.error('Timeout', { 'id':xhr._id, 'milliseconds':options.timeout })
    return options.callback(er, xhr)
  }

  // Some states can be skipped over, so remember what is still incomplete.
  var did = {'response':false, 'loading':false, 'end':false}

  xhr.onreadystatechange = on_state_change
  xhr.open(options.method, options.uri, true) // asynchronous
  if(is_cors)
    xhr.withCredentials = !! options.withCredentials
  xhr.send(options.body)
  return xhr

  function on_state_change(event) {
    if(timed_out)
      return request.log.debug('Ignoring timed out state change', {'state':xhr.readyState, 'id':xhr.id})

    request.log.debug('State change', {'state':xhr.readyState, 'id':xhr.id, 'timed_out':timed_out})

    if(xhr.readyState === XHR.OPENED) {
      request.log.debug('Request started', {'id':xhr.id})
      for (var key in options.headers)
        xhr.setRequestHeader(key, options.headers[key])
    }

    else if(xhr.readyState === XHR.HEADERS_RECEIVED)
      on_response()

    else if(xhr.readyState === XHR.LOADING) {
      on_response()
      on_loading()
    }

    else if(xhr.readyState === XHR.DONE) {
      on_response()
      on_loading()
      on_end()
    }
  }

  function on_response() {
    if(did.response)
      return

    did.response = true
    request.log.debug('Got response', {'id':xhr.id, 'status':xhr.status})
    clearTimeout(xhr.timeoutTimer)
    xhr.statusCode = xhr.status // Node request compatibility

    // Detect failed CORS requests.
    if(is_cors && xhr.statusCode == 0) {
      var cors_err = new Error('CORS request rejected: ' + options.uri)
      cors_err.cors = 'rejected'

      // Do not process this request further.
      did.loading = true
      did.end = true

      return options.callback(cors_err, xhr)
    }

    options.onResponse(null, xhr)
  }

  function on_loading() {
    if(did.loading)
      return

    did.loading = true
    request.log.debug('Response body loading', {'id':xhr.id})
    // TODO: Maybe simulate "data" events by watching xhr.responseText
  }

  function on_end() {
    if(did.end)
      return

    did.end = true
    request.log.debug('Request done', {'id':xhr.id})

    xhr.body = xhr.responseText
    if(options.json) {
      try        { xhr.body = JSON.parse(xhr.responseText) }
      catch (er) { return options.callback(er, xhr)        }
    }

    options.callback(null, xhr, xhr.body)
  }

} // request

request.withCredentials = false;
request.DEFAULT_TIMEOUT = DEFAULT_TIMEOUT;

//
// defaults
//

request.defaults = function(options, requester) {
  var def = function (method) {
    var d = function (params, callback) {
      if(typeof params === 'string')
        params = {'uri': params};
      else {
        params = JSON.parse(JSON.stringify(params));
      }
      for (var i in options) {
        if (params[i] === undefined) params[i] = options[i]
      }
      return method(params, callback)
    }
    return d
  }
  var de = def(request)
  de.get = def(request.get)
  de.post = def(request.post)
  de.put = def(request.put)
  de.head = def(request.head)
  return de
}

//
// HTTP method shortcuts
//

var shortcuts = [ 'get', 'put', 'post', 'head' ];
shortcuts.forEach(function(shortcut) {
  var method = shortcut.toUpperCase();
  var func   = shortcut.toLowerCase();

  request[func] = function(opts) {
    if(typeof opts === 'string')
      opts = {'method':method, 'uri':opts};
    else {
      opts = JSON.parse(JSON.stringify(opts));
      opts.method = method;
    }

    var args = [opts].concat(Array.prototype.slice.apply(arguments, [1]));
    return request.apply(this, args);
  }
})

//
// CouchDB shortcut
//

request.couch = function(options, callback) {
  if(typeof options === 'string')
    options = {'uri':options}

  // Just use the request API to do JSON.
  options.json = true
  if(options.body)
    options.json = options.body
  delete options.body

  callback = callback || noop

  var xhr = request(options, couch_handler)
  return xhr

  function couch_handler(er, resp, body) {
    if(er)
      return callback(er, resp, body)

    if((resp.statusCode < 200 || resp.statusCode > 299) && body.error) {
      // The body is a Couch JSON object indicating the error.
      er = new Error('CouchDB error: ' + (body.error.reason || body.error.error))
      for (var key in body)
        er[key] = body[key]
      return callback(er, resp, body);
    }

    return callback(er, resp, body);
  }
}

//
// Utility
//

function noop() {}

function getLogger() {
  var logger = {}
    , levels = ['trace', 'debug', 'info', 'warn', 'error']
    , level, i

  for(i = 0; i < levels.length; i++) {
    level = levels[i]

    logger[level] = noop
    if(typeof console !== 'undefined' && console && console[level])
      logger[level] = formatted(console, level)
  }

  return logger
}

function formatted(obj, method) {
  return formatted_logger

  function formatted_logger(str, context) {
    if(typeof context === 'object')
      str += ' ' + JSON.stringify(context)

    return obj[method].call(obj, str)
  }
}

// Return whether a URL is a cross-domain request.
function is_crossDomain(url) {
  var rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/

  // jQuery #8138, IE may throw an exception when accessing
  // a field from window.location if document.domain has been set
  var ajaxLocation
  try { ajaxLocation = location.href }
  catch (e) {
    // Use the href attribute of an A element since IE will modify it given document.location
    ajaxLocation = document.createElement( "a" );
    ajaxLocation.href = "";
    ajaxLocation = ajaxLocation.href;
  }

  var ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []
    , parts = rurl.exec(url.toLowerCase() )

  var result = !!(
    parts &&
    (  parts[1] != ajaxLocParts[1]
    || parts[2] != ajaxLocParts[2]
    || (parts[3] || (parts[1] === "http:" ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? 80 : 443))
    )
  )

  //console.debug('is_crossDomain('+url+') -> ' + result)
  return result
}

// MIT License from http://phpjs.org/functions/base64_encode:358
function b64_enc (data) {
    // Encodes string using MIME base64 algorithm
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc="", tmp_arr = [];

    if (!data) {
        return data;
    }

    // assume utf8 data
    // data = this.utf8_encode(data+'');

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1<<16 | o2<<8 | o3;

        h1 = bits>>18 & 0x3f;
        h2 = bits>>12 & 0x3f;
        h3 = bits>>6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
        case 1:
            enc = enc.slice(0, -2) + '==';
        break;
        case 2:
            enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
}
    return request;
//UMD FOOTER START
}));
//UMD FOOTER END


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.setCopy = function (text) {
    var id = "clipboard-textarea-hidden-id";
    var existsTextarea = document.getElementById(id);

    if (!existsTextarea) {
        console.log("Creating textarea");
        var textarea = document.createElement("textarea");
        textarea.id = id;
        textarea.style.position = 'fixed';
        textarea.style.top = -100;
        textarea.style.left = -100;
        textarea.style.width = '1px';
        textarea.style.height = '1px';
        textarea.style.padding = 0;
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';
        textarea.style.background = 'transparent';
        document.querySelector("body").appendChild(textarea);

        existsTextarea = document.getElementById(id);
    } else {
        console.log("The textarea already exists :3");
    }
    console.log(existsTextarea);
    existsTextarea.value = text;
    existsTextarea.select();

    try {
        var status = document.execCommand('copy');
        if (!status) {
            console.error("Cannot copy text");
        } else {
            console.log("The text is now on the clipboard");
        }
    } catch (err) {
        console.log('Unable to copy.');
    }
};

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Uploader = __webpack_require__(1);
var Storage = __webpack_require__(0);
var copy = __webpack_require__(3);

var uploader = new Uploader();
var storage = new Storage();
browser.browserAction.setIcon({
    path: "../icons/favicon.png"
});

browser.storage.local.get("firefox-uploader-announce").then(function (res) {
    if (res['firefox-uploader-announce'] === undefined) {
        browser.storage.local.set({ "firefox-uploader-announce": { '1.5.0': 'true' } }).then(function () {
            var creating = browser.tabs.create({
                url: "../templates/announce/1.5.0.html"
            });
        });
    } else {
        if (res['firefox-uploader-announce']['1.5.0'] === undefined) {
            res['firefox-uploader-announce']['1.5.0'] = "true";
            browser.storage.local.set({ "firefox-uploader-announce": res['firefox-uploader-announce'] });
            var creating = browser.tabs.create({
                url: "../templates/announce/1.5.0.html"
            });
        };
    }
});

function onCreated() {
    if (browser.runtime.lastError) {
        console.log("error creating item:" + browser.runtime.lastError);
    } else {
        console.log("item created successfully");
    }
}

browser.storage.onChanged.addListener(function (changes, area) {
    if (typeof changes['firefox-uploader-client-id'] !== "undefined") {
        uploader.update();
    }
});

function uploadSuccessNotification() {
    browser.notifications.create("Imgur Uploader", {
        "type": "basic",
        "title": "Imgur Uploader",
        "message": "Upload successful!",
        "iconUrl": "../../icons/favicon.png"
    });
}

function uploadFailNotification() {

    browser.notifications.create("Imgur Uploader", {
        "type": "basic",
        "title": "Imgur Uploader",
        "message": "Upload Failed",
        "iconUrl": "../../icons/favicon.png"
    });
}

function uploadLocalNotification() {
    browser.notifications.create("Imgur Uploader", {
        "type": "basic",
        "title": "Imgur Uploader",
        "message": "Please use 'Add image' to upload local file",
        "iconUrl": "../../icons/favicon.png"
    });
}

browser.menus.create({
    id: "image-select",
    type: "normal",
    title: "Upload to Imgur",
    contexts: ["all"],
    checked: false
}, onCreated);

browser.menus.onClicked.addListener(function (info, tab) {

    if (info.mediaType == "image") {
        console.log(info.srcUrl);
        console.log(info);
        console.log(uploader);
        if (info.srcUrl.startsWith("data")) {
            uploader.uploadToImgur(info.srcUrl.split("base64,")[1]).then(function (e) {
                browser.storage.local.get('firefox-uploader-auto-copy').then(function (value) {
                    if (value['firefox-uploader-auto-copy'] == true) {
                        browser.tabs.query({
                            currentWindow: true,
                            active: true
                        }).then(function (result) {
                            console.log(result);
                            browser.tabs.sendMessage(result[0].id, {
                                link: e.link
                            });
                        });
                    }
                });

                storage.add(e);
            }).then(uploadSuccessNotification, uploadFailNotification);
        } else if (info.srcUrl.startsWith("file")) {
            uploadLocalNotification();
        } else {
            uploader.uploadToImgur(info.srcUrl).then(function (e) {
                browser.storage.local.get('firefox-uploader-auto-copy').then(function (value) {
                    if (value['firefox-uploader-auto-copy'] == true) {
                        browser.tabs.query({
                            currentWindow: true,
                            active: true
                        }).then(function (result) {
                            console.log(result);
                            browser.tabs.sendMessage(result[0].id, {
                                link: e.link
                            });
                        });
                    }
                });

                storage.add(e);
            }).then(uploadSuccessNotification, uploadFailNotification);
        }
    }
});

function handleMessage(request, sender, res) {
    if (request.task == "upload") {
        if (request.file) {
            res({
                success: true
            });
            uploader.uploader(request.file).then(function (e) {
                console.log(e);
                browser.storage.local.get('firefox-uploader-auto-copy').then(function (value) {
                    if (value['firefox-uploader-auto-copy'] == true) {
                        browser.tabs.query({
                            active: true
                        }).then(function (result) {
                            console.log(result);
                            browser.tabs.sendMessage(result[0].id, {
                                link: e.link
                            });
                        });
                    }
                });

                storage.add(e);
            }).then(uploadSuccessNotification, uploadFailNotification);
        } else if (request.url) {
            res({
                success: true
            });
            uploader.uploadToImgur(request.url.split("base64,")[1]).then(function (e) {
                console.log(e);
                storage.add(e);
                browser.storage.local.get('firefox-uploader-auto-copy').then(function (value) {
                    console.log("storing");
                    if (value['firefox-uploader-auto-copy'] == true) {
                        browser.tabs.query({
                            active: true
                        }).then(function (result) {
                            console.log(result);
                            browser.tabs.sendMessage(result[0].id, {
                                link: e.link
                            });
                        });
                    }
                });
            }).then(uploadSuccessNotification, uploadFailNotification);
        }
    } else if (request.task == "auth") {
        console.log(request);
        browser.storage.local.set({ 'firefox-uploader-auth': request }).then(function () {
            res({ response: "auth set" });
        });
    }
}

browser.runtime.onMessage.addListener(handleMessage);

/***/ })
/******/ ]);
//# sourceMappingURL=background.bundle.js.map