/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
  //   <script
  //   key="1"
  //   type="text/javascript"
  //   src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
  // />,
  <title key="2">"Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров &raquo; Лента комментариев"</title>
    // <link key="1" rel='dns-prefetch' href='http://fonts.googleapis.com/' />,
    // <link key="2" rel='dns-prefetch' href='http://s.w.org/' />,
    // <link key="3" rel="alternate" type="application/rss+xml"
    //   title="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров &raquo; Лента" href="feed/index.html" />,
    // <link key="4" rel="alternate" type="application/rss+xml"
    //   title="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров &raquo; Лента комментариев"
    //   href="comments/feed/index.html" />,
    // <link key="5" rel='stylesheet' id='./wp-block-library-css' href='wp-includes/css/dist/block-library/style.min2513.css?ver=5.2.3' type='text/css' media='all' />,
    // <link key="6" rel='stylesheet' id='contact-form-7-css'
    //   href='./markovskaia_plugins/contact-form-7/includes/css/styles58e0.css?ver=5.1.4' type='text/css' media='all' />,
    // <link key="7" rel='stylesheet' id='formcraft-common-css' href='./markovskaia_plugins/formcraft/dist/formcraft-common3430.css?ver=3.7.5' type='text/css' media='all' />,
    // <link key="8" rel='stylesheet' id='formcraft-form-css' href='./markovskaia_plugins/formcraft/dist/form3430.css?ver=3.7.5' type='text/css' media='all' />,
    // <link key="9" rel='stylesheet' id='rs-plugin-settings-css' href='./markovskaia_plugins/revslider/public/assets/css/rs642c6.css?ver=6.1.0' type='text/css' media='all' />,
    // <link key="10" rel='stylesheet' id='salient-social-css' href='./markovskaia_plugins/salient-social/css/style5152.css?ver=1.0'
    //   type='text/css' media='all' />,
    // <link key="11" rel='stylesheet' id='font-awesome-css' href='./markovskaia/css/font-awesome.min82d0.css?ver=4.6.4' type='text/css'
    //   media='all' />,
    // <link key="12" rel='stylesheet' id='main-styles-css' href='./markovskaia/css/style7b23.css?ver=10.5.3' type='text/css'
    //   media='all' />,
    // <link key="13" rel='stylesheet' id='nectar-header-perma-transparent-css'
    //   href='./markovskaia/css/header/header-perma-transparent7b23.css?ver=10.5.3' type='text/css' media='all' />,
    // <link key="14" rel='stylesheet' id='magnific-css' href='./markovskaia/css/plugins/magnificdb31.css?ver=8.6.0' type='text/css'
    //   media='all' />,
    // <link key="15" rel='stylesheet' id='nectar_default_font_open_sans-css'
    //   href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext'
    //   type='text/css' media='all' />,
    // <link key="16" rel='stylesheet' id='responsive-css' href='./markovskaia/css/responsive7b23.css?ver=10.5.3' type='text/css'
    //   media='all' />,
    // <link key="17" rel='stylesheet' id='select2-css' href='./markovskaia/css/plugins/select2ae48.css?ver=6.2' type='text/css'
    //   media='all' />,
    // <link key="18" rel='stylesheet' id='skin-ascend-css' href='./markovskaia/css/ascend7b23.css?ver=10.5.3' type='text/css'
    //   media='all' />,
    // <link key="19" rel='stylesheet' id='js_composer_front-css'
    //   href='./markovskaia_plugins/js_composer_salient/assets/css/js_composer.mine23c.css?ver=5.7' type='text/css'
    //   media='all' />,
    // <link key="20" rel='stylesheet' id='redux-google-fonts-salient_redux-css'
    //   href='http://fonts.googleapis.com/css?family=Montserrat%3A400%2C500%2C300%2C700%7CRoboto%3A500&amp;subset=latin&amp;ver=1568439562'
    //   type='text/css' media='all' />,
    // <script key="21" type='text/javascript' src='./wp-includes/js/jquery/jquery4a5f.js?ver=1.12.4wp'></script>,
    // <script key="22" type='text/javascript' src='./wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1'></script>,
    // <script key="23" type='text/javascript'
    //   src='./markovskaia_plugins/revslider/public/assets/js/revolution.tools.minf049.js?ver=6.0'></script>,
    // <script key="24" type='text/javascript' src='./markovskaia_plugins/revslider/public/assets/js/rs6.min42c6.js?ver=6.1.0'></script>,
    // <link key="25" rel='https://api.w.org/' href='./wp-json/index.html' />,
    // <link key="26" rel="EditURI" type="application/rsd+xml" title="RSD" href="./xmlrpc0db0.html?rsd" />,
    // <link key="27" rel="wlwmanifest" type="application/wlwmanifest+xml" href="./wp-includes/wlwmanifest.xml" />,
    // <meta key="28" name="generator" content="WordPress 5.2.3" />,
    // <link key="29" rel="canonical" href="index.html" />,
    // <link key="30" rel='shortlink' href='index.html' />,
    // <link key="31" rel="alternate" type="application/json+oembed"
    //   href="./wp-json/oembed/1.0/embede9b4.json?url=http%3A%2F%2Fmarkovskaia.ru%2F" />,
    // <link key="32" rel="alternate" type="text/xml+oembed"
    //   href="./wp-json/oembed/1.0/embed4301?url=http%3A%2F%2Fmarkovskaia.ru%2F&amp;format=xml" />,
    // <link key="33" rel="alternate" type="text/xml+oembed"
    //   href="./wp-json/oembed/1.0/embed4301?url=http%3A%2F%2Fmarkovskaia.ru%2F&amp;format=xml" />,
    // <meta key="34" name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress." />,
    // <meta key="35" name="generator"
    //   content="Powered by Slider Revolution 6.1.0 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />,
    // <link key="36" rel="icon" href="./wp-content/uploads/2019/08/cropped-LOGO-adaptive%402x-32x32.png" sizes="32x32" />,
    // <link key="37" rel="icon" href="wp-content/uploads/2019/08/cropped-LOGO-adaptive%402x-192x192.png" sizes="192x192" />,
    // <link key="38" rel="apple-touch-icon-precomposed" href="wp-content/uploads/2019/08/cropped-LOGO-adaptive%402x-180x180.png" />,
    // <meta key="39" name="msapplication-TileImage"
    //   content="http://markovskaia.ru/wp-content/uploads/2019/08/cropped-LOGO-adaptive@2x-270x270.png" />,
    // <meta key="40" property="og:locale" content="ru_RU" />,
    // <meta key="41" property="og:site_name" content="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" />,
    // <meta key="42" property="og:title" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="43" property="og:url" content="http://markovskaia.ru" />,
    // <meta key="44" property="og:type" content="website" />,
    // <meta key="45" property="og:description" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="46" property="og:image" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />,
    // <meta key="47" property="og:image:url" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />,
    // <meta key="48" itemprop="name" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="49" itemprop="headline" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="50" itemprop="description" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="51" itemprop="image" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />,
    // <meta key="52" itemprop="author" content="admin" />,
    // <meta key="53" name="twitter:title" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="54" name="twitter:url" content="http://markovskaia.ru" />,
    // <meta key="55" name="twitter:description" content="Ирина Марковская | Частный дизайнер интерьеров" />,
    // <meta key="56" name="twitter:image" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />,
    // <meta key="57" name="twitter:card" content="summary_large_image" />,
  ])
  setPreBodyComponents([
  //   <script
  //   key="3"
  //   type="text/javascript"
  //   src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"
  // />,

    // <img src={require('../ElatedVigilantDesign/src/layouts/index.css')}/>
  ])
  setPostBodyComponents([
  //   <script
  //   key="4"
  //   type="text/javascript"
  //   src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.js"
  // />,
    // <link key="58" href="https://fonts.googleapis.com/css?family=Roboto:400%2C500%2C100%7COpen+Sans:400%7CPoppins:400"
    //   rel="stylesheet" property="stylesheet" tyspe="text/css" media="all"></link>,
    // <link key="59" rel='stylesheet' id='animate-css-css'
    //   href='markovskaia_plugins/js_composer_salient/assets/lib/bower/animate-css/animate.mine23c.css?ver=5.7'
    //   type='text/css' media='all' />,
    // <script key="60" type='text/javascript' src='markovskaia_plugins/salient-social/js/salient-social5152.js?ver=1.0'></script>,
    // <script key="61" type='text/javascript' src='markovskaia/js/third-party/jquery.easing4e44.js?ver=1.3'></script>,
    // <script key="62" type='text/javascript' src='markovskaia/js/third-party/jquery.mousewheela9d5.js?ver=3.1.13'></script>,
    // <script key="63" type='text/javascript' src='markovskaia/js/priority7b23.js?ver=10.5.3'></script>,
    // <script key="64" type='text/javascript' src='markovskaia/js/third-party/transite2dc.js?ver=0.9.9'></script>,
    // <script key="65" type='text/javascript' src='markovskaia/js/third-party/waypointsf39e.js?ver=4.0.1'></script>,
    // <script key="66" type='text/javascript' src='markovskaia/js/third-party/modernizr61da.js?ver=2.6.2'></script>,
    // <script key="67" type='text/javascript'
    //   src='markovskaia_plugins/salient-portfolio/js/third-party/imagesLoaded.mineda1.js?ver=4.1.4'></script>,
    // <script key="68" type='text/javascript' src='markovskaia/js/third-party/hoverintent3aa8.js?ver=1.9'></script>,
    // <script key="69" type='text/javascript' src='markovskaia/js/third-party/magnificf0a0.js?ver=7.0.1'></script>,
    // <script key="70" type='text/javascript' src='markovskaia/js/third-party/superfishb493.js?ver=1.4.8'></script>,
    // <script key="71" type='text/javascript' src='markovskaia/js/init7b23.js?ver=10.5.3'></script>,
    // <script key="72" type='text/javascript'
    //   src='markovskaia_plugins/salient-core/js/third-party/touchswipe.min5152.js?ver=1.0'></script>,
    // <script key="73" type='text/javascript' src='markovskaia/js/third-party/select2.min49eb.js?ver=3.5.2'></script>,
    // <script key="74" type='text/javascript'
    //   src='markovskaia_plugins/mousewheel-smooth-scroll/js/SmoothScroll.min6adb.js?ver=1.4.9.1'></script>,
    // <script key="75" type='text/javascript'
    //   src='markovskaia_plugins/mousewheel-smooth-scroll/js/wpmss.min2a81.js?ver=1566385566'></script>,
    // <script key="76" type='text/javascript' src='wp-includes/js/wp-embed.min2513.js?ver=5.2.3'></script>,
    // <script key="77" type='text/javascript'
    //   src='markovskaia_plugins/js_composer_salient/assets/js/dist/js_composer_front.mine23c.js?ver=5.7'></script>,
    
  ])
}