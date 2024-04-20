
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $(".attr,.size").on("click", function () {
        var clase = $(this).attr("class");

        $("." + clase).removeClass("active");
        $(this).addClass("active");

        var to_slide = $(this).attr("data-slide-to");
        $(".carousel-item [data-slide-no=" + parseInt(to_slide) + "]").addClass("active");
    })

    //-- Click on QUANTITY
    $(".btn-minus").on("click", function () {
        var now = $(".section > div > input").val();
        if ($.isNumeric(now)) {
            if (parseInt(now) - 1 > 0) { now--; }
            $(".section > div > input").val(now);
        } else {
            $(".section > div > input").val("1");
        }
        finalCost();
    })
    $(".btn-plus").on("click", function () {
        var now = $(".section > div > input").val();
        if ($.isNumeric(now)) {
            $(".section > div > input").val(parseInt(now) + 1);
        } else {
            $(".section > div > input").val("1");
        }
        finalCost();
    })

    /**
   * Get Year
   */
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("getYear").innerHTML = year;
});

function restartMarquee() {
    var scrollingText = document.querySelector('.scrolling-text');
    scrollingText.innerHTML += '<p>' + scrollingText.innerHTML + '</p>';
}

setTimeout(restartMarquee, 20000); // Restart after 10 seconds

function finalCost() {
    var cat = document.getElementById("category").value;
    var qty = document.getElementById("qty").value;

    var total = (parseInt(cat) * parseInt(qty));

    document.getElementById("result").innerHTML = '$ ' + total;
}


window.fbAsyncInit = function () {
    var ruuid = 'cf_' + (new Array(16).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); }));
    var fbPluginElement = document.querySelector('.fb-messenger-checkbox');
    if (fbPluginElement) {
        fbPluginElement.setAttribute('user_ref', ruuid);
        fbPluginElement.setAttribute('origin', window.location.href);
    }
    window.confirmOptIn = function () { FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, { app_id: "1678638095724206", page_id: "856481214463511", ref: "", user_ref: ruuid }); };
    FB.init({ appId: "1678638095724206", xfbml: true, version: "v2.6" });
};

//News Carousel  
// var app = $("#app"),
//   loading = $(".news-loading"),
//   newsTitles = $(".news-title"),
//   newsTitlesContainer = $(".news-titles-container"),
//   paused = false,
//   i = 0,
//   timer = 2000;

// start the news with the first item
// $(newsTitlesContainer).html(loading).addClass("news-title");
// $(app).html(newsTitles[0]);
//autoplay the news
// var slider = setInterval(function() {
//   if (!paused) {
//     if (i === newsTitles.length) {
//       i = 0;
//       $(newsTitles).each(function() {
//         $(app).html(newsTitles[i]);
//       });
//     } else {
//       i = i + 1;
//       $(newsTitles).each(function() {
//         $(app).html(newsTitles[i]);
//       });
//     }
//   }
// }, timer);

