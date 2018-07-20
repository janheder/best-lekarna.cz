// =============================================================================
// LAZY LOAD
// =============================================================================

var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

// =============================================================================
// SCROLL NAV
// =============================================================================

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    header.addClass("no-scroll");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 0) {
            header.removeClass("no-scroll").addClass("scroll");
        }
        if (scroll <= 0) {
            header.removeClass("scroll").addClass("no-scroll");
        }
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header2 = $(".no-scroll");
    var scroll2 = $(window).scrollTop();
    if (scroll2 > 0) {
        header2.removeClass('no-scroll').addClass("scroll");
    }
    if (scroll < 0) {
        header2.removeClass("scroll").addClass('no-scroll');
    }
});

// =============================================================================
// PRINT STYLING
// =============================================================================

if ($(".print-area").length) {
    $("<style>")
    .prop("type", "text/css")
    .html("\
    @media print {\
        body {\
            position: relative;\
        }\
        body * {\
            visibility: hidden;\
            position: absolute;\
            left: 0px;\
            right: 0px;\
            top: 0px;\
            width: 100%;\
        }\
        .print-area, .print-area *{\
            visibility: visible;\
            position: relative;\
            width: 100%;\
        }\
        @page {size: 100%;  margin: 0mm;}\
    }")
    .appendTo("body");
}

// =============================================================================
// EU COOKIE POLICY
// =============================================================================

$(document).ready(function(){
    $.cookieBar({
        message: 'Tato stránka používá cookies za účelem optimalizace efektivního poskytování služeb.',
        acceptText: 'Rozumím',
        fixed: true,
        bottom: true,
        policyButton: true,
        policyText: 'Více informací',
        policyURL: 'http://www.google.com/intl/en/policies/technologies/cookies/',
    });
});

// =============================================================================
// OBJECT FIT FALLBACK
// =============================================================================

var styletotest = "object-fit";
if (styletotest in document.body.style){
    /*alert("The " + styletotest + " property is supported");*/
}
else {
    $('.post__image-container').each(function () {
        var $container = $(this),
        imgUrl = $container.find('img').attr('src');
        if (imgUrl) {
            $(this).css('backgroundImage', 'url(' + imgUrl + ')');
            $('.post__featured-image').css('display','none');
            $(this).css('background-size','cover');
        }  
    });
}

// =============================================================================
// HERO CAROUSEL CONTROL
// =============================================================================

$(".hero__tab-single").click(function() {
    if ($(".hero__tab-single").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});

$(".hero__tab-single").each(function(i) {
    var x=0;
    $(this).attr('data-slide-to', i + x);
    x++;
});

setInterval(function(){
    var slide_org = $(".swiper-slide-active").attr("data-slide");
    var slide = parseInt(slide_org);

    var slide_nav_org = $(".hero__tab-single.active").attr("data-slide-nav");
    var slide_nav = parseInt(slide_nav_org);

    if (slide != slide_nav){
        $(".hero__tab-single.active").removeClass("active");

        var slide__string = '' + slide;
        $('.hero__tab-single[data-slide-nav = '+slide__string+']').addClass('active');
    }
}, 100);

// =============================================================================
// VARIOUS TOGGLES AND CONTROLS
// =============================================================================

$(".navbar-toggler").click(function() { 
    $("body").toggleClass("active");
    $(".navbar-toggler").toggleClass("collapsed");
    $("#dark-overlay").toggleClass("active");
});

$("#dark-overlay").click(function() { 
    $("body").toggleClass("active");
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-toggler").attr("aria-expanded","false");
    $("#dark-overlay").toggleClass("active");
});

$(".navbar-cart__toggle").click(function() { 
    $("body").toggleClass("active-right");
    $("#dark-overlay-cart").toggleClass("active");
});

$("#dark-overlay-cart").click(function() { 
    $("body").toggleClass("active-right");
    $("#dark-overlay-cart").toggleClass("active");
});

$("#search-toggler-responsive").click(function() { 
    $(".navbar-search").fadeToggle(200);
    $("body").toggleClass("stop-scroll");
});

$("#search-toggler-responsive-close").click(function() { 
    $(".navbar-search").fadeToggle(200);
    $("body").toggleClass("stop-scroll");
});

$("#search-toggler-responsive").click(function() {
    $("#searchbox").focus();
});

// =============================================================================
// FORM VALIDATION AND REQUIRED SETUP
// =============================================================================

$('.billing-address-toggler input').click(function() {
$('.register-form-billing__wrap').slideToggle("slow");
$('.register-form-billing__wrap input:not(#register_form_billing_name, #register_form_billing_dic), .register-form-billing__wrap select').each(function(){
    if(!$(this).prop('required')){
        $(this).prop('required',true);
    }
    else {
    $(this).prop('required',false);
    }
});
});

$('.shipping-address-toggler input').click(function() {
$('.register-form-shipping__wrap').slideToggle("slow");
$('.register-form-shipping__wrap input:not(#register_form_shipping_company), .register-form-shipping__wrap select').each(function(){
    if(!$(this).prop('required')){
        $(this).prop('required',true);
    }
    else {
    $(this).prop('required',false);
    }
});
});

$('#show_password_toggler').click(function() {
    if($("#register_form_password, #register_form_register_password").prop("type") == "text"){
        $("#register_form_password, #register_form_register_password").prop("type","password");
    }
    else {
        $("#register_form_password, #register_form_register_password").prop("type","text");
    }
});

$('.cart-register-toggler input').click(function() {
$('.register-form-register__wrap').slideToggle("slow");
$('.register-form-register__wrap input').each(function(){
    if(!$(this).prop('required')){
        $(this).prop('required',true);
    }
    else {
    $(this).prop('required',false);
    }
});
});

// =============================================================================
// SEARCH AUTOCOMPLETE
// =============================================================================

/*
var options = {
    data: ["blue", "green", "pink", "red", "yellow"]
};
$("#searchbox").easyAutocomplete(options);
*/
$(document).ready(function() {
    $("#eac-container-searchbox").click(function() {
        $("#search-form").submit();
    });
});

// =============================================================================
// ANCHOR LINK SETUP
// =============================================================================

$('a[href*="#anchor"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});

// =============================================================================
// TOOLTIP SETUP
// =============================================================================

$(function () {
  $("[data-toggle='tooltip']").tooltip()
})

// ============================================================================
 // NUMBER SPINNER 
 // ============================================================================

$(function(){
    $(".number-stepper").each(function(){
   
        var SpinnerInput = $(this).find(".number-stepper__input");
        var ButtonUp = $(this).find(".number-stepper__btn-up");
        var ButtonDown = $(this).find(".number-stepper__btn-down");

        if ($(".cart-item-single__sum")[0]){
            var SinglePrice = $(this).closest(".cart-item-single__inner").find(".cart-item-single__sum span");
            var BasePriceSub = parseFloat($(SinglePrice).text().replace(/\,/g,'.')).toFixed(2);
            var BasePrice = BasePriceSub / SpinnerInput.val();

            var SumAllPriceDPH = $(this).closest("form").find(".cart-price-overview__price-small .cart-price-overview__number");
            var SumAllPrice = $(this).closest("form").find(".cart-price-overview__price .cart-price-overview__number");
            var SumAllPriceResponsive = $(".cart-price-overview-responsive__price span");

            var CartNumber = $(".navbar-cart__icon-number");
        }

        $(ButtonUp).click(function(){
            if ($(SpinnerInput).val() < 99){
                $(SpinnerInput).val( Number($(SpinnerInput).val()) + 1 );

                if ($(".cart-item-single__sum")[0]){
                    ChangePrice();
                }
            }
        });
        
        $(ButtonDown).click(function(){
            if ($(SpinnerInput).val() > 1){
                $(SpinnerInput).val( Number($(SpinnerInput).val()) - 1 );

                if ($(".cart-item-single__sum")[0]){
                    ChangePrice();
                }
            }
        });

        $(SpinnerInput).keyup(function(){
                if ($(".cart-item-single__sum")[0]){
                    ChangePrice();
                }
        });     

        function ChangePrice(){
            if ($(".cart-item-single__sum")[0]){
                var SumPrice = BasePrice * $(SpinnerInput).val();
           
                $(SinglePrice).text(SumPrice.toFixed(2).replace(/[.,]00$/, "").replace(/\./g, ','));
                
                var BigPrice = 0;

                $(".cart-item-single__sum span").each(function(){
                    BigPrice +=  parseFloat($(this).text().replace(/\,/g , "."));
                });
                

                
                $(SumAllPriceDPH).text(parseFloat(BigPrice*0.79).toFixed(2).replace(/[.,]00$/, "").replace(/\./g, ','));
                $(SumAllPrice).text(parseFloat(BigPrice).toFixed(2).replace(/[.,]00$/, "").replace(/\./g, ','));
                $(SumAllPriceResponsive).text(BigPrice);


                var CartSum = 0;

                $(".number-stepper__input").each(function(){
                    CartSum +=  parseFloat($(this).val());
                    
                });
                $(CartNumber).text(CartSum);
          
            }
        }

    });

});

// =============================================================================
// MODAL AUTO DISPLAY
// =============================================================================

$(window).on("load",function(){
    $("#modal-info, #modal-add-to-cart").modal("show");
});

// =============================================================================
// HTML5 Speech Recognition API 
// =============================================================================

function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function(e) {
            document.getElementById('searchbox').value
                                        = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('search-form').submit();
        };

        recognition.onerror = function(e) {
            recognition.stop();
        }
    }
}

// =============================================================================
// SWIPER SETUP
// =============================================================================

//SWIPER LOGOS
var carousel_logos = new Swiper('.logos__swiper-wrap', {
    lazy: true,
    spaceBetween: 20,
    slidesPerView: 5,
    grabCursor: true,
    zoom: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next--logos',
      prevEl: '.swiper-button-prev--logos',
    },
    breakpoints: {
        1200: {
          slidesPerView: 4
        },
        991: {
          slidesPerView: 3
        },
        500: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
        }
      }
  });

//SWIPER 4 PRODUCTS
var carousel_4_products = new Swiper('.swiper-container-4-products', {
  lazy: true,
  spaceBetween: -1,
  slidesPerView: 4,
  grabCursor: true,
  zoom: false,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination--4',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next--4',
    prevEl: '.swiper-button-prev--4',
  },
  breakpoints: {
  1200: {
    slidesPerView: 4
  },
  991: {
    slidesPerView: 3
  },
  768: {
    slidesPerView: 2
  },
  320: {
    slidesPerView: 1
  }
}
});

//SWIPER 5 PRODUCTS 
var carousel_5_products = new Swiper('.swiper-container-5-products', {
  lazy: true,
  spaceBetween: -1,
  slidesPerView: 5,
  grabCursor: true,
  zoom: false,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination--5',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next--5',
    prevEl: '.swiper-button-prev--5',
  },
  breakpoints: {
  1200: {
    slidesPerView: 4
  },
  991: {
    slidesPerView: 3
  },
  500: {
    slidesPerView: 2
  },
  320: {
    slidesPerView: 1
  }
}
});

// =============================================================================
// BOTTOM NAV SETUP
// =============================================================================

/*
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-responsive-bottom').outerHeight();
$(window).scroll(function(event) {
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.navbar-responsive-bottom').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.navbar-responsive-bottom').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}
*/

// =============================================================================
// GALLERY SETUP
// =============================================================================

// check if target is photogallery in normal text page or product page and prevent errors
if ($('.product-detail-gallery').length == 0) {
    var initPhotoSwipeFromDOM = function(gallerySelector) {
        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = Array.prototype.slice.call(document.querySelectorAll('.photogallery__figure')),
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for (var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');
                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }
                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };
        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = document.querySelectorAll('.photogallery')[0],
                childNodes = Array.prototype.slice.call(document.querySelectorAll('.photogallery__figure')),
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            // define options (if needed)
            options = {
                loop: false,
                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }
            };
            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
}
// if product carousel gallery is needed
else {
    var initPhotoSwipeFromDOM = function(gallerySelector) {
        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = Array.prototype.slice.call(document.querySelectorAll('.product-detail-gallery__figure')),
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for (var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');
                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }
                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };
        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = document.querySelectorAll('.product-detail-gallery')[0],
                childNodes = Array.prototype.slice.call(document.querySelectorAll('.product-detail-gallery__figure')),
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            // define options (if needed)
            options = {
                loop: false,
                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }
            };
            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
    var initPhotoSwipeFromDOM2 = function(gallerySelector) {
        // parse slide data (url, title, size ...) from DOM elements 
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = Array.prototype.slice.call(document.querySelectorAll('.product-detail-gallery-thumbs__figure')),
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for (var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
                // include only element nodes 
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');
                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }
                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };
        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = document.querySelectorAll('.product-detail-gallery-thumbs')[0],
                childNodes = Array.prototype.slice.call(document.querySelectorAll('.product-detail-gallery-thumbs__figure')),
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            // define options (if needed)
            options = {
                loop: false,
                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();
                    return {
                        x: rect.left,
                        y: rect.top + pageYScroll,
                        w: rect.width
                    };
                }
            };
            // PhotoSwipe opened from URL
            if (fromURL) {
                if (options.galleryPIDs) {
                    // parse real index when custom PIDs are used 
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            // exit if index not found
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
}