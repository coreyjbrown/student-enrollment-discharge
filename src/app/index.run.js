(function() {
  'use strict';

  angular
    .module('studentEnrollmentDischarge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
