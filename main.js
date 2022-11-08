$('form').on('submit', function(e){
        e.preventDefault();
        const endereconovaimagem = $('#words').val();
        const novoitem = $('<li></li>');
        $('<div">'+endereconovaimagem+'</div>').appendTo(novoitem);        
        $(novoitem).appendTo('p');        
        $('#words').val("");
    })