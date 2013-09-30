(function ( $ ) {

  $.fn.responsiveTable = function( options ) {
    options = $.extend({
      hover: true
    }, options);

    this.each(function(index, el){
      if (el.tagName.toLowerCase() !== 'table') {
        throw 'Responsive Tables: This method only works on table elements';
      }

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

      // Add position styling to copied table and add class for styling
      $copy.css({
        position: 'absolute',
        top: 0,
        left: 0
      }).addClass('fixedColumn');

      // Adjust height to account for hidden row contents
      $.each($el.find('tr'), function(index, el){
        $copy.find('tr:eq(' + index + ')').css({height: $(el).outerHeight()});
      });

      // Add copied table to the wrapper to show it
      $wrapper.append($copy);

      // Handle hover styling
      if (options.hover) {
        var hilight = function(event){
          // get index of hovered tr
          var index = event.currentTarget.sectionRowIndex,
          // add hover class if mouse enter else, remove it
            action = (event.type === 'mouseenter') ? 'addClass' : 'removeClass';

          // Add hover class to both tables
          $el.find('tbody tr:eq(' + index + ')')[action]('hover');
          $copy.find('tbody tr:eq(' + index + ')')[action]('hover');
        };

        // Listen for hover event and do hilighting
        $el.find('tbody tr').hover(hilight);
        $copy.find('tbody tr').hover(hilight);
      }
    });
  };

}( jQuery ));
