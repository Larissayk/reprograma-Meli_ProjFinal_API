define({ "api": [
  {
    "type": "delete",
    "url": "/delete/:id",
    "title": "Busca o comentário pelo ID e o deleta.",
    "name": "DeleteComentariosPorId",
    "group": "Comentarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do comentário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Comentário removido com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro ao remover o comentário.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/comentariosRoutes.js",
    "groupTitle": "Comentarios"
  },
  {
    "type": "get",
    "url": "/comentarios/evento/:id",
    "title": "Busca um comentário e trás o evento a que ele pertence.",
    "name": "GetComentariosPorEvento",
    "group": "Comentarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do comentário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do evento e do comentário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "autor",
            "description": "<p>Usuário que criou o evento ou comentário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "texto",
            "description": "<p>Conteúdo do comentário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status do evento [&quot;Ativo&quot;, &quot;Concluído&quot;] .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Prioridade do evento [&quot;Alta&quot;, &quot;Média&quot;, &quot;Baixa&quot;].</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "geolocalizacao",
            "description": "<p>Lista com as coordenadas do local onde foi gerado o evento (array de números).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[ref]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do usuário (array de objetos).</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "eventosRef",
            "description": "<p>Referência do evento ao qual o comentário se refere.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n  \"_id\": \"5deff1cd7ebad052d47c0c61\",\n  \"titulo\": \"Evento Teste\",\n  \"descricao\": \"Descrição teste\",\n  \"categoria\": \"Categoria Teste\",\n  \"autor\": \"5ded54c24782da41bc8a52af\",\n  \"createdAt\": \"2019-12-10T19:28:13.364Z\",\n  \"updatedAt\": \"2019-12-10T19:30:10.012Z\"\n  \"status\": \"Ativo\",\n  \"prioridade\": \"Média\",\n  \"geolocalizacao\": [],\n  \"comentarios\": [\n      {\n          \"_id\": \"5deff2417ebad052d47c0c66\",\n          \"texto\": \"Comentário Teste\",\n          \"autor\": \"5deff1987ebad052d47c0c5e\",\n          \"eventosRef\": \"5deff1cd7ebad052d47c0c61\",\n          \"createdAt\": \"2019-12-10T19:30:09.721Z\",\n          \"updatedAt\": \"2019-12-10T19:30:09.721Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Erro ao buscar os comentários.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/comentariosRoutes.js",
    "groupTitle": "Comentarios"
  },
  {
    "type": "get",
    "url": "/comentarios/usuario/:authorId",
    "title": "Busca os comentários de acordo com o autor (usuário).",
    "name": "GetComentariosPorUsuario",
    "group": "Comentarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "authorId",
            "description": "<p>ID único do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do usuário e do comentário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "autor",
            "description": "<p>Usuário que criou o comentário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "texto",
            "description": "<p>Conteúdo do comentário.</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "eventosRef",
            "description": "<p>Referência do evento ao qual o comentário se refere.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "eventos",
            "description": "<p>Lista com as referências dos eventos do usuário (array de objetos).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do usuário (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"_id\": \"5df443dc723c8d312c564471\",\n\"nome\": \"Maria\",\n\"email\": \"ma@email.com\",\n\"password\": \"$2a$08$bbpJj7RH/GLlPHhMWHixtOfJuYFWyKdPRladPfEAEzjQ/u20D.Iwm\",\n\"createdAt\": \"2019-12-14T02:07:24.570Z\",\n\"updatedAt\": \"2019-12-14T02:08:40.522Z\"\n\"eventos\": [],\n\"comentarios\": [\n    {\n       \"_id\": \"5df44428723c8d312c564474\",\n        \"texto\": \"comentario Pedro\",\n       \"autor\": \"5df443dc723c8d312c564471\",\n        \"eventosRef\": \"5df443ef723c8d312c564472\",\n        \"createdAt\": \"2019-12-14T02:08:40.006Z\",\n        \"updatedAt\": \"2019-12-14T02:08:40.006Z\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Erro ao buscar os comentários pelo autor.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/comentariosRoutes.js",
    "groupTitle": "Comentarios"
  },
  {
    "type": "post",
    "url": "/comentarios/post/:postId/autor/:authorId",
    "title": "Cria um novo comentário no evento.",
    "name": "PostComentarioPorEvento",
    "group": "Comentarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "postId",
            "description": "<p>ID único do evento onde será inserido o comentário.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "authorId",
            "description": "<p>ID único do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"mensagem\": \"Comentário incluído com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro ao criar o comentário.\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/comentariosRoutes.js",
    "groupTitle": "Comentarios"
  },
  {
    "type": "put",
    "url": "/comentarios/edit/:id",
    "title": "Atualiza um comentário.",
    "name": "UpdateComentariosPorId",
    "group": "Comentarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do comentário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  mensagem: \"Comentário atualizado com sucesso!\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro ao atualizar o comentário.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/comentariosRoutes.js",
    "groupTitle": "Comentarios"
  },
  {
    "type": "delete",
    "url": "/eventos/delete/:id",
    "title": "Busca o evento pelo ID e o deleta.",
    "name": "DeletePublicacaoPorId",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do evento.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Evento removido com sucesso!\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\"\"error\": \"Não foi possível remover o evento.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "get",
    "url": "/eventos/:id",
    "title": "Busca as informações de cada evento.",
    "name": "GetEventoPorId",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do evento.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "autor",
            "description": "<p>Usuário que criou o evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status do evento [&quot;Ativo&quot;, &quot;Concluído&quot;] .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Prioridade do evento [&quot;Alta&quot;, &quot;Média&quot;, &quot;Baixa&quot;].</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "geolocalizacao",
            "description": "<p>Lista com as coordenadas do local onde foi gerado o evento (array de números).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[ref]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do evento (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5df443ef723c8d312c564472\",\n    \"titulo\": \"Publicaçao 1\",\n    \"descricao\": \"Descrição teste\",\n    \"categoria\": \"Teste\",\n    \"autor\": \"5df443ba723c8d312c564470\",\n    \"createdAt\": \"2019-12-14T02:07:43.295Z\",\n    \"updatedAt\": \"2019-12-14T02:08:40.324Z\",\n    \"status\": \"Ativo\",\n    \"prioridade\": \"Média\",\n    \"geolocalizacao\": [-23.6523345, -46.7110965],\n    \"comentarios\": [\n        \"5df44428723c8d312c564474\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Não foi possível localizar o evento.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "get",
    "url": "/eventos/mes/:mes",
    "title": "Apresenta todos os registros de eventos para o mês escolhido.",
    "name": "GetEventoPorMes",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mes",
            "description": "<p>Mês do ano (1 - 12).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "autor",
            "description": "<p>Usuário que criou o evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status do evento [&quot;Ativo&quot;, &quot;Concluído&quot;] .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Prioridade do evento [&quot;Alta&quot;, &quot;Média&quot;, &quot;Baixa&quot;].</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "geolocalizacao",
            "description": "<p>Lista com as coordenadas do local onde foi gerado o evento (array de números).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[ref]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do evento (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n   {\n       \"_id\": \"5df443ef723c8d312c564472\",\n       \"titulo\": \"Evento 1\",\n       \"descricao\": \"Descrição teste1\",\n       \"categoria\": \"Teste\",\n       \"autor\": \"5df443ba723c8d312c564470\",\n       \"createdAt\": \"2019-12-14T02:07:43.295Z\",\n       \"updatedAt\": \"2019-12-14T02:08:40.324Z\",\n       \"status\": \"Ativo\",\n       \"prioridade\": \"Média\",\n       \"geolocalizacao\": [-23.6523345, -46.7110965],\n       \"comentarios\": [\n           \"5df44428723c8d312c564474\"\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Não foi possível localizar eventos para esse mês.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "get",
    "url": "/eventos?query_key=query_value",
    "title": "Apresenta todos os registros de eventos, que podem ser filtrados por \"status\", \"categoria\" e \"prioridade\".",
    "name": "GetEventos",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "query string": [
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Filtra os resultados pelo status (Ativo, Concluído).</p>"
          },
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "categoria",
            "description": "<p>Filtra os resultados pela categoria ().</p>"
          },
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Filtra os resultados pela prioridade (Alta, Média, Baixa).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "autor",
            "description": "<p>Usuário que criou o evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status do evento [&quot;Ativo&quot;, &quot;Concluído&quot;] .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Prioridade do evento [&quot;Alta&quot;, &quot;Média&quot;, &quot;Baixa&quot;].</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "geolocalizacao",
            "description": "<p>Lista com as coordenadas do local onde foi gerado o evento (array de números).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[ref]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do evento (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n   {\n       \"_id\": \"5df443ef723c8d312c564472\",\n       \"titulo\": \"Evento 1\",\n       \"descricao\": \"Descrição teste1\",\n       \"categoria\": \"Teste\",\n       \"autor\": \"5df443ba723c8d312c564470\",\n       \"createdAt\": \"2019-12-14T02:07:43.295Z\",\n       \"updatedAt\": \"2019-12-14T02:08:40.324Z\",\n       \"status\": \"Ativo\",\n       \"prioridade\": \"Média\",\n       \"geolocalizacao\": [-23.6523345, -46.7110965],\n       \"comentarios\": [\n           \"5df44428723c8d312c564474\"\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Não foi possível trazer o registro de eventos.\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "post",
    "url": "/eventos/post/:id",
    "title": "Adicione um Evento relacionado ao usuário logado",
    "name": "PostEventoPorUsuario",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do evento.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \" message\": \"Evento incluído com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro ao criar o evento.\" \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "put",
    "url": "/eventos/edit/:id",
    "title": "Atualiza as informações do evento.",
    "name": "PutEventoPorId",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do evento.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Evento atualizado com sucesso.\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Erro ao atualizar as informações do evento.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "get",
    "url": "/eventos/autor/:idAuthor",
    "title": "Busca os eventos de acordo com o autor (usuário), que podem ser filtrados por \"status\", \"categoria\" e \"prioridade\".",
    "name": "getEventosPorIdAutor",
    "group": "Eventos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "idAuthor",
            "description": "<p>ID único do evento.</p>"
          }
        ],
        "query string": [
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Filtra os resultados pelo status (Ativo, Concluído).</p>"
          },
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "categoria",
            "description": "<p>Filtra os resultados pela categoria ().</p>"
          },
          {
            "group": "query string",
            "type": "string",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Filtra os resultados pela prioridade (Alta, Média, Baixa).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titulo",
            "description": "<p>Título do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>Breve descrição do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "categoria",
            "description": "<p>Categoria do evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "autor",
            "description": "<p>Usuário que criou o evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status do evento [&quot;Ativo&quot;, &quot;Concluído&quot;] .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "prioridade",
            "description": "<p>Prioridade do evento [&quot;Alta&quot;, &quot;Média&quot;, &quot;Baixa&quot;].</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "geolocalizacao",
            "description": "<p>Lista com as coordenadas do local onde foi gerado o evento (array de números).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[ref]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do evento (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n   {\n       \"_id\": \"5df443ef723c8d312c564472\",\n       \"titulo\": \"Evento 1\",\n       \"descricao\": \"Descrição teste1\",\n       \"categoria\": \"Teste\",\n       \"autor\": \"5df443ba723c8d312c564470\",\n       \"createdAt\": \"2019-12-14T02:07:43.295Z\",\n       \"updatedAt\": \"2019-12-14T02:08:40.324Z\",\n       \"status\": \"Ativo\",\n       \"prioridade\": \"Média\",\n       \"geolocalizacao\": [-23.6523345, -46.7110965],\n       \"comentarios\": [\n           \"5df44428723c8d312c564474\"\n       ]\n   },\n   {\n       \"_id\": \"5df443ef723c8d312c564473\",\n       \"titulo\": \"Evento 2\",\n       \"descricao\": \"Descrição teste2\",\n       \"categoria\": \"Teste\",\n       \"autor\": \"5df443ba723c8d312c564470\",\n       \"createdAt\": \"2019-12-14T02:07:43.295Z\",\n       \"updatedAt\": \"2019-12-14T02:08:40.324Z\",\n       \"status\": \"Ativo\",\n       \"prioridade\": \"Baixo\",\n       \"geolocalizacao\": [-23.6523345, -46.7110965],\n       \"comentarios\": [\n           \"5df44428723c8d312c564475\"\n       ]\n   }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": Erro ao buscar os eventos pelo autor.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/eventosRoutes.js",
    "groupTitle": "Eventos"
  },
  {
    "type": "post",
    "url": "/sessions",
    "title": "Gera token de acesso para o usuário.",
    "name": "getToken",
    "group": "Sessoes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID único do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"usuario\": {\n       \"_id\": \"5df443dc723c8d312c564471\",\n       \"nome\": \"Usuário teste\"\n   },\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkzXVCJ9.eyJfaWQiOiI1ZGY0NDNkYzcyM2M4ZDMxMmM1NjQ0NzEiLCJpYXQiOjE1NzYzNjEyNTcsImV4cCI6MTU3Njc5MzI1N30.c1OF1KWFsf5c09Rj3xw9sxow17o0weOpoBv53mj0wAI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized \n{\n  \"error\": \"Acesso não autorizado.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/sessionRoutes.js",
    "groupTitle": "Sessoes"
  },
  {
    "type": "delete",
    "url": "/usuarios/delete/:id",
    "title": "Seleciona usuário pelo ID e o deleta.",
    "name": "DeleteUsuarioPorId",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"mensagem\": \"Usuário excluído com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error: \"Não foi possível excluir o usuário.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoutes.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios",
    "title": "Apresenta todos os registros de usuários.",
    "name": "GetUsuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "eventos",
            "description": "<p>Lista com as referências dos eventos do usuário (array de objetos).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do usuário (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5deff1987ebad052d47c0c5e\",\n    \"nome\": \"Usuário Teste\",\n    \"email\": \"usuario@email.com\",\n    \"password\": \"$2a$08$wz2DGNFv1JjCTr7W0hz.N.Gm.pRcTxB6V.9T0NIMKYT1cLqZRB8i2\",\n    \"createdAt\": \"2019-12-10T19:27:20.644Z\",\n    \"updatedAt\": \"2019-12-10T19:30:10.156Z\",\n     \"eventos\": [\n        \"5deff1b97ebad052d47c0c5f\"\n    ],\n    \"comentarios\": [\n        \"5deff2417ebad052d47c0c66\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"error\": \"Não foi possível trazer o registro de usuários.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoutes.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/usuarios/:id",
    "title": "Busca as informações de cada usuário.",
    "name": "GetUsuariosPorId",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectID",
            "optional": false,
            "field": "_id",
            "description": "<p>ID do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password do usuário.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data da última edição do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "eventos",
            "description": "<p>Lista com as referências dos eventos do usuário (array de objetos).</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comentarios",
            "description": "<p>Lista com as referência dos comentários do usuário (array de objetos).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5deff1987ebad052d47c0c5e\",\n    \"nome\": \"Usuário Teste\",\n    \"email\": \"usuario@email.com\",\n    \"password\": \"$2a$08$wz2DGNFv1JjCTr7W0hz.N.Gm.pRcTxB6V.9T0NIMKYT1cLqZRB8i2\",\n    \"createdAt\": \"2019-12-10T19:27:20.644Z\",\n    \"updatedAt\": \"2019-12-10T19:30:10.156Z\",\n     \"eventos\": [\n        \"5deff1b97ebad052d47c0c5f\"\n    ],\n    \"comentarios\": [\n        \"5deff2417ebad052d47c0c66\"\n    ],\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": `Não foi possível localizar o usuário de ID: ${usuarioId}.`\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoutes.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "post",
    "url": "/usuarios",
    "title": "Cria um novo registro de usuário",
    "name": "PostUsuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome obrigatório.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email obrigatório.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password obrigatório.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nomeUsuario",
            "description": "<p>Nome do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"mensagem\": `Usuário ${nomeUsuario} incluído com sucesso!`\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Erro ao criar o registro do usuário\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoutes.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "put",
    "url": "/usuarios/edit/:id",
    "title": "Atualiza as informações do usuário.",
    "name": "PutUsuarioPorId",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectID",
            "optional": false,
            "field": "id",
            "description": "<p>ID único do usuário.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nomeUsuario",
            "description": "<p>Nome do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  mensagem: `Usuário(a) ${nomeUsuario} atualizado(a) com sucesso!`\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Erro",
            "description": "<p>ao atualizar as informações do usuário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Erro ao atualizar as informações do usuário.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuariosRoutes.js",
    "groupTitle": "Usuarios"
  }
] });
