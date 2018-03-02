
          $(function() {
       $('.navbars a').on('click', function(){
    $('.navbars-toggle').click();
        });
    });
//         $(function() {
//       $('#hostmenu a').on('click', function(){
//    $('.navbar-toggle').click();
//        });
//    });
        $(document).ready(function() {
            // hides the slickbox as soon as the DOM is ready
            // (a little sooner than page load)
            $('#contentbox').children('div').hide();
            // toggles the slickbox on clicking the noted link 
            $('a#jqtextcall1').click(function() {
                $('#hiddenbox1').slideToggle(400);
                return false;
            });
            $('a#jqtextcall2').click(function() {
                $('#hiddenbox2').slideToggle(400);
                return false;
            });
            $('a#jqtextcall3').click(function() {
                $('#hiddenbox3').slideToggle(400);
                return false;
            });
            $('a#jqtextcall4').click(function() {
                $('#hiddenbox4').slideToggle(400);
                return false;
            });
            $('a#jqtextcall5').click(function() {
                $('#hiddenbox5').slideToggle(400);
                return false;
            });
            $('a#jqtextcall6').click(function() {
                $('#hiddenbox6').slideToggle(400);
                return false;
            });
            $('a#jqtextcall7').click(function() {
                $('#hiddenbox7').slideToggle(400);
                return false;
            });
            $('a#jqtextcall8').click(function() {
                $('#hiddenbox8').slideToggle(400);
                return false;
            });
            $('a#jqtextcall9').click(function() {
                $('#hiddenbox9').slideToggle(400);
                return false;
            });
            $('a#jqtextcall10').click(function() {
                $('#hiddenbox10').slideToggle(400);
                return false;
            });
            $('a#jqtextcall11').click(function() {
                $('#hiddenbox11').slideToggle(400);
                return false;
            });
            $('a#jqtextcall12').click(function() {
                $('#hiddenbox12').slideToggle(400);
                return false;
            });
        });
        //
        $(document).ready(function() {
            // Add smooth scrolling to all links in navbar + footer link
            $(".navbarr a, footer a[href='#fullpage']").on('click', function(event) {

                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            });

            $(window).scroll(function() {
                $(".slideanim").each(function() {
                    var pos = $(this).offset().top;

                    var winTop = $(window).scrollTop();
                    if (pos < winTop + 600) {
                        $(this).addClass("slide");
                    }
                });
            });
        })
       
