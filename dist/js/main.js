jQuery(function($){




    // *********** Invert Scroll ***********
  $.jInvertScroll(['#city', '#clouds', '#theContent']);


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

    // **** CLOSE THE CONTENT ****
    $('#theContentClose').click(function() {
       $('.contentBlock').css('display', 'none');
    });

















  // ========================= //
  }); // == CLOSING JQUERY == //
