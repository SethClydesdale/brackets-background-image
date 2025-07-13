define(function(require, exports, module) {
  'use strict';

  // Brackets modules
  var ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
      CommandManager = brackets.getModule('command/CommandManager'),
      Menus = brackets.getModule('command/Menus'),
      AppInit = brackets.getModule('utils/AppInit'),
      cmdText = 'Change Background',
      cmdId = 'bracketsBackgroundImage',
      cmdKey = 'Ctrl-Alt-B',
      numberOfBackgrounds = 5;

  // set initial background
  $('body').addClass('bg-' + (Math.floor(Math.random() * numberOfBackgrounds) + 1))

  // set command for randomly changing the background
  AppInit.appReady(function () {
    CommandManager.register(cmdText, cmdId, function() {
      document.body.className = document.body.className.replace(/bg-\d+/, '');
      $('body').addClass('bg-' + (Math.floor(Math.random() * numberOfBackgrounds) + 1))
    });
    
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(cmdId, cmdKey);
  });
  
  // Load our background image from the stylesheet
  ExtensionUtils.loadStyleSheet(module, "resources/styles.css");
});
