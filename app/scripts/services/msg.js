'use strict';

angular.module('EggJogApp')
  .factory('msg', [function() {
    /*
    stupid wrapper around toastr, until it is re-written as a native angular module
    options can be set here
    alternatives: noty, alertify
    toastr.options: {
      "debug": false,
      "positionClass": "toast-top-right",
      "onclick": null,
      "fadeIn": 300,
      "fadeOut": 1000,
      "timeOut": 5000,
      "extendedTimeOut": 1000
    }    
    */
    // toastr.options.iconClasses = {
    //     error: 'icon-exclamation-sign',
    //     info: 'icon-info-sign',
    //     success: 'icon-ok-sign',
    //     warning: 'icon-warning-sign'
    //   };
    toastr.options.timeOut = 0;
    
    return toastr;
  }]);
