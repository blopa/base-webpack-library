(function (global) {
  // main class
  var YourLibName = function (yourLibInitData) {
    return YourLibName.init(yourLibInitData);
  };

  // attributes
  YourLibName.prototype = {};
  YourLibName.init = function () {
    // TODO
  };
  YourLibName.init.prototype = YourLibName.prototype;

  // attach YourLibName to global scope
  global.YourLibName = YourLibName;

}(window));

