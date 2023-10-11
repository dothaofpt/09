$('.tag-list').each(function(){
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tag.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tag-control', function(e){
        e.preventDefaulf();
        var $link = $(this),
        id = this.hash;

        if (id && !$link.is('.active')){
            $panel.removeClass('active');
            $tab.removeClass('active');
            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});