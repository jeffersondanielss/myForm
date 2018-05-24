# O que você precisa fazer
Uma pequena aplicação em Angular 2 (4, 5...) em que você deve montar um formulário dinamicamente conforme as configurações de um endpoint.

E um botão para enviar as respostas desse formulário a um outro endpoint que irá cotar o seu cool level.

Para recuperar as configurações:
`GET https://thinkseg-javascript-test.herokuapp.com/config`

Um exemplo do retorno. Atenção para as explicações:
```
{
    "questions":                                    # -> Chave de todas as perguntas
        "likes_thinkseg": {                         # -> Nome da pergunta que deve ser enviada
            "label": "Você curte a Thinkseg?",      # -> Texto que deve ser exibido para o usuário
            "hidden": false,                        # -> Se estiver `true` a pergunta deve ficar oculta até que um resposta a ative
            "options": {                            # -> Chave das opções de resposta da pergunta
                "yes": {                            # -> Nome de uma resposta, é usada apenas como controle interno e não deve ser enviada para o enpoint de cotação
                    "label": "Sim!",                # -> Texto de uma resposta que deve ser exibida para o usuário
                    "value": "1",                   # -> Valor da resposta que deve ser enviada para o endpoint de cotação
                    "show": "likes_beer"            # -> Significa que ao clicar nessa resposta, a pergunta com o nome "likes_beer" deve ser exibida
                },
                "no": {
                    "label": "Não",
                    "value": "0",
                    "hide": "likes_beer"            # -> Significa que ao clicar nessa resposta, a pergunta com o nome "likes_beer" deve ser ocultada
                }
            }
        },
        "likes_beer": {
            "label": "Você curte cerveja?",
            "hidden": true,
            "options": {
                "yes": {
                    "label": "Sim!",
                    "value": "1"
                },
                "no": {
                    "label": "Não",
                    "value": "0"
                }
            }
        }
    }
}
```

O formulário deve enviar as respostas para o endpoint:
`POST https://thinkseg-javascript-test.herokuapp.com/quotations`

Um exemplo de payload:
```
{
	"answers": {
		"likes_thinkseg": "1",
		"likes_beer": "0"
	}
}
```

Um exemplo de retorno:
```
{
    "cool_level": 120
}
```

Boa sorte :)
