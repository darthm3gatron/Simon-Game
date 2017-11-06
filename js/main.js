require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery.min'
    }
});

require(["jquery", "app/simon"], function($, simon){
    $(document).ready(function() {
        simon.init();
    });
});