var Repart = {
	init: function() {
		'use strict';

		Repart.slide();
		Repart.validation();
	},
	slide: function() {
		'use strict';

		$('.carousel').carousel({
			interval: 3500
		});
	},
	validation: function() {
		'use strict';

		var botaoEnviar = $('.btn-enviar'),
        formulario = $('#formulario');

    jQuery.validator.setDefaults({
        errorClass: 'help-block small',
        errorElement: 'span'
    });

    botaoEnviar.on('click', function() {
        formulario.validate({
            rules: {
                nome: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                mensagem: {
                    required: true
                },
            },
            messages: {
                nome: {
                    required: 'Digite seu nome',
                    minlength: jQuery.validator.format('Ele deve conter no mínimo {0} caracteres.')
                },
                email: {
                    required: 'Digite seu e-mail',
                    email: 'Por favor, insira um e-mail válido.'
                },
                mensagem: {
                    required: 'Escreva sua mensagem'
                }
            },
            highlight: function(element, errorClass, validClass) {
                $(element).parent().addClass('has-error').removeClass('has-success');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).parent().removeClass('has-error').addClass('has-success');
            },
            submitHandler: function(form) {
                var dados = $(form).serialize();

                $.ajax({
                    type: 'POST',
                    url: 'processa.php',
                    data: dados,
                    dataType: 'text',
                    cache: false,
                    beforeSend: function() {
                        botaoEnviar.text('Aguarde...');
                    },
                    complete: function() {
                        botaoEnviar.text('Enviando...');
                    },
                    success: function() {
                        setTimeout(function() {
                            botaoEnviar.addClass('sucesso').text('Obrigado pelo contato');

                            setTimeout(function() {
                                botaoEnviar.text('Nova mensagem');
                            }, 2000);
                        }, 2000);

                        $('#nome, #email, #telefone, #mensagem').val('').parent().removeClass('has-success');
                    },
                    error: function(xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    }
                });

                return false;
            }
        });
    });
	}
}

$(function() {
	'use strict';

	Repart.init();
});