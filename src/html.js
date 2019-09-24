import React from "react"
let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="skin-ascend-inline-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров &raquo; Лента комментариев</title>
          <link rel='dns-prefetch' href='http://fonts.googleapis.com/' />
          <link rel='dns-prefetch' href='http://s.w.org/' />
          <link rel="alternate" type="application/rss+xml"
            title="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров &raquo; Лента" href="feed/index.html" />
          <link rel="alternate" type="application/rss+xml"
            title="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров &raquo; Лента комментариев"
            href="comments/feed/index.html" />
            <script type="text/javascript" src="./navigation.js"></script>
          <link rel='stylesheet' id='wp-block-library-css' href='static/wp-includes/css/dist/block-library/style.min2513.css?ver=5.2.3'
            type='text/css' media='all' />
          <link rel='stylesheet' id='contact-form-7-css'
            href='static/markovskaia_plugins/contact-form-7/includes/css/styles58e0.css?ver=5.1.4' type='text/css' media='all' />
          <link rel='stylesheet' id='formcraft-common-css'
            href='static/markovskaia_plugins/formcraft/dist/formcraft-common3430.css?ver=3.7.5' type='text/css' media='all' />
          <link rel='stylesheet' id='formcraft-form-css' href='static/markovskaia_plugins/formcraft/dist/form3430.css?ver=3.7.5'
            type='text/css' media='all' />
          <link rel='stylesheet' id='rs-plugin-settings-css'
            href='static/markovskaia_plugins/revslider/public/assets/css/rs642c6.css?ver=6.1.0' type='text/css' media='all' />
          <link rel='stylesheet' id='salient-social-css' href='static/markovskaia_plugins/salient-social/css/style5152.css?ver=1.0'
            type='text/css' media='all' />
            <link rel="stylesheet" type="text/css" medial="all" id="id='salient-social-inline-css'" href="header.css"/>
          <link rel='stylesheet' id='font-awesome-css' href='static/markovskaia/css/font-awesome.min82d0.css?ver=4.6.4' type='text/css'
            media='all' />
          <link rel='stylesheet' id='main-styles-css' href='static/markovskaia/css/style7b23.css?ver=10.5.3' type='text/css'
            media='all' />
          <link rel='stylesheet' id='nectar-header-perma-transparent-css'
            href='static/markovskaia/css/header/header-perma-transparent7b23.css?ver=10.5.3' type='text/css' media='all' />
          <link rel='stylesheet' id='magnific-css' href='static/markovskaia/css/plugins/magnificdb31.css?ver=8.6.0' type='text/css'
            media='all' />
          <link rel='stylesheet' id='nectar_default_font_open_sans-css'
            href='https://fonts.googleapis.com/css?family=Open+Sans%3A300%2C400%2C600%2C700&amp;subset=latin%2Clatin-ext'
            type='text/css' media='all' />
          <link rel='stylesheet' id='responsive-css' href='static/markovskaia/css/responsive7b23.css?ver=10.5.3' type='text/css'
            media='all' />
          <link rel='stylesheet' id='select2-css' href='static/markovskaia/css/plugins/select2ae48.css?ver=6.2' type='text/css'
            media='all' />
          <link rel='stylesheet' id='skin-ascend-css' href='static/markovskaia/css/ascend7b23.css?ver=10.5.3' type='text/css'
            media='all' />
            <link rel='stylesheet' id='skin-ascend-inline-css' href='slider.css' type='text/css'
            media='all' />
          <link rel='stylesheet' id='js_composer_front-css'
            href='static/markovskaia_plugins/js_composer_salient/assets/css/js_composer.mine23c.css?ver=5.7' type='text/css'
            media='all' />
          <link rel='stylesheet' id='redux-google-fonts-salient_redux-css'
            href='http://fonts.googleapis.com/css?family=Montserrat%3A400%2C500%2C300%2C700%7CRoboto%3A500&amp;subset=latin&amp;ver=1568439562'
            type='text/css' media='all' />
          <script type='text/javascript' src='static/wp-includes/js/jquery/jquery4a5f.js?ver=1.12.4-wp'></script>
          <script type='text/javascript' src='static/wp-includes/js/jquery/jquery-migrate.min330a.js?ver=1.4.1'></script>
          <script type='text/javascript'
            src='static/markovskaia_plugins/revslider/public/assets/js/revolution.tools.minf049.js?ver=6.0'></script>
          <script type='text/javascript' src='static/markovskaia_plugins/revslider/public/assets/js/rs6.min42c6.js?ver=6.1.0'></script>
          <link rel='https://api.w.org/' href='static/wp-json/index.html' />
          <link rel="EditURI" type="application/rsd+xml" title="RSD" href="xmlrpc0db0.html?rsd" />
          <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="static/wp-includes/wlwmanifest.xml" />
          <meta name="generator" content="WordPress 5.2.3" />
          <link rel="canonical" href="index.html" />
          <link rel='shortlink' href='index.html' />
          <link rel="alternate" type="application/json+oembed"
            href="static/wp-json/oembed/1.0/embede9b4.json?url=http%3A%2F%2Fmarkovskaia.ru%2F" />
          <link rel="alternate" type="text/xml+oembed"
            href="static/wp-json/oembed/1.0/embed4301?url=http%3A%2F%2Fmarkovskaia.ru%2F&amp;format=xml" />
            <script type="text/javascript" src="root.js"></script>
          <meta name="generator" content="Powered by WPBakery Page Builder - drag and drop page builder for WordPress." />
          <meta name="generator"
            content="Powered by Slider Revolution 6.1.0 - responsive, Mobile-Friendly Slider Plugin for WordPress with comfortable drag and drop interface." />
          <link rel="icon" href="static/wp-content/uploads/2019/08/cropped-LOGO-adaptive%402x-32x32.png" sizes="32x32" />
          <link rel="icon" href="static/wp-content/uploads/2019/08/cropped-LOGO-adaptive%402x-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon-precomposed" href="static/wp-content/uploads/2019/08/cropped-LOGO-adaptive%402x-180x180.png" />
          <meta name="msapplication-TileImage"
            content="http://markovskaia.ru/wp-content/uploads/2019/08/cropped-LOGO-adaptive@2x-270x270.png" />
          <script type="text/javascript" src="slider.js"></script>
          <meta property="og:locale" content="ru_RU" />
          <meta property="og:site_name" content="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" />
          <meta property="og:title" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta property="og:url" content="http://markovskaia.ru" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta property="og:image" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />
          <meta property="og:image:url" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />
          {/* <!-- Google+ / Schema.org -->
        
  <!-- START - Open Graph for Facebook, Google+ and Twitter Card Tags 2.2.6.1 -->
  <!-- Facebook Open Graph --> */}
          <meta itemprop="name" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta itemprop="headline" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta itemprop="description" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta itemprop="image" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />
          <meta itemprop="author" content="admin" />
          {/* <!--<meta itemprop="publisher" content="Irina Markovskaia | Ирина Марковская | Дизайнер интерьеров" />-->
  <!-- To solve: The attribute publisher.itemtype has an invalid value -->
        
  <!-- Twitter Cards --> */}
          <meta name="twitter:title" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta name="twitter:url" content="http://markovskaia.ru" />
          <meta name="twitter:description" content="Ирина Марковская | Частный дизайнер интерьеров" />
          <meta name="twitter:image" content="http://markovskaia.ru/wp-content/uploads/2019/08/open_graph2.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <!-- SEO --> */}
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes} class="home page-template-default page page-id-1296 ascend wpb-js-composer js-comp-ver-5.7 vc_responsive" data-footer-reveal="1" data-footer-reveal-shadow="none" data-header-format="default" data-body-border="off" data-boxed-style="" data-header-breakpoint="1000" data-dropdown-style="minimal" data-cae="easeOutQuart" data-cad="700" data-megamenu-width="full-width" data-aie="zoom-out" data-ls="magnific" data-apte="horizontal_swipe" data-hhun="0" data-fancy-form-rcs="1" data-form-style="minimal" data-form-submit="see-through" data-is="minimal" data-button-style="default" data-user-account-button="false" data-header-inherit-rc="false" data-header-search="false" data-animated-anchors="true" data-ajax-transitions="true" data-full-width-header="true" data-slide-out-widget-area="true" data-slide-out-widget-area-style="slide-out-from-right" data-user-set-ocm="off" data-loading-animation="none" data-bg-header="true" data-responsive="1" data-ext-responsive="true" data-header-resize="1" data-header-color="light" data-cart="false" data-remove-m-parallax="" data-remove-m-video-bgs="" data-force-header-trans-color="light" data-smooth-scrolling="0" data-permanent-transparent="1">
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script type="text/javascript" src="revert.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400%2C500%2C100%7COpen+Sans:400%7CPoppins:400"
		rel="stylesheet" property="stylesheet" type="text/css" media="all"></link>
    <script type="text/javascript" src="slider-2.js"></script>
    <link rel='stylesheet' id='animate-css-css'
      href='static/markovskaia_plugins/js_composer_salient/assets/lib/bower/animate-css/animate.mine23c.css?ver=5.7'
      type='text/css' media='all' />
      <script type="text/javascript" src="api.js"></script>
       <script type='text/javascript' src='static/markovskaia_plugins/salient-social/js/salient-social5152.js?ver=1.0'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/jquery.easing4e44.js?ver=1.3'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/jquery.mousewheela9d5.js?ver=3.1.13'></script>
      <script type='text/javascript' src='static/markovskaia/js/priority7b23.js?ver=10.5.3'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/transite2dc.js?ver=0.9.9'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/waypointsf39e.js?ver=4.0.1'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/modernizr61da.js?ver=2.6.2'></script>
      <script type='text/javascript'
        src='static/markovskaia_plugins/salient-portfolio/js/third-party/imagesLoaded.mineda1.js?ver=4.1.4'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/hoverintent3aa8.js?ver=1.9'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/magnificf0a0.js?ver=7.0.1'></script>
      <script type='text/javascript' src='static/markovskaia/js/third-party/superfishb493.js?ver=1.4.8'></script>
      <script type="text/javascript" src="necture.js"></script>
      <script type='text/javascript' src='static/markovskaia/js/init7b23.js?ver=10.5.3'></script>
<script type='text/javascript'
  src='static/markovskaia_plugins/salient-core/js/third-party/touchswipe.min5152.js?ver=1.0'></script>
<script type='text/javascript' src='static/markovskaia/js/third-party/select2.min49eb.js?ver=3.5.2'></script>
<script type='text/javascript'
  src='static/markovskaia_plugins/mousewheel-smooth-scroll/js/SmoothScroll.min6adb.js?ver=1.4.9.1'></script>
<script type='text/javascript'
  src='static/markovskaia_plugins/mousewheel-smooth-scroll/js/wpmss.min2a81.js?ver=1566385566'></script>
<script type='text/javascript' src='static/wp-includes/js/wp-embed.min2513.js?ver=5.2.3'></script>
<script type='text/javascript'
    src='static/markovskaia_plugins/js_composer_salient/assets/js/dist/js_composer_front.mine23c.js?ver=5.7'></script>
    <script type="text/javascript" src="track.js"></script>
        </body>
        
      </html>
    )
  }
}
