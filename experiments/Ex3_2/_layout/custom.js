setTimeout(function() {

  var getLineHeight = function(el) {
    return parseInt(document
                    .defaultView
                    .getComputedStyle(el, null)["line-height"]
                    .replace("px",""));
  }
  
  $("li:has(.content) > .annotation")
    .filter(function(i, a) {
      var p = $(a).find("p")[0];
      if (!p) {
        return false;
      }
      
      var c = $(this).parent().find(".content")[0];
      return $(p).height() > $(c).outerHeight();
    })
    .addClass("folded")
    .prepend($("<span class='ellipsis'>+</span>").click(function(e) {
      $(this).parent().toggleClass("folded");

      if ($(this).text() == "+") {
        $(this).text("-")
      } else {
        $(this).text("+")
      }
    }))

}, 200);
