**Requisitos Funcionais**

**Requisitos Nao funcionais**

**Regra de negocio**

# Cadastro de carro

**RF**
Deve ser possivel cadastrar um novo carro.
Deve ser possivel listar todas as categorias

**RN**
Não deve ser possivel cadastrar um carro com uma placa ja existente.
Não deve ser possivel alterar de um carro ja cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros #

**RF**
Deve ser possivel listar todos os carros disponiveis
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da catmarcaegoria
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RN**
O usuario nao precisa estar logado no sistema.

# Cadastro de Especificacao no carro

**RF**
Deve ser possivel cadastrar uma especificacao para um carro
Deve ser possivel listar todas as especificacoes
Deve ser possivel listar todos os carros

**RN**
Não deve ser possivel cadasrar uma especificacao para uma carro nao cadastrado
Não deve ser possivel cadastrar uma especificacao ja existente para o mesmo carro
O usuario responsavel pelo cadastro deve ser um usuario administrador

# Cadastro de images do carro

**RF**
Deve ser possivel cadastrar a imagem do carro

**RFN**
Ultilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O alugueu deve ter duracao minima de 24 horas.
Não deve ser possivel cadastradar um novo aluguel casa ja exista um aberto para o mesmo usuário
Não deve ser possivel cadastradar um novo aluguel casa ja exista um aberto para o mesmo carro
