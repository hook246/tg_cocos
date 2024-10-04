'use strict';

System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var bind, toString, getPrototypeOf, kindOf, kindOfTest, typeOfTest, isArray, isUndefined, isArrayBuffer, isString, isFunction, isNumber, isObject, isBoolean, isPlainObject, isDate, isFile, isBlob, isFileList, isStream, isFormData, isURLSearchParams, isReadableStream, isRequest, isResponse, isHeaders, trim, _global, isContextDefined, extend, stripBOM, inherits, toFlatObject, endsWith, toArray, isTypedArray, forEachEntry, matchAll, isHTMLForm, toCamelCase, hasOwnProperty, isRegExp, reduceDescriptors, freezeMethods, toObjectSet, noop, toFiniteNumber, ALPHA, DIGIT, ALPHABET, generateString, toJSONObject, isAsyncFn, isThenable, _setImmediate, asap;

  /**
   * Determine if a value is a Buffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */


  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    let result;

    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }

    return result;
  }
  /**
   * Determine if a value is a String
   *
   * @param {*} val The value to test
   *
   * @returns {boolean} True if value is a String, otherwise false
   */


  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   *
   * @param {Boolean} [allOwnKeys = false]
   * @returns {any}
   */
  function forEach(obj, fn, {
    allOwnKeys = false
  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    let i;
    let l; // Force an array if not already something iterable

    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray(obj)) {
      // Iterate over array values
      for (i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;

      for (i = 0; i < len; i++) {
        key = keys[i];
        fn.call(null, obj[key], key, obj);
      }
    }
  }

  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;

    let _key;

    while (i-- > 0) {
      _key = keys[i];

      if (key === _key.toLowerCase()) {
        return _key;
      }
    }

    return null;
  }

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   *
   * @returns {Object} Result of all merge properties
   */
  function
    /* obj1, obj2, obj3, ... */
  merge() {
    const {
      caseless
    } = isContextDefined(this) && this || {};
    const result = {};

    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;

      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };

    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }

    return result;
  }
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   *
   * @param {Boolean} [allOwnKeys]
   * @returns {Object} The resulting value of object a
   */


  /**
   * If the thing is a FormData object, return true, otherwise return false.
   *
   * @param {unknown} thing - The thing to check.
   *
   * @returns {boolean}
   */
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
  }

  return {
    setters: [function (_unresolved_) {
      bind = _unresolved_.default;
    }],
    execute: function () {
      // utils is a library of generic helper functions non-specific to axios
      ({
        toString
      } = Object.prototype);
      ({
        getPrototypeOf
      } = Object);

      kindOf = (cache => thing => {
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
      })(Object.create(null));

      kindOfTest = type => {
        type = type.toLowerCase();
        return thing => kindOf(thing) === type;
      };

      typeOfTest = type => thing => typeof thing === type;
      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       *
       * @returns {boolean} True if value is an Array, otherwise false
       */


      ({
        isArray
      } = Array);
      /**
       * Determine if a value is undefined
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if the value is undefined, otherwise false
       */

      isUndefined = typeOfTest('undefined');
      isArrayBuffer = kindOfTest('ArrayBuffer');
      isString = typeOfTest('string');
      /**
       * Determine if a value is a Function
       *
       * @param {*} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */

      isFunction = typeOfTest('function');
      /**
       * Determine if a value is a Number
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a Number, otherwise false
       */

      isNumber = typeOfTest('number');
      /**
       * Determine if a value is an Object
       *
       * @param {*} thing The value to test
       *
       * @returns {boolean} True if value is an Object, otherwise false
       */

      isObject = thing => thing !== null && typeof thing === 'object';
      /**
       * Determine if a value is a Boolean
       *
       * @param {*} thing The value to test
       * @returns {boolean} True if value is a Boolean, otherwise false
       */


      isBoolean = thing => thing === true || thing === false;
      /**
       * Determine if a value is a plain Object
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a plain Object, otherwise false
       */


      isPlainObject = val => {
        if (kindOf(val) !== 'object') {
          return false;
        }

        const prototype = getPrototypeOf(val);
        return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
      };
      /**
       * Determine if a value is a Date
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a Date, otherwise false
       */


      isDate = kindOfTest('Date');
      /**
       * Determine if a value is a File
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a File, otherwise false
       */

      isFile = kindOfTest('File');
      /**
       * Determine if a value is a Blob
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a Blob, otherwise false
       */

      isBlob = kindOfTest('Blob');
      /**
       * Determine if a value is a FileList
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a File, otherwise false
       */

      isFileList = kindOfTest('FileList');
      /**
       * Determine if a value is a Stream
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a Stream, otherwise false
       */

      isStream = val => isObject(val) && isFunction(val.pipe);
      /**
       * Determine if a value is a FormData
       *
       * @param {*} thing The value to test
       *
       * @returns {boolean} True if value is an FormData, otherwise false
       */


      isFormData = thing => {
        let kind;
        return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' || // detect form-data instance
        kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
      };
      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */


      isURLSearchParams = kindOfTest('URLSearchParams');
      [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);
      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       *
       * @returns {String} The String freed of excess whitespace
       */

      trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

      _global = (() => {
        /*eslint no-undef:0*/
        if (typeof globalThis !== "undefined") return globalThis;
        return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
      })();

      isContextDefined = context => !isUndefined(context) && context !== _global;

      extend = (a, b, thisArg, {
        allOwnKeys
      } = {}) => {
        forEach(b, (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        }, {
          allOwnKeys
        });
        return a;
      };
      /**
       * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
       *
       * @param {string} content with BOM
       *
       * @returns {string} content value without BOM
       */


      stripBOM = content => {
        if (content.charCodeAt(0) === 0xFEFF) {
          content = content.slice(1);
        }

        return content;
      };
      /**
       * Inherit the prototype methods from one constructor into another
       * @param {function} constructor
       * @param {function} superConstructor
       * @param {object} [props]
       * @param {object} [descriptors]
       *
       * @returns {void}
       */


      inherits = (constructor, superConstructor, props, descriptors) => {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors);
        constructor.prototype.constructor = constructor;
        Object.defineProperty(constructor, 'super', {
          value: superConstructor.prototype
        });
        props && Object.assign(constructor.prototype, props);
      };
      /**
       * Resolve object with deep prototype chain to a flat object
       * @param {Object} sourceObj source object
       * @param {Object} [destObj]
       * @param {Function|Boolean} [filter]
       * @param {Function} [propFilter]
       *
       * @returns {Object}
       */


      toFlatObject = (sourceObj, destObj, filter, propFilter) => {
        let props;
        let i;
        let prop;
        const merged = {};
        destObj = destObj || {}; // eslint-disable-next-line no-eq-null,eqeqeq

        if (sourceObj == null) return destObj;

        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;

          while (i-- > 0) {
            prop = props[i];

            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }

          sourceObj = filter !== false && getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

        return destObj;
      };
      /**
       * Determines whether a string ends with the characters of a specified string
       *
       * @param {String} str
       * @param {String} searchString
       * @param {Number} [position= 0]
       *
       * @returns {boolean}
       */


      endsWith = (str, searchString, position) => {
        str = String(str);

        if (position === undefined || position > str.length) {
          position = str.length;
        }

        position -= searchString.length;
        const lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      };
      /**
       * Returns new array from array like object or null if failed
       *
       * @param {*} [thing]
       *
       * @returns {?Array}
       */


      toArray = thing => {
        if (!thing) return null;
        if (isArray(thing)) return thing;
        let i = thing.length;
        if (!isNumber(i)) return null;
        const arr = new Array(i);

        while (i-- > 0) {
          arr[i] = thing[i];
        }

        return arr;
      };
      /**
       * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
       * thing passed in is an instance of Uint8Array
       *
       * @param {TypedArray}
       *
       * @returns {Array}
       */
      // eslint-disable-next-line func-names


      isTypedArray = (TypedArray => {
        // eslint-disable-next-line func-names
        return thing => {
          return TypedArray && thing instanceof TypedArray;
        };
      })(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
      /**
       * For each entry in the object, call the function with the key and value.
       *
       * @param {Object<any, any>} obj - The object to iterate over.
       * @param {Function} fn - The function to call for each entry.
       *
       * @returns {void}
       */


      forEachEntry = (obj, fn) => {
        const generator = obj && obj[Symbol.iterator];
        const iterator = generator.call(obj);
        let result;

        while ((result = iterator.next()) && !result.done) {
          const pair = result.value;
          fn.call(obj, pair[0], pair[1]);
        }
      };
      /**
       * It takes a regular expression and a string, and returns an array of all the matches
       *
       * @param {string} regExp - The regular expression to match against.
       * @param {string} str - The string to search.
       *
       * @returns {Array<boolean>}
       */


      matchAll = (regExp, str) => {
        let matches;
        const arr = [];

        while ((matches = regExp.exec(str)) !== null) {
          arr.push(matches);
        }

        return arr;
      };
      /* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */


      isHTMLForm = kindOfTest('HTMLFormElement');

      toCamelCase = str => {
        return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
          return p1.toUpperCase() + p2;
        });
      };
      /* Creating a function that will check if an object has a property. */


      hasOwnProperty = (({
        hasOwnProperty
      }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
      /**
       * Determine if a value is a RegExp object
       *
       * @param {*} val The value to test
       *
       * @returns {boolean} True if value is a RegExp object, otherwise false
       */


      isRegExp = kindOfTest('RegExp');

      reduceDescriptors = (obj, reducer) => {
        const descriptors = Object.getOwnPropertyDescriptors(obj);
        const reducedDescriptors = {};
        forEach(descriptors, (descriptor, name) => {
          let ret;

          if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
          }
        });
        Object.defineProperties(obj, reducedDescriptors);
      };
      /**
       * Makes all methods read-only
       * @param {Object} obj
       */


      freezeMethods = obj => {
        reduceDescriptors(obj, (descriptor, name) => {
          // skip restricted props in strict mode
          if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
            return false;
          }

          const value = obj[name];
          if (!isFunction(value)) return;
          descriptor.enumerable = false;

          if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
          }

          if (!descriptor.set) {
            descriptor.set = () => {
              throw Error('Can not rewrite read-only method \'' + name + '\'');
            };
          }
        });
      };

      toObjectSet = (arrayOrString, delimiter) => {
        const obj = {};

        const define = arr => {
          arr.forEach(value => {
            obj[value] = true;
          });
        };

        isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
        return obj;
      };

      noop = () => {};

      toFiniteNumber = (value, defaultValue) => {
        return value != null && Number.isFinite(value = +value) ? value : defaultValue;
      };

      ALPHA = 'abcdefghijklmnopqrstuvwxyz';
      DIGIT = '0123456789';
      ALPHABET = {
        DIGIT,
        ALPHA,
        ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
      };

      generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
        let str = '';
        const {
          length
        } = alphabet;

        while (size--) {
          str += alphabet[Math.random() * length | 0];
        }

        return str;
      };

      toJSONObject = obj => {
        const stack = new Array(10);

        const visit = (source, i) => {
          if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
              return;
            }

            if (!('toJSON' in source)) {
              stack[i] = source;
              const target = isArray(source) ? [] : {};
              forEach(source, (value, key) => {
                const reducedValue = visit(value, i + 1);
                !isUndefined(reducedValue) && (target[key] = reducedValue);
              });
              stack[i] = undefined;
              return target;
            }
          }

          return source;
        };

        return visit(obj, 0);
      };

      isAsyncFn = kindOfTest('AsyncFunction');

      isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch); // original code
      // https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34


      _setImmediate = ((setImmediateSupported, postMessageSupported) => {
        if (setImmediateSupported) {
          return setImmediate;
        }

        return postMessageSupported ? ((token, callbacks) => {
          _global.addEventListener("message", ({
            source,
            data
          }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          }, false);

          return cb => {
            callbacks.push(cb);

            _global.postMessage(token, "*");
          };
        })(`axios@${Math.random()}`, []) : cb => setTimeout(cb);
      })(typeof setImmediate === 'function', isFunction(_global.postMessage));

      asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate; // *********************

      _export("default", {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isBoolean,
        isObject,
        isPlainObject,
        isReadableStream,
        isRequest,
        isResponse,
        isHeaders,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isRegExp,
        isFunction,
        isStream,
        isURLSearchParams,
        isTypedArray,
        isFileList,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        forEachEntry,
        matchAll,
        isHTMLForm,
        hasOwnProperty,
        hasOwnProp: hasOwnProperty,
        // an alias to avoid ESLint no-prototype-builtins detection
        reduceDescriptors,
        freezeMethods,
        toObjectSet,
        toCamelCase,
        noop,
        toFiniteNumber,
        findKey,
        global: _global,
        isContextDefined,
        ALPHABET,
        generateString,
        isSpecCompliantForm,
        toJSONObject,
        isAsyncFn,
        isThenable,
        setImmediate: _setImmediate,
        asap
      });
    }
  };
});
//# sourceMappingURL=36e67990ba5d8e9b951d9d019839ef61f336806d.js.map