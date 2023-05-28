$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome!',
            email: 'Por favor, insira o seu e-mail!',
            mensagem: 'Por favor, insira a sua mensagem!',
        },
        submitHandler: function(form) {
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve. Agradecemos pelo seu contato!');
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    
    $('.card-body button').click(function() {
        const destino = $('#contato');
        const nomeInteresse = $(this).closest('.card-body').find('h4.card-title').text().trim();

        $('#interesse').val(nomeInteresse);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
})

