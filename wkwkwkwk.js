<script>
    function iubenda_adsense_unblock() {
        var t = 1;
        $('.responsive_ads').each(function() {
            var banner = $(this);
            setTimeout(function() {
                var client = banner.data('client');
                var slot = banner.data('slot');
                var width = banner.data('width');
                var height = banner.data('height');
                var adsense_script = '<scr' + 'ipt type="text/javascript">\n' +
                    'data-ad-client = "' + client + '";\n' +
                    'data-ad-slot = "' + slot + '";\n' +
                    '</scr' + 'ipt>';
                var script = document.createElement('script');
                var ads = document.createElement('ads');
                var w = document.write;
                // override and replace with our version
                document.write = (function(params) {
                    // replace our placeholder with real ads
                    ads.innerHTML = params;
                    // put the old implementation back in place
                    // Aristos, add this check because called more than ones
                    //  and ends, with this symbol.
                    if (params.indexOf("</ins>") != -1)
                        document.write = w;
                });
                script.setAttribute('type', 'text/javascript');
                script.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4904651292964675');
                script.setAttribute('async', 'async');
                banner.html(adsense_script).append(ads).append(script);
            }, t);
            t += 200;
        });
    }
    if ('callback' in _iub.csConfiguration) {
        _iub.csConfiguration.callback.onConsentGiven = iubenda_adsense_unblock;
    } else {
        _iub.csConfiguration.callback = {};
        _iub.csConfiguration.callback.onConsentGiven = iubenda_adsense_unblock;
    }
</script>
