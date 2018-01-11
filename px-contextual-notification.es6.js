(function() {
  'use strict';

  Polymer({
    is: 'px-contextual-notification',
    properties:{

      /**
       * The icon to display on the left side of the contextual notification
       * @type {String}
       */
      statusIcon: {
        type: String,
        value: ''
      },
      /**
       * The content to display in the contextual notification
       * @type {String}
       */
      content: {
        type: String
      },
      /**
       * The icon or button to display on the right side of the contextual
       * notification
       * @type {String}
       */
      actionIcon: {
        type: String,
        value: ''
      },
      /**
       * The type of contextual notification defines the visual styling. Should
       * be one of important, warning, error, info/information, healthy, or unknown.
       * @type {String}
       */
      type: {
        type: String,
        value: 'info'
      },
      /**
       * The size of the contextual notification, e.g. regular or small. This
       * will be reflected as the height of the notification and should be
       * based on the size of the content in the notification.
       * @type {String}
       */
      size: {
        type: String,
        value: 'regular'
      }
    }
  });
})();
