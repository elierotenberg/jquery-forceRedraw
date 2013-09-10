(function($) {
    "use strict";
    $.fn.forceRedraw = function() {            // Force the redrawing of each element of the selection, using Vasil Dinkov's hack
        this.each(function(k, el) {
            var save = el.style.display;
            el.style.display = 'none';
            el.offsetHeight; // Evaluation of offsetHeight is enough to force the redrawing
            el.style.display = 'block';
            el.style.display = save;
        });
        return this;
    }
})(jQuery);
