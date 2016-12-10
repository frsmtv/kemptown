jQuery(function($){




    // *********** Invert Scroll ***********
  $.jInvertScroll(['#city', '#camion', '#clouds', '#theContent']);


    // **** Close introMessage ****
    $("#introMessageClose").click(function(){
        $("#introMessage").hide();
    });

    $('#camion').click(function() {
        $('#introMessage').hide();
    });

    // **** Menu & Close images SWAP ****
    var imgSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function () {
        $('img.imgSwap').hover(imgSwap, imgSwap);
    });


















  // ========================= //
  }); // == CLOSING JQUERY == //
