import React from 'react'
import Helmet from 'react-helmet'
// import '../layouts/index.css'
// import '../../public/wp-includes/css/dist/block-library/block-library/style.min2513.css?ver=5.2.3'
class IndexPage extends React.Component {
  componentDidMount(){
    window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "http:\/\/markovskaia.ru\/wp-includes\/js\/\wp-emoji-release.min.js?ver=5.2.3" } };
    !function (a, b, c) { function d(a, b) { var c = String.fromCharCode; l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0); var d = k.toDataURL(); l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0); var e = k.toDataURL(); return d === e } function e(a) { var b; if (!l || !l.fillText) return !1; switch (l.textBaseline = "top", l.font = "600 32px Arial", a) { case "flag": return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b); case "emoji": return b = d([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340]), !b }return !1 } function f(a) { var c = b.createElement("script"); c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c) } var g, h, i, j, k = b.createElement("canvas"), l = k.getContext && k.getContext("2d"); for (j = Array("flag", "emoji"), c.supports = { everything: !0, everythingExceptFlag: !0 }, i = 0; i < j.length; i++)c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]); c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () { c.DOMReady = !0 }, c.supports.everything || (h = function () { c.readyCallback() }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onload", h), b.attachEvent("onreadystatechange", function () { "complete" === b.readyState && c.readyCallback() })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji))) }(window, document, window._wpemojiSettings);
    var root = document.getElementsByTagName("html")[0]; root.setAttribute("class", "js"); 
 function setREVStartSize(a) { try { var b, c = document.getElementById(a.c).parentNode.offsetWidth; if (c = 0 === c || isNaN(c) ? window.innerWidth : c, a.tabw = void 0 === a.tabw ? 0 : parseInt(a.tabw), a.thumbw = void 0 === a.thumbw ? 0 : parseInt(a.thumbw), a.tabh = void 0 === a.tabh ? 0 : parseInt(a.tabh), a.thumbh = void 0 === a.thumbh ? 0 : parseInt(a.thumbh), a.tabhide = void 0 === a.tabhide ? 0 : parseInt(a.tabhide), a.thumbhide = void 0 === a.thumbhide ? 0 : parseInt(a.thumbhide), a.mh = void 0 === a.mh || "" == a.mh ? 0 : a.mh, "fullscreen" === a.layout || "fullscreen" === a.l) b = Math.max(a.mh, window.innerHeight); else { for (var d in a.gw = Array.isArray(a.gw) ? a.gw : [a.gw], a.rl) (void 0 === a.gw[d] || 0 === a.gw[d]) && (a.gw[d] = a.gw[d - 1]); for (var d in a.gh = void 0 === a.el || "" === a.el || Array.isArray(a.el) && 0 == a.el.length ? a.gh : a.el, a.gh = Array.isArray(a.gh) ? a.gh : [a.gh], a.rl) (void 0 === a.gh[d] || 0 === a.gh[d]) && (a.gh[d] = a.gh[d - 1]); var e, f = Array(a.rl.length), g = 0; for (var d in a.tabw = a.tabhide >= c ? 0 : a.tabw, a.thumbw = a.thumbhide >= c ? 0 : a.thumbw, a.tabh = a.tabhide >= c ? 0 : a.tabh, a.thumbh = a.thumbhide >= c ? 0 : a.thumbh, a.rl) f[d] = a.rl[d] < window.innerWidth ? 0 : a.rl[d]; for (var d in e = f[0], f) e > f[d] && 0 < f[d] && (e = f[d], g = d); var h = c > a.gw[g] + a.tabw + a.thumbw ? 1 : (c - (a.tabw + a.thumbw)) / a.gw[g]; b = a.gh[g] * h + (a.tabh + a.thumbh) } void 0 === window.rs_init_css && (window.rs_init_css = document.head.appendChild(document.createElement("style"))), document.getElementById(a.c).height = b, window.rs_init_css.innerHTML += "#" + a.c + "_wrapper { height: " + b + "px }" } catch (a) { console.log("Failure at Presize of Slider:" + a) } };
 if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { document.body.className += " using-mobile-browser "; } 
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
var wpcf7 = { "apiSettings": { "root": "http:\/\/markovskaia.ru\/wp-json\/contact-form-7\/v1", "namespace": "contact-form-7\/v1" } };
var nectarLove = { "ajaxurl": "http:\/\/markovskaia.ru\/wp-admin\/admin-ajax.php", "postID": "1296", "rooturl": "http:\/\/markovskaia.ru", "disqusComments": "false", "loveNonce": "80fe6744a7", "mapApiKey": "" };
(function (m, e, t, r, i, k, a) { m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }; m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a) })(window, document, "script", "./mc.yandex.ru/metrika/tag.js", "ym"); ym(54976081, "init", { id: 54976081, clickmap: true, trackLinks: true, trackHash: true, webvisor: true, accurateTrackBounce: true });
jQuery(document).ready(function () {
  
});
  }
  render(){
    return(
 <div>
   {/* <Helmet>
   <link rel='stylesheet' id='wp-block-library-css' href='./wp-includes/css/dist/block-library/style.min2513.css?ver=5.2.3'
            type='text/css' media='all' />
   </Helmet> */}
   <div id="ajax-loading-screen" data-disable-mobile="0" data-disable-fade-on-click="0" data-effect="horizontal_swipe" data-method="standard"><div class="reveal-1"></div><div class="reveal-2"></div></div>
      <div id="header-outer" data-has-menu="true" data-has-buttons="no" data-using-pr-menu="false" data-mobile-fixed="1" data-ptnm="false" data-lhe="animated_underline" data-user-set-bg="#ffffff" data-format="default" data-permanent-transparent="1" data-megamenu-rt="1" data-remove-fixed="0" data-header-resize="1" data-cart="false" data-transparency-option="1" data-box-shadow="none" data-shrink-num="30" data-using-secondary="0" data-using-logo="1" data-logo-height="79" data-m-logo-height="40" data-padding="30" data-full-width="true" data-condense="false" data-transparent-header="true" data-transparent-shadow-helper="false" data-remove-border="true" class="transparent">
        {/* header */}
        <header id="top">
          <div class="container">
            <div class="row">
              <div class="col-3">
                {/* <a id="logo" href="index.html" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="true" data-supplied-ml="true" >
                  <img class="stnd default-logo" alt="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" src="../wp-content/uploads/2019/08/LOGO-adaptive.png" srcset="http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive.png 1x, http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive@2x.png 2x" /><img class="mobile-only-logo" alt="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" src="../wp-content/uploads/2019/08/LOGO-adaptive.png" /><img class="starting-logo mobile-only-logo" alt="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" src="../wp-content/uploads/2019/08/LOGO-adaptive.png" /><img class="starting-logo default-logo" alt="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" src="../wp-content/uploads/2019/08/LOGO-adaptive.png" srcset="http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive.png 1x, http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive@2x.png 2x" /><img class="starting-logo dark-version default-logo" alt="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" src="wp-content/uploads/2019/08/LOGO-adaptive.png" srcset="http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive.png 1x, http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive@2x.png 2x" />
                </a> */}
                  <img class="stnd default-logo" alt="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" src="../static/wp-content/uploads/2019/08/LOGO-adaptive.png" srcset="http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive.png 1x, http://markovskaia.ru/wp-content/uploads/2019/08/LOGO-adaptive@2x.png 2x" />
              </div>
              <div class="col-9 col_last">
                <div class="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-icon-animation="simple-transform">
                  <div> <a href="#sidewidgetarea" aria-label="Navigation Menu" aria-expanded="false" class="closed"> <span aria-hidden="true"> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div>
                </div>

                <nav>
                  <ul class="sf-menu">
                    <li id="menu-item-1572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572"><a href="index.html" aria-current="page">Главная</a></li>
                    <li id="menu-item-1571" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571"><a href="portfolio/index.html">Проекты</a></li>
                    <li id="menu-item-1712" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712"><a href="services/index.html">Услуги и цены</a></li>
                    <li id="menu-item-1897" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897"><a href="about/index.html">Обо мне</a></li>
                    <li id="menu-item-2145" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145"><a href="contacts/index.html">Контакты</a></li>
                    <li id="social-in-menu" class="button_social_group"><a target="_blank" href="https://www.instagram.com/markovskayadesign/"><i class="fa fa-instagram"></i> </a><a target="_blank" href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690"><i class="fa fa-houzz"></i> </a></li>
                  </ul>

                  <ul class="buttons sf-menu" data-user-set-ocm="off">
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div id="search-outer" class="nectar">
        <div id="search">
          <div class="container">
            <div id="search-box">
              <div class="inner-wrap">
                <div class="col span_12">
                  <form role="search" action="http://markovskaia.ru/" method="GET">
                    <input type="text" name="s" value="Start Typing..." data-placeholder="Start Typing..." />

                    <span><i>Press enter to begin your search</i></span>						</form>
                </div>
              </div>
            </div>
            <div id="close"><a href="#">
              <span class="icon-salient-x" aria-hidden="true"></span>				 </a></div>
          </div>
        </div>
      </div>

      {/* Large content */}
      <div id="ajax-content-wrap">
        <div className="container-wrap">
          <div className="container main-content">
            <div className="row">
              <div id="fws_5d84a4cdd8862" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row top-level full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="fade-in">
                  <div className="inner-wrap">
                    <div className="row-bg" />
                  </div>
                  <div className="row-bg-overlay" style={{ backgroundColor: 'rgba(255,255,255,0.43)', opacity: 1 }}>
                  </div>
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="column-inner-wrap">
                      <div data-bg-cover className="column-inner no-extra-padding">
                        <div className="wpb_wrapper">
                          {/* START main larco 1 REVOLUTION SLIDER 6.1.0 */}
                          <p className="rs-p-wp-fix" />
                          <rs-module-wrap id="rev_slider_6_1_wrapper" data-source="gallery" style={{ background: '#ffffff', padding: 0, margin: '0px auto' }}>
                            <rs-module id="rev_slider_6_1" style={{ display: 'none' }} data-version="6.1.0">
                              <rs-slides>
                                <rs-slide data-key="rs-21" data-title="Slide" data-anim="ei:d;eo:d;s:1500ms;r:0;t:fade;sl:d;">
                                  <img src="../static/markovskaia_plugins/revslider/public/assets/assets/transparent.png" title="PRECH MAIN" width="{1922}" height="{1080}" data-parallax="off" classname="rev-slidebg" data-no-retina />
                                  <rs-layer id="slider-6-slide-21-layer-5" data-type="image" data-rsp_ch="on" data-xy="x:r,r,l,c;xo:-288px,-356px,-118px,65px;y:m;yo:-39px,0,0,15px;" data-text="l:22;a:inherit;" data-dim="w:1774px,1774px,100%,1593px;h:997px,997px,100%,895px;" data-basealign="slide" data-sba="t:true;" data-frame_0="sX:1.1;sY:1.1;" data-frame_1="sp:1800;" data-frame_999="o:0;tp:600;st:w;sR:2800;" style={{ zindex: 8, fontfamily: 'roboto' }}><img src="../static/wp-content/uploads/2019/08/PRECH-MAIN2.jpg" width="{1922}" height="{1080}" data-no-retina />
                                  </rs-layer>
                                </rs-slide>
                              </rs-slides>
                              <rs-static-layers>
                                <rs-layer id="slider-6-slide-5-layer-4" classname="rs-layer-static" data-type="text" data-color="#242424||#242424||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;yo:481px,326px,612px,218px;" data-text="s:15,15,16,16;l:22;" data-dim="w:auto,auto,auto,245px;h:auto,auto,auto,71px;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:910;sp:1200;sR:910;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;st:w;sR:1890;" style={{ zindex: 9, fontfamily: 'mazhreg!important', fontstyle: 'normal', lineheight: '116.5%' }}>
                                  Индивидуальная разработка <br />
                                  жилых и общественных <br />
                                  помещений
            </rs-layer>
                                <a id="slider-6-slide-5-layer-9" classname="rs-layer rev-btn rs-layer-static" href="portfolio/index.html" target="_self" rel="nofollow" data-type="button" data-color="#242424" data-xy="xo:107px,45px,46px,24px;y:b;yo:65px,65px,168px,25px;" data-text="s:14,14,16,14;l:45;fw:500;a:center;" data-dim="w:223px,223px,216px,221px;minw:0px,none,none,none;minh:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-padding="r:25,21,16,10;l:25,21,16,10;" data-border="bos:solid;boc:#000000;bow:2px,2px,2px,2px;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:910;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:1890;" data-frame_hover="c:#fff;bgc:#242424;boc:#242424;bor:0px,0px,0px,0px;bos:solid;bow:2px,2px,2px,2px;e:Power1.easeInOut;" style={{ zindex: 13, backgroundcolor: 'rgba(0,0,0,0)', fontfamily: 'mazhmed !important' }}>Портфолио
            </a>
                                <rs-layer id="slider-6-slide-5-layer-11" classname="rs-layer-static" data-type="text" data-color="#242424||#1a1a1a||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;y:m,t,m,t;yo:-183px,81px,-60px,66px;" data-text="s:80,60,80,40;l:80,80,80,50;ls:-1px;fw:300;" data-dim="w:736px,592px,517px,320px;h:90px,auto,94px,58px;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:550;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;e:Power4.easeInOut;st:w;sR:2250;" style={{ zindex: 12, fontfamily: 'mazhmed', fontstyle: 'normal', lineheight: '113.5%' }}>
                                  Современная
            </rs-layer>
                                <rs-layer id="slider-6-slide-5-layer-31" classname="rs-layer-static" data-type="text" data-color="#242424||#1a1a1a||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;y:m,t,m,t;yo:-103px,146px,0,109px;" data-text="s:80,60,80,40;l:80,80,80,50;ls:-1px;fw:300;" data-dim="w:736px,685px,606px,377px;h:93px,90px,84px,auto;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:660;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;e:Power4.easeInOut;st:w;sR:2140;" style={{ zindex: 11, fontfamily: 'mazhmed', fontstyle: 'normal', lineheight: '113.5%' }}>
                                  уютная роскошь
            </rs-layer>
                                <rs-layer id="slider-6-slide-5-layer-32" classname="rs-layer-static" data-type="text" data-color="#242424||#1a1a1a||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;y:m,t,m,t;yo:-29px,207px,69px,156px;" data-text="s:80,60,80,40;l:80,80,80,50;ls:-1px;fw:300;" data-dim="w:736px,514px,441px,336px;h:95px,auto,88px,auto;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:790;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;e:Power4.easeInOut;st:w;sR:2010;" style={{ zindex: 10, fontfamily: 'mazhmed', fontstyle: 'normal', lineheight: '113.5%' }}>
                                  в интерьере
            </rs-layer>
                                <rs-layer id="slider-6-slide-5-layer-37" classname="tp-shape tp-shapewrapper rs-layer-static" data-type="shape" data-xy="xo:-167px,-1px,-634px,-1px;yo:0,-461px,6px,-8px;" data-text="fw:100,400,400,400;a:inherit;" data-dim="w:638px,412px,601px,481px;h:100%,1308%,1290px,424px;" data-vbility="t,t,f,f" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="o:1;" data-frame_1="sR:10;" data-frame_999="o:0;tp:600;st:w;sR:3690;" style={{ zindex: 8, backgroundcolor: '#ffffff', fontfamily: 'roboto' }}>
                                </rs-layer>
                              </rs-static-layers>
                              <rs-progress classname="rs-bottom" style={{ visibility: 'hidden !important' }}>
                              </rs-progress></rs-module>
                          </rs-module-wrap>
                          {/* END REVOLUTION SLIDER */}
                        </div>
                      </div >
                    </div >
                  </div >
                </div >
              </div >
              <div id="fws_5d84a4cddda4d" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 vc_hidden-sm vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default">
                          <div style={{ height: '140px' }} className="divider" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="discover" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg using-bg-color" style={{ backgroundColor: '#f2f2f2' }} />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={150}>
                    <div className="column-bg-overlay" />
                    <div className="column-inner-wrap">
                      <div data-bg-cover className="column-inner padding-7-percent">
                        <div className="wpb_wrapper">
                          <div id="fws_5d84a4cdddfcd" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <div className="row-bg-wrap">
                              <div className="row-bg   "  />
                            </div>
                            <div className="col span_12  left">
                              <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="divider-wrap" data-alignment="default">
                                      <div style={{ height: '20px' }} className="divider" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="fws_5d84a4cdde1ea" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <div className="row-bg-wrap">
                              <div className="row-bg   "  />
                            </div>
                            <div className="col span_12  left">
                              <div className="vc_col-sm-10 wpb_column column_container vc_column_container col has-animation no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={150}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element  vc_custom_1565972056665">
                                      <div className="wpb_wrapper">
                                        <h1>Предоставляю полный спектр услуг в области
                                          дизайна интерьеров и мебельном бизнесе.</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_col-sm-2 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="fws_5d84a4cdde4fd" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <div className="row-bg-wrap">
                              <div className="row-bg   "  />
                            </div>
                            <div className="col span_12  left">
                              <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="divider-wrap" data-alignment="default">
                                      <div style={{ height: '60px' }} className="divider" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="fws_5d84a4cdde67c" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row  vc_row-o-content-top standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                            <div className="row-bg-wrap">
                              <div className="row-bg   "  />
                            </div>
                            <div className="col span_12  left">
                              <div className="vc_col-sm-2 wpb_column column_container vc_column_container col has-animation no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>Ирина Марковская<br />
                                          Дизайнер интерьеров</p>
                                      </div>
                                    </div>
                                    <div className="divider-wrap" data-alignment="default">
                                      <div style={{ height: '30px' }} className="divider" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_col-sm-4 wpb_column column_container vc_column_container col has-animation padding-3-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>Более 10 лет создаю уникальные, красивые,
                                          функциональные пространства для коммерческих
                                          и жилых проектов по всему миру.</p>
                                      </div>
                                    </div>
                                    <div className="divider-wrap" data-alignment="default">
                                      <div style={{ height: '40px' }} className="divider" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_col-sm-4 wpb_column column_container vc_column_container col has-animation padding-7-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                    <a className="nectar-button large see-through-2 " style={{ borderColor: '#242424', color: '#242424' }} href="about/index.html" data-color-override="#242424" data-hover-color-override="#242424" data-hover-text-color-override="#ffffff"><span>Обо
                                        мне</span></a>
                                    <div className="divider-wrap" data-alignment="default">
                                      <div style={{ height: '30px' }} className="divider" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vc_col-sm-2 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                <div className="column-bg-overlay" />
                                <div className="vc_column-inner">
                                  <div className="wpb_wrapper">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cdded45" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-3-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top-bottom" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cddee82" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '30px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cddf003" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-split-heading">
                          <div className="heading-line">
                            <div>
                              <h1 style={{ textAlign: 'center' }}>Реализованные</h1>
                            </div>
                          </div>
                          <div className="heading-line">
                            <div>
                              <h1 style={{ textAlign: 'center' }}>проекты</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cddf211" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">


                        {/* START Peak Portfolio1 REVOLUTION SLIDER 6.1.0 */}
                        <p className="rs-p-wp-fix" />
                        {/* ye rs module kaam nhi kr raha bus */}
                        <rs-module-wrap id="rev_slider_8_2_wrapper" data-source="gallery" style={{ background: 'transparent', padding: 0, margin: '0px auto', marginTop: 0, marginBottom: 0 }}>
                          <rs-module id="rev_slider_8_2" style={{ display: 'none' }} data-version="6.1.0">
                            <rs-slides>
                              <rs-slide data-key="rs-26" data-title="Slide" data-anim="ei:d;eo:d;s:300ms;r:0;t:fade;sl:0;">
                                <img src="../static/markovskaia_plugins/revslider/public/assets/assets/dummy.png" title="Ирина Марковская | Частный дизайнер интерьеров" data-lazyload="//markovskaia.ru/markovskaia_plugins/revslider/public/assets/assets/transparent.png" data-bg="c:#ffffff;" data-parallax="off" className="rev-slidebg" data-no-retina />
                                <a id="slider-8-slide-26-layer-2" className="rs-layer rs-pxl-1 rs-pxmask" href="projects/udaltsova/index.html" target="_self" rel="nofollow" data-type="image" data-xy="x:c;xo:434px,400px,244px,165px;yo:174px,270px,231px,259px;" data-dim="w:663px,400px,427px,287px;h:663px,400px,427px,287px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_0_mask="u:t;" data-frame_1="e:Power4.easeOut;st:400;sp:1000;sR:400;" data-frame_1_mask="u:t;" data-frame_999="st:w;sR:7600;" data-frame_hover="sX:1.05;sY:1.05;bgc:rgba(255,255,255,0);sp:500ms;e:Power1.easeInOut;gra:0%;bri:110%;blu:0px;m:true;" style={{ zIndex: 16, fontFamily: 'Roboto', cursor: 'pointer' }}><img src="../static/markovskaia_plugins/revslider/public/assets/assets/dummy.png" width={1024} height={1024} data-lazyload="//markovskaia.ru/wp-content/uploads/2019/09/UDAL_FOLIO-1-1024x1024.jpg" data-no-retina />
                                </a>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-3" className="h2" data-type="text" data-color="#242424" data-xy="x:c;xo:177px,177px,110px,1px;yo:389px,389px,402px,305px;" data-text="w:normal;s:40,40,30,30;l:0,6,30,30;ls:-1px;a:left,left,left,center;" data-dim="w:393px,393px,260px,481px;" data-rsp_o="off" data-wrpcls="h2" data-rsp_bd="off" data-padding="t:30;b:30;" data-border="bow:0,0,0,50px;" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:350;sp:1000;sR:350;" data-frame_999="st:w;sR:7650;" data-frame_hover="c:#000;bos:none;bow:0,0,0,0;" style={{ zIndex: 19, fontFamily: 'MAZHMED!important', cursor: 'pointer' }}>
                                  Удальцова
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-5" data-type="shape" data-xy="x:c;xo:0,0,0,-5px;yo:384px,384px,404px,308px;" data-dim="w:40px;h:71px,71px,87px,87px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;sp:1350;" data-frame_999="st:w;sR:7650;" style={{ zIndex: 18, backgroundColor: '#ffffff', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-6" data-type="text" data-color="#242424" data-xy="x:c;xo:-232px,-160px,-137px,1px;yo:918px,750px,674px,646px;" data-text="w:normal;s:40,40,30,30;l:10,10,30,30;ls:-1px;a:right,right,right,center;" data-dim="w:511px,511px,312px,480px;h:69px,69px,87px,87px;" data-rsp_o="off" data-rsp_bd="off" data-padding="t:30;b:30;" data-border="bow:0,0,0,50px;" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:350;sp:1000;sR:350;" data-frame_999="st:w;sR:7650;" data-frame_hover="c:#000;bos:none;bow:0,0,0,0;" style={{ zIndex: 15, fontFamily: 'MAZHMED!important', cursor: 'pointer' }}>
                                  Пречистенка
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-7" data-type="shape" data-xy="x:c;xo:0,0,-1px,-1px;yo:902px,754px,677px,652px;" data-dim="w:40px;h:104px,104px,83px,81px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:400;sp:1000;sR:400;" data-frame_999="st:w;sR:7600;" style={{ zIndex: 14, backgroundColor: '#ffffff', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*

							*/}<a id="slider-8-slide-26-layer-8" className="rs-layer rs-pxl-1 rs-pxmask" href="projects/prechistenka/index.html" target="_self" rel="nofollow" data-type="image" data-xy="x:c;xo:-435px,-310px,-221px,-162px;yo:704px,670px,580px,620px;" data-dim="w:663px,400px,386px,276px;h:663px,400px,386px,276px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_0_mask="u:t;" data-frame_1="e:Power4.easeOut;st:450;sp:1000;sR:450;" data-frame_1_mask="u:t;" data-frame_999="st:w;sR:7550;" data-frame_hover="sX:1.05;sY:1.05;sp:500ms;e:Power1.easeInOut;gra:0%;bri:110%;blu:0px;m:true;" style={{ zIndex: 12, fontFamily: 'Roboto', cursor: 'pointer' }}><img src="../static/markovskaia_plugins/revslider/public/assets/assets/dummy.png" width={1024} height={1024} data-lazyload="//markovskaia.ru/wp-content/uploads/2019/09/PRECH_FOLIO-1024x1024.jpg" data-no-retina />
                                </a>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-11" data-type="text" data-color="#242424" data-xy="x:c;xo:243px,160px,139px,2px;yo:1410px,1150px,974px,1022px;" data-text="w:normal;s:40,40,30,30;l:0,6,30,30;ls:-1px;a:left,left,left,center;" data-dim="w:539px,539px,322px,472px;h:58px,58px,120px,88px;" data-rsp_o="off" data-rsp_bd="off" data-padding="t:30;b:30;" data-border="bow:0,0,0,50px;" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:350;sp:1000;sR:350;" data-frame_999="st:w;sR:7650;" data-frame_hover="c:#000;bos:none;bow:0,0,0,0;" style={{ zIndex: 11, fontFamily: 'MAZHMED!important', cursor: 'pointer' }}>
                                  Детские комнаты
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-12" data-type="shape" data-xy="x:c;yo:1388px,1154px,974px,1026px;" data-dim="w:40px;h:105px,105px,87px,90px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;sp:1000;" data-frame_999="st:w;sR:8000;" style={{ zIndex: 9, backgroundColor: '#ffffff', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*

							*/}<a id="slider-8-slide-26-layer-13" className="rs-layer rs-pxl-1 rs-pxmask" href="projects/detskie/index.html" target="_self" rel="nofollow" data-type="image" data-xy="x:c;xo:434px,400px,228px,166px;yo:1177px,1070px,884px,979px;" data-dim="w:662px,400px,393px,280px;h:662px,400px,393px,280px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_0_mask="u:t;" data-frame_1="e:Power4.easeOut;st:450;sp:1000;sR:450;" data-frame_1_mask="u:t;" data-frame_999="st:w;sR:7550;" data-frame_hover="sX:1.05;sY:1.05;sp:500ms;e:Power1.easeInOut;bri:110%;m:true;" style={{ zIndex: 10, fontFamily: 'Roboto', cursor: 'pointer' }}><img src="../static/markovskaia_plugins/revslider/public/assets/assets/dummy.png" width={1024} height={1024} data-lazyload="//markovskaia.ru/wp-content/uploads/2019/09/DETS_FOLIO-1024x1024.jpg" data-no-retina />
                                </a>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-14" data-type="shape" data-xy="x:c;yo:28px;" data-dim="w:1px;h:100%;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-frame_0="sY:0;o:1;oY:0%;" data-frame_1="oY:0%;e:Power2.easeInOut;st:700;sp:2000;sR:700;" data-frame_999="st:w;sR:6300;" style={{ zIndex: 8, backgroundColor: '#242424', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-15" data-type="shape" data-xy="x:c;xo:452px,-464px,-382px,-452px;yo:165px,566px,525px,481px;" data-dim="w:711px;h:155px,155px,110px,110px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="o:1;" data-frame_999="st:w;sR:8700;" style={{ zIndex: 20, backgroundColor: '#ffffff', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-16" data-type="shape" data-xy="x:c;xo:-455px,551px,381px,663px;yo:693px,964px,845px,680px;" data-dim="w:711px;h:155px,155px,110px,110px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="o:1;" data-frame_999="st:w;sR:8700;" style={{ zIndex: 17, backgroundColor: '#ffffff', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*

							*/}
                                <rs-layer id="slider-8-slide-26-layer-17" data-type="shape" data-xy="x:c;xo:454px,553px,371px,563px;yo:1171px,184px,197px,805px;" data-dim="w:711px;h:155px,155px,110px,110px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="o:1;" data-frame_1="sp:700;" data-frame_999="st:w;sR:8300;" style={{ zIndex: 13, backgroundColor: '#ffffff', fontFamily: 'Roboto' }}>
                                </rs-layer>
                                {/*
*/}
                              </rs-slide>
                            </rs-slides>
                            <rs-progress className="rs-bottom" style={{ visibility: 'hidden !important' }}>
                            </rs-progress>
                          </rs-module>
                        </rs-module-wrap>
                        {/* END REVOLUTION SLIDER */}
                        <div id="fws_5d84a4cde6374" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 wpb_column column_container vc_column_container col centered-text has-animation padding-3-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <a className="nectar-button large see-through-2 " style={{ borderColor: '#242424', color: '#242424' }} href="portfolio/index.html" data-color-override="#242424" data-hover-color-override="#242424" data-hover-text-color-override="#ffffff"><span>Все
                                      проекты</span></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cde6791" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top-left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default">
                          <div style={{ height: '60px' }} className="divider" />
                        </div>
                        <div className="nectar-split-heading">
                          <div className="heading-line">
                            <div>
                              <h1 style={{ textAlign: 'left' }}>Услуги</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cde6a76" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={500}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default">
                          <div style={{ height: '30px' }} className="divider" />
                        </div>
                        <div className="toggles " data-style="minimal">
                          <div className="toggle default">
                            <h3><a href="#"><i className="icon-plus-sign" />Полный дизайн-проект</a>
                            </h3>
                            <div>
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                              <div id="fws_5d84a4cde70e3" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                <div className="row-bg-wrap">
                                  <div className="row-bg   "  />
                                </div>
                                <div className="col span_12  left">
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element ">
                                          <div className="wpb_wrapper">
                                            <p>Разработка концепции красивого и
                                              удобного интерьера с учетом всех
                                              факторов (вкусов обитателей,
                                              планировки и назначения помещения,
                                              бюджета) и подготовка
                                              нормативно-технической базы для
                                              воплощения замысла в реальность.</p>
                                          </div>
                                        </div>
                                        <div className="divider-wrap" data-alignment="default">
                                          <div style={{ height: '30px' }} className="divider">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="toggle default">
                            <h3><a href="#"><i className="icon-plus-sign" />Комплектация</a></h3>
                            <div>
                              <div id="fws_5d84a4cde75cc" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                <div className="row-bg-wrap">
                                  <div className="row-bg   "  />
                                </div>
                                <div className="col span_12  left">
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element ">
                                          <div className="wpb_wrapper">
                                            <p>Услуга позволяет получить желаемый
                                              результат без затрат времени и
                                              усилий со стороны заказчика, т.к.
                                              подбор мебели, освещения, сан��ехники
                                              и других составляющих автором
                                              проекта гарантирует точное
                                              соответствие будущего интерьера
                                              разработанному проекту и созданным
                                              визуализациям.</p>
                                          </div>
                                        </div>
                                        <div className="divider-wrap" data-alignment="default">
                                          <div style={{ height: '30px' }} className="divider">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="toggle default">
                            <h3><a href="#"><i className="icon-plus-sign" />Декорирование</a></h3>
                            <div>
                              <div id="fws_5d84a4cde7afa" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                <div className="row-bg-wrap">
                                  <div className="row-bg   "  />
                                </div>
                                <div className="col span_12  left">
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element ">
                                          <div className="wpb_wrapper">
                                            <p>Завершающий этап комплексной
                                              разработки дизайна интерьера,
                                              связанный с выбором и размещением&nbsp;
                                              различных предметов декора и
                                              аксессуаров. Благодаря умелому
                                              декорированию интерьер приобретает
                                              завершенность, становится
                                              гармоничным и уютным.</p>
                                          </div>
                                        </div>
                                        <div className="divider-wrap" data-alignment="default">
                                          <div style={{ height: '30px' }} className="divider">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wpb_text_column wpb_content_element ">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="toggle default">
                            <h3><a href="#"><i className="icon-plus-sign" />Авторский надзор</a></h3>
                            <div>
                              <div id="fws_5d84a4cde8005" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                <div className="row-bg-wrap">
                                  <div className="row-bg   "  />
                                </div>
                                <div className="col span_12  left">
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element ">
                                          <div className="wpb_wrapper">
                                            <p>Контроль ремонтно-отделочных работ на
                                              соответствие проекту. Выезд на
                                              объекты, консультация исполнителей,
                                              а также внесение изменений в
                                              чертежи.</p>
                                          </div>
                                        </div>
                                        <div className="divider-wrap" data-alignment="default">
                                          <div style={{ height: '30px' }} className="divider">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                                    <div className="column-bg-overlay" />
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-wrap" data-alignment="default">
                          <div style={{ height: '30px' }} className="divider" />
                        </div>
                        <div id="fws_5d84a4cde847c" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="bottom" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <a className="nectar-button large see-through-2 " style={{ marginTop: '20px', borderColor: '#242424', color: '#242424' }} href="services/index.html" data-color-override="#242424" data-hover-color-override="#242424" data-hover-text-color-override="#ffffff"><span>Услуги и
                                      цены</span></a>
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '90px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cde8818" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cde8a04" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="nectar-split-heading">
                                    <div className="heading-line">
                                      <div>
                                        <h1>Instagram</h1>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col has-animation" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="column-inner-wrap">
                                <div data-bg-cover className="column-inner no-extra-padding">
                                  <div className="wpb_wrapper">
                                    <div className="divider-wrap" data-alignment="default">
                                      <div style={{ height: '30px' }} className="divider" />
                                    </div>
                                    <div className="nectar-highlighted-text" data-style="half_text" data-using-custom-color="true" data-color="#eaeaea" >
                                      <h3 style={{ textAlign: 'left' }}><a href="https://www.instagram.com/markovskayadesign/"><em>@markovskayadesign</em></a>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-wrap" data-alignment="default">
                          <div style={{ height: '60px' }} className="divider" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cde8f5e" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="bottom" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cde9139" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-3 vc_hidden-xs wpb_column column_container vc_column_container col padding-1-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                    <div className="inner">
                                      <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                        <img className="img-with-animation skip-lazy " data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="../wp-content/uploads/2019/08/INST-1-1.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-350x350.jpg 350w" sizes="100vw" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-3 wpb_column column_container vc_column_container col padding-1-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                    <div className="inner">
                                      <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                        <img className="img-with-animation skip-lazy " data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="../wp-content/uploads/2019/08/INST2.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST2.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-350x350.jpg 350w" sizes="100vw" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-3 vc_hidden-xs wpb_column column_container vc_column_container col padding-1-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                    <div className="inner">
                                      <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                        <img className="img-with-animation skip-lazy " data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="../wp-content/uploads/2019/08/INST-3.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST-3.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-350x350.jpg 350w" sizes="100vw" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-3 vc_hidden-xs wpb_column column_container vc_column_container col padding-1-percent" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                    <div className="inner">
                                      <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                        <img className="img-with-animation skip-lazy " data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="../wp-content/uploads/2019/08/INST-4.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST-4.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-350x350.jpg 350w" sizes="100vw" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cdeae41" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex standard_section " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg"  />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top-left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default">
                          <div style={{ height: '30px' }} className="divider" />
                        </div>
                        <div className="nectar-split-heading">
                          <div className="heading-line">
                            <div>
                              <h1>Остались вопросы?</h1>
                            </div>
                          </div>
                        </div>
                        <div id="fws_5d84a4cdeb0ce" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '30px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fws_5d84a4cdeb3a4" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex standard_section vertically-align-columns " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="row-bg-wrap" data-bg-animation="none">
                  <div className="inner-wrap">
                    <div className="row-bg using-bg-color" style={{ backgroundColor: '#f2f2f2' }} />
                  </div>
                  <div className="row-bg-overlay" />
                </div>
                <div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                    <div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cdeb5a8" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '60px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="fws_5d84a4cdeb7d2" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '100px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="fws_5d84a4cdeb9f7" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col centered-text has-animation" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="column-inner-wrap">
                                <div data-bg-cover className="column-inner no-extra-padding">
                                  <div className="wpb_wrapper">
                                    <div className="nectar-highlighted-text" data-style="half_text" data-using-custom-color="true" data-color="#ffffff" >
                                      <h3 style={{ textAlign: 'left' }}><a href="mailto:markovskaya29@gmail.com"><em>markovskaya29@gmail.com<br />
                                      </em></a></h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col has-animation no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1566043067819" style={{ maxWidth: '400px', display: 'inline-block' }}>
                                    <div className="wpb_wrapper">
                                      <p>Подробно отвечу на вопросы по выполнению и
                                        реализации дизайн-проекта, сроков и бюджета.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="fws_5d84a4cdebe60" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '100px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="fws_5d84a4cdec08d" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                          <div className="row-bg-wrap">
                            <div className="row-bg   "  />
                          </div>
                          <div className="col span_12  left">
                            <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}>
                              <div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="divider-wrap" data-alignment="default">
                                    <div style={{ height: '60px' }} className="divider" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div >
            {/*/row*/}
          </div >
          {/*/container*/}
        </div >
        {/*/container-wrap*/}
        < div id="footer-outer" data-cols={5} data-custom-color="true" data- disable-copyright="true" data-matching-section-color="true" data-copyright-line="true" data-using-bg-img="false" data-bg-img-overlay="0.7" data-full-width={1} data-using-widget-area="true" >
          <div id="footer-widgets" data-has-widgets="true" data-cols={5}>
            <div className="container">
              <div className="row">
                <div className="col span_3">
                  {/* Footer widget area 1 */}
                  <div id="text-3" className="widget widget_text">
                    <div className="textwidget">
                      <p>© 2019, Irina Markovskaia<br />
                        Частный дизайн интерьеров</p>
                    </div>
                  </div>
                </div>
                {/*/span_3*/}
                <div className="col span_3">
                  {/* Footer widget area 2 */}
                  <div id="nav_menu-4" className="widget widget_nav_menu">
                    <div className="menu-main-menu-container">
                      <ul id="menu-main-menu-1" className="menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572">
                          <a href="index.html" aria-current="page">Главная</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571">
                          <a href="portfolio/index.html">Проекты</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712">
                          <a href="services/index.html">Услуги и цены</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897">
                          <a href="about/index.html">Обо мне</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145">
                          <a href="contacts/index.html">Контакты</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*/span_3*/}
                <div className="col span_3">
                  {/* Footer widget area 3 */}
                  <div id="text-5" className="widget widget_text">
                    <div className="textwidget">
                      <p><a href="https://www.instagram.com/markovskayadesign/">instagram</a><br />
                        <a href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690">houzz</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/*/span_3*/}
                <div className="col span_3">
                  {/* Footer widget area 4 */}
                  <div id="text-2" className="widget widget_text">
                    <div className="textwidget">
                      <p style={{ textAlign: 'left' }}>Сделано в&nbsp;<a href="https://arcr.ru/">arcr.ru</a></p>
                    </div>
                  </div>
                </div>
                {/*/span_3*/}
              </div>
              {/*/row*/}
            </div>
            {/*/container*/}
          </div>
          {/*/footer-widgets*/}
        </div >
        {/*/footer-outer*/}
        < div id="slide-out-widget-area-bg" className="slide-out-from-right dark" >
        </div >
        <div id="slide-out-widget-area" className="slide-out-from-right" data-dropdown-func="separate-dropdown-parent-link" data-back-txt="Back">
          <div className="inner" data-prepend-menu-mobile="false">
            <a className="slide_out_area_close" href="#">
              <span className="icon-salient-x icon-default-style" /> </a>
            <div className="off-canvas-menu-container mobile-only">
              <ul className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572">
                  <a href="index.html" aria-current="page">Главная</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571"><a href="portfolio/index.html">Проекты</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712"><a href="services/index.html">Услуги и цены</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897"><a href="about/index.html">Обо мне</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145"><a href="contacts/index.html">Контакты</a></li>
              </ul>
              <ul className="menu secondary-header-items">
              </ul>
            </div>
          </div>
          <div className="bottom-meta-wrap">
            <ul className="off-canvas-social-links mobile-only">
              <li><a target="_blank" href="https://www.instagram.com/markovskayadesign/"><i className="fa fa-instagram" /> </a></li>
              <li><a target="_blank" href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690"><i className="fa fa-houzz" /> </a></li>
            </ul>
          </div>
          {/*/bottom-meta-wrap*/}
        </div>
      </div >
      {/*/ajax-content-wrap*/}

      {/* TEMPLATE END */}
      <noscript>
      {/* <div><img src="https://mc.yandex.ru/watch/54976081" style="position:absolute; left:-9999px;" alt="" /></div> */}
      </noscript>
  </div>
)}}

export default IndexPage
