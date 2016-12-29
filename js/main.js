(function ($, root, undefined) {
    
  'use strict';

  // RAF shim
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  // Code goes here
  
})(jQuery, this);
