define(function(require, exports, module) {
  'use strict';

  // Brackets modules
  var ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
      numberOfBackgrounds = 5;
  
  $('body').addClass('bg-' + (Math.floor(Math.random() * numberOfBackgrounds) + 1))
  
  // Load our background image from the stylesheet
  ExtensionUtils.loadStyleSheet(module, "resources/styles.css");
});
