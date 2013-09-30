(function ( $ ) {

  $.fn.responsiveTable = function( options ) {
    this.each(function(index, el){
      var $el = $(el),
        $wrapper = $el.wrap('<div class="responsiveTableContainer" />').parent(),
        $copy = $el.clone();

      // Set position relative so we can position the copied table
      $wrapper.css({
        position: 'relative'
      });

      // Make the original table scroll
      $el.css({
        display: 'block',
        'width': '100%',
        'overflow-x': 'auto'
      });

      // Hide all columns but the first one
      $copy.find('td:not(:first-child), th:not(:first-child)').css({
        'display': 'none'
      });

      // Add position styling to copied table
      $copy.css({
        position: 'absolute',
        top: 0,
        left: 0
      });

      // Add copied table to the wrapper to show it
      $wrapper.append($copy);
    });
  };

}( jQuery ));
