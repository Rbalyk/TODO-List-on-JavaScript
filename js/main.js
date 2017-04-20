(function ($) {
    $(document).ready(function () {
        $('#add').click(function () {
            var item = '<li class="item">' + $("#set").val() + '</li>';

            if ($('#top').prop('checked') == true) {
                $('#maindesk').prepend(item);
            } else {
                $('#maindesk').append(item);
            }
            $("#set").val('');
            $('#top').prop('checked', false);
            $('#maindesk .actions').remove();
        });

        $("#maindesk").on("mouseenter", ".item", function () {

            $(this).append('<div class="actions"><button id="up" class="action"></button><button id="down" class="action"></button><button id="remove" class="action"></button></div>');
        });

        $("#maindesk").on("mouseleave", ".item", function () {
            $("#maindesk").find('.actions').remove();
        });


        $("#maindesk").on("click", function (event) {
            setTimeout(
                function () {

                    var elem = event.target;

                    if ($(elem).attr('id') == 'remove') {
                        $(elem).parents(".item").remove();
                    } else if ($(elem).attr('id') == 'up') {
                        var index = $(elem).parents('.actions').parents('.item').index();
                        if (index == 0) {
                            return true;
                        } else {
                            var currCont = $(elem).parents('.actions').parents('.item').html();
                            var parrentId = $(elem).parents('#maindesk').attr('id');
                            var prevCont = $('#maindesk > .item:nth-child(' + (index) + ')').html();

                            $('#maindesk > .item:nth-child(' + (index) + ')').html(currCont);
                            $('#maindesk> .item:nth-child(' + (index + 1) + ')').html(prevCont);
                        }
                    } else {
                        var index = parseInt($(elem).parents('.actions').parents('.item').index()) + 1;
                        var parrentId = $(elem).parents('#maindesk').attr('id');
                        var summary = $('#maindesk > .item').length;
                        if (index > summary) {
                            return true;
                        } else {
                            var currCont = $(elem).parents('.actions').parents('.item').html();
                            var nextCont = $('#maindesk > .item:nth-child(' + (index + 1) + ')').html();

                            $('#maindesk > .item:nth-child(' + (index + 1) + ')').html(currCont);
                            $('#maindesk > .item:nth-child(' + (index) + ')').html(nextCont);
                        }
                    }
                    ;
                    $("#maindesk").find('.actions').remove();
                }, 100
            );
        });
    });
})(jQuery);