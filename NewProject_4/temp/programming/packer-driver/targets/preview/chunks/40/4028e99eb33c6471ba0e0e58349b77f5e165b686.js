'use strict';

System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var utils;

  /**
   * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
   *
   * @param {string} name - The name of the property to get.
   *
   * @returns An array of strings.
   */
  function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
      return match[0] === '[]' ? '' : match[1] || match[0];
    });
  }
  /**
   * Convert an array to an object.
   *
   * @param {Array<any>} arr - The array to convert to an object.
   *
   * @returns An object with the same keys and values as the array.
   */


  function arrayToObject(arr) {
    var obj = {};
    var keys = Object.keys(arr);
    var i;
    var len = keys.length;
    var key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }

    return obj;
  }
  /**
   * It takes a FormData object and returns a JavaScript object
   *
   * @param {string} formData The FormData object to convert to JSON.
   *
   * @returns {Object<string, any> | null} The converted object.
   */


  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      var name = path[index++];
      if (name === '__proto__') return true;
      var isNumericKey = Number.isFinite(+name);
      var isLast = index >= path.length;
      name = !name && utils.isArray(target) ? target.length : name;

      if (isLast) {
        if (utils.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }

        return !isNumericKey;
      }

      if (!target[name] || !utils.isObject(target[name])) {
        target[name] = [];
      }

      var result = buildPath(path, value, target[name], index);

      if (result && utils.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }

      return !isNumericKey;
    }

    if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
      var obj = {};
      utils.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }

    return null;
  }

  return {
    setters: [function (_unresolved_) {
      utils = _unresolved_.default;
    }],
    execute: function () {
      _export("default", formDataToJSON);
    }
  };
});
//# sourceMappingURL=4028e99eb33c6471ba0e0e58349b77f5e165b686.js.map