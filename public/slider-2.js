
setREVStartSize({ c: 'rev_slider_6_1', rl: [1240, 1024, 768, 480], el: [900, 742, 960, 860], gw: [1440, 1024, 778, 480], gh: [900, 742, 960, 860], layout: 'fullwidth', mh: "0" });
var revapi6,
  tpj;
jQuery(function () {
  tpj = jQuery;
  if (tpj("#rev_slider_6_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_6_1");
  } else {
    revapi6 = tpj("#rev_slider_6_1").show().revolution({
      sliderType: "hero",
      jsFileLocation: "//markovskaia.ru/markovskaia_plugins/revslider/public/assets/js/",
      duration: 4000,
      visibilityLevels: "1240,1024,768,480",
      gridwidth: "1440,1024,778,480",
      gridheight: "900,742,960,860",
      minHeight: "",
      editorheight: "900,742,960,860",
      responsiveLevels: "1240,1024,768,480",
      disableProgressBar: "on",
      parallax: {
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "scroll",
        disable_onmobile: true
      },
      sbtimeline: {
        set: true
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      },
    });
  }

});
setREVStartSize({ c: 'rev_slider_8_2', rl: [1240, 1024, 768, 480], el: [2000, 2220, 1710, 1350], gw: [1240, 1024, 778, 480], gh: [2000, 2220, 1710, 1350], layout: 'fullwidth', mh: "0" });
var revapi8,
  tpj;
jQuery(function () {
  tpj = jQuery;
  if (tpj("#rev_slider_8_2").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_8_2");
  } else {
    revapi8 = tpj("#rev_slider_8_2").show().revolution({
      sliderType: "hero",
      jsFileLocation: "//markovskaia.ru/markovskaia_plugins/revslider/public/assets/js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,768,480",
      gridwidth: "1240,1024,778,480",
      gridheight: "2000,2220,1710,1350",
      minHeight: "",
      lazyType: "all",
      keepBPHeight: true,
      editorheight: "2000,2220,1710,1350",
      responsiveLevels: "1240,1024,768,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      parallax: {
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
        type: "scroll",
        origo: "slideCenter",
        speed: 1000,
        disable_onmobile: true,
        speedls: "1000ms"
      },
      viewPort: {
        enable: true,
        visible_area: "-200px"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      },
    });
  }

});
var htmlDivCss = unescape("body%20%7B%20background%3A%20%23fff%20%21important%3B%20%7D");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if (htmlDiv) {
  htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
  var htmlDiv = document.createElement('div');
  htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
  document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}
if (typeof revslider_showDoubleJqueryError === "undefined") {
function revslider_showDoubleJqueryError(sliderID) {
  var err = "<div class='rs_error_message_box'>";
  err += "<div class='rs_error_message_oops'>Oops...</div>";
  err += "<div class='rs_error_message_content'>";
  err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
  err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
  err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
  err += "</div>";
  err += "</div>";
  jQuery(sliderID).show().html(err);
}
}	