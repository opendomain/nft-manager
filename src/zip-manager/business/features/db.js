function indexDbAsync(defaultDbName, defaultStoreName) {

  var _defaultGetStoreFunc = null;
  var _defaultDbName = defaultDbName || 'keyval-store';
  var _defaultStoreName = defaultStoreName || 'keyval';

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function promisifyRequest(request) {
      return new Promise(function (resolve, reject) {
          request.oncomplete = request.onsuccess = function () {
              return resolve(request.result);
          };

          request.onabort = request.onerror = function () {
              return reject(request.error);
          };
      });
  }

  function createStore(dbName, storeName) {
      _defaultDbName = dbName;
      _defaultStoreName = storeName;

      var request = indexedDB.open(dbName);

      request.onupgradeneeded = function () {
          return request.result.createObjectStore(storeName);
      };

      var dbp = promisifyRequest(request);
      return function (txMode, callback) {
          return dbp.then(function (db) {
              return callback(db.transaction(storeName, txMode).objectStore(storeName));
          });
      };
  }

  function defaultGetStore() {
      if (!_defaultGetStoreFunc) {
          _defaultGetStoreFunc = createStore(_defaultDbName, _defaultStoreName);
      }

      return _defaultGetStoreFunc;
  }

  function getValue(key) {
      var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
      return customStore('readonly', function (store) {
          return promisifyRequest(store.get(key));
      });
  }

  function getAll() {
      var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
      return customStore('readonly', function (store) {
          return new Promise(function (resolve, reject) {
              var request = store.getAll();
              request.onsuccess = function (event) {
                  var keys = [];
                  var values = request.result;
                  var requestCursor = store.openCursor();
                  requestCursor.onsuccess = function (event) {
                      var cursor = event.target.result;
                      if (cursor) {
                          keys.push(cursor.key);
                          cursor.continue();
                      } else {
                          var keyValuePairs = keys.map(function (key, index) {
                              return { key: key, value: values[index] };
                          });
                          resolve(keyValuePairs);
                      }
                  };
              };
              request.onerror = function (event) {
                  reject("Error retrieving all values");
              };
          });
      });
  }
  

  async function addValue(key, value) {
      
      var customStore = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultGetStore();
      return customStore('readwrite', function (store) {
          
          store.put(value, key,name);
          return promisifyRequest(store.transaction);
      });
  }

  function update(key, updater) {
      var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
      return customStore('readwrite', function (store) {
          return (// Need to create the promise manually.
              // If I try to chain promises, the transaction closes in browsers
              // that use a promise polyfill (IE10/11).
              new Promise(function (resolve, reject) {
                  store.get(key).onsuccess = function () {
                      try {
                          store.put(updater(this.result), key);
                          resolve(promisifyRequest(store.transaction));
                      } catch (err) {
                          reject(err);
                      }
                  };
              })
          );
      });
  }

  function del(key) {
      var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
      return customStore('readwrite', function (store) {
          store.delete(key);
          return promisifyRequest(store.transaction);
      });
  }

  function clear() {
      var customStore = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultGetStore();
      return customStore('readwrite', function (store) {
          store.clear();
          return promisifyRequest(store.transaction);
      });
  }

  async function testDBAccess() {
      let result = false;
      let randNum = Math.floor(Math.random() * 1000);
      let testKey = "testKey000";
      let testValue = "testValue" + randNum;
      try {
        //   await addValue(testKey, testValue);
        //   let getValue = await getValue(testKey);
        //   await del(testKey);
        //   if (getValue == testValue) 
          result = true;
      }
      catch (err) {
          result = false;
      }

      return result;
  }

  return {
      createStore,
      getValue,
      addValue,
      update,
      del,
      clear,
      testDBAccess,
      getAll
  }
}

export default indexDbAsync;
