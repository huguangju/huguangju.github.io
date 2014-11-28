$(function () {
    $(".article a").attr("target", "_blank");
    if($('#toc')>>0){ $('#toc').toc({'container': '.article', 'selectors': 'h1,h2', prefix: 'top'});}
    var codeimg=$("input[name='codeimg']").val();
    $('.phone-share .phone-share-img').css("background-image","url("+codeimg +")");

    $('.article').each(function (i) {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox')) return;
            var url2 = this.src;
            var url = url2.substring(0, url2.length - 4);
            if(url2.substring(url2.length - 4,url2.length)=='.gif'){ url=url2; }
            $(this).wrap('<a href="' + url + '" title="' + this.title + '" class="fancybox" rel="article'+ i + '"</a>');
        });
    });

    if ($('.fancybox').length>=1) {
        $('.fancybox').fancybox({
            padding: 0,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(255,255,255,0.5)'
                    }
                }
            }

        });
    };
    if ($('.dialog').length>=1) {
        $('.dialog').fancybox({
            'titlePosition'     : 'inside',
            'transitionIn'      : 'none',
            'transitionOut'     : 'none'
        });
    };

    // 生成目录
    if($.fn.tocify){
        $("#toc") && $("#toc").tocify({
            selectors : "h2,h3,h4,h5,h6",
            context :".article-body"
         }).data("toc-tocify");
    }

    /**
     * 2014年11月13日 15:20:24修改的小版本.稳定无bug.会更新到jekyllpure
     * - 二维码为自己独立生成png
     * - 文章详细不调用默认模版
     * - 代码加量用了SyntaxHighlighter
     * - 增加fancybox弹窗显示功能
     * - 一切修改都是为了更好的展示的技术博文.以及其它博客做不到的自定义效果
     * */
    SyntaxHighlighter.autoloader(
        'applescript			/assets/js/plugins/syntaxhighlighter/scripts/shBrushAppleScript.js',
        'actionscript3 as3		/assets/js/plugins/syntaxhighlighter/scripts/shBrushAS3.js',
        'bash shell				/assets/js/plugins/syntaxhighlighter/scripts/shBrushBash.js',
        'coldfusion cf			/assets/js/plugins/syntaxhighlighter/scripts/shBrushColdFusion.js',
        'cpp c					/assets/js/plugins/syntaxhighlighter/scripts/shBrushCpp.js',
        'c# c-sharp csharp		/assets/js/plugins/syntaxhighlighter/scripts/shBrushCSharp.js',
        'css					/assets/js/plugins/syntaxhighlighter/scripts/shBrushCss.js',
        'delphi pascal			/assets/js/plugins/syntaxhighlighter/scripts/shBrushDelphi.js',
        'diff patch pas			/assets/js/plugins/syntaxhighlighter/scripts/shBrushDiff.js',
        'erl erlang				/assets/js/plugins/syntaxhighlighter/scripts/shBrushErlang.js',
        'groovy					/assets/js/plugins/syntaxhighlighter/scripts/shBrushGroovy.js',
        'haxe hx				/assets/js/plugins/syntaxhighlighter/scripts/shBrushHaxe.js',
        'java					/assets/js/plugins/syntaxhighlighter/scripts/shBrushJava.js',
        'jfx javafx				/assets/js/plugins/syntaxhighlighter/scripts/shBrushJavaFX.js',
        'js jscript javascript	/assets/js/plugins/syntaxhighlighter/scripts/shBrushJScript.js',
        'perl pl				/assets/js/plugins/syntaxhighlighter/scripts/shBrushPerl.js',
        'php					/assets/js/plugins/syntaxhighlighter/scripts/shBrushPhp.js',
        'text plain				/assets/js/plugins/syntaxhighlighter/scripts/shBrushPlain.js',
        'py python				/assets/js/plugins/syntaxhighlighter/scripts/shBrushPython.js',
        'ruby rails ror rb		/assets/js/plugins/syntaxhighlighter/scripts/shBrushRuby.js',
        'scala					/assets/js/plugins/syntaxhighlighter/scripts/shBrushScala.js',
        'sql					/assets/js/plugins/syntaxhighlighter/scripts/shBrushSql.js',
        'vb vbnet				/assets/js/plugins/syntaxhighlighter/scripts/shBrushVb.js',
        'xml xhtml xslt html	/assets/js/plugins/syntaxhighlighter/scripts/shBrushXml.js'
    );
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();
    shLineWrapWhenReady();

    //niceScroll
    $("html").niceScroll({
        cursorwidth: 10,
        cursorcolor: "#8f8f8f"
    });
});

var shLineWrap = function () {
    $('.syntaxhighlighter').each(function () {
        var $sh = $(this),
            $gutter = $sh.find('td.gutter'),
            $code = $sh.find('td.code') ;
        $gutter.children('.line').each(function (i) {
            var $gutterLine = $(this),
                $codeLine = $code.find('.line:nth-child(' + (i + 1) + ')');
            var height = $codeLine.height() || 0;
            if (!height) {
                height = 'auto';
            }
            else {
                height = height += 'px';
            }
            $gutterLine.attr('style', 'height: ' + height + ' !important'); // fix by Edi, for JQuery 1.7+ under Firefox 15.0
        });
    });
};
var shLineWrapWhenReady = function () {
    if ($('.syntaxhighlighter').length === 0) {
        setTimeout(shLineWrapWhenReady, 10);
    }
    else {
        shLineWrap();
    }
};