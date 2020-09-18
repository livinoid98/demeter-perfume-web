webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, WRITE_POST_REQUEST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, writePostRequestAction, loadPostRequestAction, deletePostRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRITE_POST_REQUEST", function() { return WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRITE_POST_SUCCESS", function() { return WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WRITE_POST_FAILURE", function() { return WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writePostRequestAction", function() { return writePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostRequestAction", function() { return loadPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostRequestAction", function() { return deletePostRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  isPosting: false,
  isPosted: false,
  isCheck: false,
  isDeleting: false,
  isDeleted: false
};
var WRITE_POST_REQUEST = 'WRITE_POST_REQUEST';
var WRITE_POST_SUCCESS = 'WRITE_POST_SUCCESS';
var WRITE_POST_FAILURE = 'WRITE_POST_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
var DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
var DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
var writePostRequestAction = function writePostRequestAction() {
  return {
    type: WRITE_POST_REQUEST
  };
};
var loadPostRequestAction = function loadPostRequestAction() {
  return {
    type: LOAD_POST_REQUEST
  };
};
var deletePostRequestAction = function deletePostRequestAction() {
  return {
    type: DELETE_POST_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case WRITE_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isPosting: true
        });
      }

    case WRITE_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isPosting: false,
          isPosted: true
        });
      }

    case WRITE_POST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isPosting: false
        });
      }

    case LOAD_POST_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isCheck: true
        });
      }

    case LOAD_POST_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isDeleting: true
        });
      }

    case DELETE_POST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isDeleting: false,
          isDeleted: true
        });
      }

    case DELETE_POST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isDeleting: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./sagas/post.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);





axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = 'http://localhost:3065';
function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_post__WEBPACK_IMPORTED_MODULE_4__["default"])]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(login),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogin),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function loginAPI(loginData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/user/login', loginData, {
    withCredentials: true
  });
}

function signUpAPI(signUpData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/user/', signUpData);
}

function login(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(loginAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: LOG_IN_SUCCESS,
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: LOG_IN_FAILURE
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function signUp(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(signUpAPI, action.data);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: SIGN_UP_SUCCESS
          });

        case 5:
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
          _context2.next = 13;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: SIGN_UP_FAILURE
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function watchLogin() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogin$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(LOG_IN_REQUEST, login);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(SIGN_UP_REQUEST, signUp);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NhZ2FzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNQb3N0aW5nIiwiaXNQb3N0ZWQiLCJpc0NoZWNrIiwiaXNEZWxldGluZyIsImlzRGVsZXRlZCIsIldSSVRFX1BPU1RfUkVRVUVTVCIsIldSSVRFX1BPU1RfU1VDQ0VTUyIsIldSSVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkRFTEVURV9QT1NUX1JFUVVFU1QiLCJERUxFVEVfUE9TVF9TVUNDRVNTIiwiREVMRVRFX1BPU1RfRkFJTFVSRSIsIndyaXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9hZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGVsZXRlUG9zdFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJyb290U2FnYSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiYWxsIiwiY2FsbCIsInVzZXIiLCJwb3N0IiwibG9naW4iLCJzaWduVXAiLCJ3YXRjaExvZ2luIiwid2F0Y2hTaWduVXAiLCJwb3N0U2FnYSIsImxvZ2luQVBJIiwibG9naW5EYXRhIiwid2l0aENyZWRlbnRpYWxzIiwic2lnblVwQVBJIiwic2lnblVwRGF0YSIsImRhdGEiLCJyZXN1bHQiLCJwdXQiLCJMT0dfSU5fU1VDQ0VTUyIsImNvbnNvbGUiLCJlcnJvciIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9TVUNDRVNTIiwiUm91dGVyIiwicHVzaCIsIlNJR05fVVBfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QixNQUFNLENBQUNtQixJQUFuQixDQUFWOztBQUZSO0FBQUE7QUFHUSxpQkFBTUUsOERBQUcsQ0FBQztBQUNOMUIsZ0JBQUksRUFBQytCO0FBREMsV0FBRCxDQUFUOztBQUhSO0FBTVFDLDREQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBTlI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRUUwsaUJBQU8sQ0FBQ0MsS0FBUjtBQVJSO0FBU1EsaUJBQU1ILDhEQUFHLENBQUM7QUFDTjFCLGdCQUFJLEVBQUNrQztBQURDLFdBQUQsQ0FBVDs7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFVbEIsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTW1CLHFFQUFVLENBQUNDLGNBQUQsRUFBaUJ0QixLQUFqQixDQUFoQjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVRyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGlCQUFNa0IscUVBQVUsQ0FBQ0UsZUFBRCxFQUFrQnRCLE1BQWxCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1SLDhEQUFHLENBQUMsQ0FDTjRCLCtEQUFJLENBQUN0QixVQUFELENBREUsRUFFTnNCLCtEQUFJLENBQUNyQixXQUFELENBRkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjA2MWExNzFlZmVhNWZiYTVkZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc1Bvc3Rpbmc6IGZhbHNlLFxyXG4gICAgaXNQb3N0ZWQ6IGZhbHNlLFxyXG4gICAgaXNDaGVjazpmYWxzZSxcclxuICAgIGlzRGVsZXRpbmc6IGZhbHNlLFxyXG4gICAgaXNEZWxldGVkOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXUklURV9QT1NUX1JFUVVFU1QgPSAnV1JJVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFdSSVRFX1BPU1RfU1VDQ0VTUyA9ICdXUklURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgV1JJVEVfUE9TVF9GQUlMVVJFID0gJ1dSSVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUX1JFUVVFU1QgPSAgJ0RFTEVURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU1RfU1VDQ0VTUyA9ICAnREVMRVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVF9GQUlMVVJFID0gICdERUxFVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCB3cml0ZVBvc3RSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFdSSVRFX1BPU1RfUkVRVUVTVCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFBvc3RSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBERUxFVEVfUE9TVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlICwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgV1JJVEVfUE9TVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc1Bvc3Rpbmc6dHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFdSSVRFX1BPU1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNQb3N0aW5nOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNQb3N0ZWQ6dHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFdSSVRFX1BPU1RfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNQb3N0aW5nOmZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0NoZWNrOnRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgREVMRVRFX1BPU1RfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGluZzp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgREVMRVRFX1BPU1RfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGluZzpmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzRGVsZXRlZDp0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgREVMRVRFX1BPU1RfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNEZWxldGluZzpmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsIGNhbGx9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCdcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBjYWxsKHVzZXIpLFxyXG4gICAgICAgIGNhbGwocG9zdCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHthbGwsIGNhbGwsIHB1dCwgZm9yaywgdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQge1dSSVRFX1BPU1RfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGxvZ2luRGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgbG9naW5EYXRhLCB7XHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOnRydWUsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKHNpZ25VcERhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdXNlci8nLCBzaWduVXBEYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9naW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==