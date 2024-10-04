System.register([], function (_export, _context) {
  "use strict";

  var asyncIterator, readBlob;
  return {
    setters: [],
    execute: function () {
      ({
        asyncIterator
      } = Symbol);

      readBlob = async function* (blob) {
        if (blob.stream) {
          yield* blob.stream();
        } else if (blob.arrayBuffer) {
          yield await blob.arrayBuffer();
        } else if (blob[asyncIterator]) {
          yield* blob[asyncIterator]();
        } else {
          yield blob;
        }
      };

      _export("default", readBlob);
    }
  };
});
//# sourceMappingURL=0b992394910af0960eebc5f8ad8547349874793a.js.map