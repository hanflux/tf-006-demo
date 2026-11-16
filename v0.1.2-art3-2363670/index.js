System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, bcr, application;
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      bcr = canvas.parentElement.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      System["import"]('cc').then(function (engine) {
        // Startup failures use explicit document reload, never repeated asset retries.
        engine.assetManager.downloader.maxRetryCount = 0;
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
        if (window.__TF006_BOOT__) window.__TF006_BOOT__.fail();
      });
    }
  };
});