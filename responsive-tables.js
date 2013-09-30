(function ( $ ) {

  $.fn.responsiveTable = function( options ) {
    options = $.extend({
      hover: true
    }, options);

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
        display: 'inline-block',
        'max-width': '100%',
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

      // Handle hover styling
      if (options.hover) {
        var hilight = function(event){
          // get index of hovered tr
          var index = event.currentTarget.sectionRowIndex;

          // Add hover class to both tables
          $el.find('tbody > tr:eq(' + index + ')').addClass('hover');
          $copy.find('tbody > tr:eq(' + index + ')').addClass('hover');
        },
        unhilight = function(event){
          // get index of hovered tr
          var index = event.currentTarget.sectionRowIndex;

          // Remove hover class
          $el.find('tbody > tr:eq(' + index + ')').removeClass('hover');
          $copy.find('tbody > tr:eq(' + index + ')').removeClass('hover');
        };

        // Listen for hover event and do hilighting
        $el.find('tr').hover(hilight, unhilight);
        $copy.find('tr').hover(hilight, unhilight);
      }
    });
  };

}( jQuery ));
