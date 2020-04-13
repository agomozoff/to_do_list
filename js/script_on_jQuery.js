$(function(){
    $('.btn-add').on('click', function(){
        $('.list-false-title').css('display', 'none');

        let divNote = $('<div></div>');
        divNote.attr('class', 'item');

        let headerNote = $('<h3></h3>');
        headerNote.attr('class', 'list-true-title');
        headerNote.text($('#input_title').val());

        let textNote = $('<p></p>');
        textNote.text($('#input_text').val());

        // let btnClose = $('<img>', {
        //     click: function(){
        //         $(this).parents('.item').remove();
        //     }
        // });

        let btnClose = $('<img>');
        btnClose.attr({
            'class': 'btn-close',
            'src': 'img/close-button.png',
            'alt': 'close'
        });

        let btnHide = $('<img class="arrow-hide" src="img/arrow.png" alt="arrow">');


        $('.list-wrapper').append(divNote);
        $(divNote).prepend(headerNote);
        $(divNote).append(textNote);
        $(headerNote).append(btnClose);
        $(headerNote).append(btnHide);

        $('#input_title').val('');
        $('#input_text').val('');
    });

    $('.list-wrapper').on('click', '.btn-close', function(){
        $(this).parents('.item').remove();
    })

    $('.list-wrapper').on('click', '.arrow-hide', function(){
        if ($(this).parent().next().is(':visible')){
            $(this).parent().next().hide();
            // $(this).parent().next().animate({
            //     'min-height': '0',
            //     'width': '0'
            // }, 400);
            $(this).css('transform', 'rotate(90deg)');
            $(this).parent().css({
                'border-radius': '15px',
                'border-bottom': 'none'
            });
        } else {
            $(this).parent().next().fadeIn(300);
            // $(this).parent().next().animate({
            //     'min-height': '85px',
            //     'width': '100%'
            // }, 400);
            $(this).css('transform', 'rotate(0)');
            $(this).parent().css({
                'border-radius': '15px 15px 0 0',
                'border-bottom': '1px solid #ebebeb'
            });
        }
    })
    
});


