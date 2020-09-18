webpackHotUpdate_N_E("pages/_app",{

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


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(create),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchCreate),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRead),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function createAPI(createData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post/', createData, {
    withCredentials: true
  });
}

function signUpAPI(signUpData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/user/', signUpData);
}

function create(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(createAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: WRITE_POST_SUCCESS,
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
            type: WRITE_POST_FAILURE
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

function watchCreate() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchCreate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["WRITE_POST_REQUEST"], create);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchRead() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRead$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(LOAD_POST_REQUEST, read);

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchCreate), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["fork"])(watchRead)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJzaWduVXAiLCJ3YXRjaENyZWF0ZSIsIndhdGNoUmVhZCIsInBvc3RTYWdhIiwiY3JlYXRlQVBJIiwiY3JlYXRlRGF0YSIsImF4aW9zIiwicG9zdCIsIndpdGhDcmVkZW50aWFscyIsInNpZ25VcEFQSSIsInNpZ25VcERhdGEiLCJhY3Rpb24iLCJjYWxsIiwiZGF0YSIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJXUklURV9QT1NUX1NVQ0NFU1MiLCJjb25zb2xlIiwiZXJyb3IiLCJXUklURV9QT1NUX0ZBSUxVUkUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJSb3V0ZXIiLCJwdXNoIiwiU0lHTl9VUF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIldSSVRFX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9SRVFVRVNUIiwicmVhZCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBZVVBLE07bUdBZ0JBQyxNO21HQWVBQyxXO21HQUlBQyxTO21HQUllQyxROztBQXREekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsVUFBbkIsRUFBOEI7QUFDMUIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLFVBQXpCLEVBQXFDO0FBQ3hDRyxtQkFBZSxFQUFDO0FBRHdCLEdBQXJDLENBQVA7QUFHSDs7QUFFRCxTQUFTQyxTQUFULENBQW1CQyxVQUFuQixFQUE4QjtBQUMxQixTQUFPSiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QkcsVUFBekIsQ0FBUDtBQUNIOztBQUVELFNBQVVYLE1BQVYsQ0FBaUJZLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFdUIsaUJBQU1DLCtEQUFJLENBQUNSLFNBQUQsRUFBWU8sTUFBTSxDQUFDRSxJQUFuQixDQUFWOztBQUZ2QjtBQUVjQyxnQkFGZDtBQUFBO0FBR1EsaUJBQU1DLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ0Msa0JBREM7QUFFTkosZ0JBQUksRUFBQ0MsTUFBTSxDQUFDRDtBQUZOLFdBQUQsQ0FBVDs7QUFIUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUVFLLGlCQUFPLENBQUNDLEtBQVI7QUFSUjtBQVNRLGlCQUFNSiw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNJO0FBREMsV0FBRCxDQUFUOztBQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCQSxTQUFVcEIsTUFBVixDQUFpQlcsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUSxpQkFBTUMsK0RBQUksQ0FBQ0gsU0FBRCxFQUFZRSxNQUFNLENBQUNFLElBQW5CLENBQVY7O0FBRlI7QUFBQTtBQUdRLGlCQUFNRSw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUNLO0FBREMsV0FBRCxDQUFUOztBQUhSO0FBTVFDLDREQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBTlI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRUUwsaUJBQU8sQ0FBQ0MsS0FBUjtBQVJSO0FBU1EsaUJBQU1KLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBQ1E7QUFEQyxXQUFELENBQVQ7O0FBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBVXZCLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU13QixxRUFBVSxDQUFDQyxpRUFBRCxFQUFxQjNCLE1BQXJCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVHLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU11QixxRUFBVSxDQUFDRSxpQkFBRCxFQUFvQkMsSUFBcEIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVXpCLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU0wQiw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUM3QixXQUFELENBREUsRUFFTjZCLCtEQUFJLENBQUM1QixTQUFELENBRkUsQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTZiNGFmOWQyYzI5ZDY0YjYwMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHthbGwsIGNhbGwsIHB1dCwgZm9yaywgdGFrZUxhdGVzdH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQge1dSSVRFX1BPU1RfUkVRVUVTVH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFQSShjcmVhdGVEYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QvJywgY3JlYXRlRGF0YSwge1xyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczp0cnVlLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShzaWduVXBEYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VzZXIvJywgc2lnblVwRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjcmVhdGUoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNyZWF0ZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6V1JJVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOnJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6V1JJVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDcmVhdGUoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoV1JJVEVfUE9TVF9SRVFVRVNULCBjcmVhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZWFkKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCByZWFkKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hDcmVhdGUpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZWFkKSxcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==