require('./_cta.scss');

const jquery = require('jquery');

jquery(function ($) {
    'use strict';
    if ($('.cta').length > 0) {
        if ($('.link-out').length > 0) {
            $('.link-out').append('<i class="material-icons">open_in_new</i>');
        }

        if ($('.learn-more').length > 0) {
            $('.learn-more').append('<i class="material-icons">keyboard_arrow_right</i>');
        }
    }

});
