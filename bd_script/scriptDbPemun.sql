CREATE DATABASE PEMUN_DBPROJECT;
use PEMUN_DBPROJECT;

CREATE TABLE Usuario (
	cpf_user integer PRIMARY KEY,
	tipo_user varchar(1) NOT NULL,
	nome_user varchar(100),
	instituicao_ensino_user varchar(50),
	curso_user varchar(50),
	login_user varchar(50),
	senha_login_user varchar(50),
	email_user varchar(50),
	telefone1_user varchar(20),
	telefone2_user varchar(20),
	rua_endereco_user varchar(100),
	numero_endereco_user varchar(20),
	bairro_endereco_user varchar(50),
	cep_endereco_user integer,
	complemento_endereco_user varchar(50)
);

CREATE TABLE Comite (
	id_comite integer PRIMARY KEY,
	nome_comite varchar(100),
	tipo_comite varchar(50),
	tema1_comite varchar(200) NOT NULL,
	tema2_comite varchar(200),
	descricao_comite varchar(300),
	qtd_vagas_comite integer
);

CREATE TABLE Delegado (
	cpf_delegado integer,
	CONSTRAINT Fk_cpf_user FOREIGN KEY(cpf_delegado) REFERENCES Usuario(cpf_user) on DELETE cascade
);

CREATE TABLE Inscricao (
	id_inscricao integer auto_increment PRIMARY KEY,
	data_inscricao timestamp,
	valor_inscricao float, # adicionei isso
	forma_pagamento_inscricao varchar(20),
	op1_representacao_inscricao varchar(100),
	op2_representacao_inscricao varchar(100),
	op3_representacao_inscricao varchar(100)
);

CREATE TABLE faz (
	cpf_delegado_inscricao_faz integer,
	id_comite_inscricao_faz integer,
	id_inscricao_faz integer, 
	CONSTRAINT Fk_cpf_delegado_inscricao FOREIGN KEY(cpf_delegado_inscricao_faz) REFERENCES Delegado(cpf_delegado) on DELETE cascade,
	CONSTRAINT Fk_id_comite_inscricao FOREIGN KEY(id_comite_inscricao_faz) REFERENCES Comite(id_comite) on DELETE cascade,
	CONSTRAINT Fk_id_inscricao_faz FOREIGN KEY(id_inscricao_faz) REFERENCES Inscricao(id_inscricao) on DELETE cascade
);

CREATE TABLE Diretor (
	cpf_diretor integer,
	id_comite_diretor integer,
	CONSTRAINT Fk_cpf_user_diretor FOREIGN KEY(cpf_diretor) REFERENCES Usuario(cpf_user) on DELETE cascade,
	CONSTRAINT Fk_id_comite_diretor FOREIGN KEY(id_comite_diretor) REFERENCES Comite(id_comite) on DELETE cascade
);

CREATE TABLE supervisiona (
	cpf_diretor_supervisor integer,
	cpf_diretor_supervisionado integer,
	CONSTRAINT Fk_cpf_diretor_supervisor FOREIGN KEY(cpf_diretor_supervisor) REFERENCES Diretor(cpf_diretor) on DELETE cascade,
	CONSTRAINT Fk_cpf_diretor_supervisionado FOREIGN KEY(cpf_diretor_supervisionado) REFERENCES Diretor(cpf_diretor) on DELETE cascade
);

CREATE TABLE Item (
	id_item integer auto_increment PRIMARY KEY,
	nome_item varchar(100),
	qtd_total_item integer,
	descricao_item varchar(200),
	preco_item float
);

CREATE TABLE Pacote (
	id_pacote integer auto_increment PRIMARY KEY,
	id_item_pacote integer,
	CONSTRAINT Fk_id_item FOREIGN KEY(id_item_pacote) REFERENCES Item(id_item) on DELETE cascade
);

CREATE TABLE Produto ( 
	id_produto integer auto_increment PRIMARY KEY,
	id_item_produto integer,
	cor_produto varchar(50),
	tamanho varchar(1), #P, M, G ou U(unico)
	CONSTRAINT Fk_id_item_produto FOREIGN KEY(id_item_produto) REFERENCES Item(id_item) on DELETE cascade
);

CREATE TABLE contem (
	id_pacote_contem integer,
	id_item_contido integer,
	CONSTRAINT Fk_id_pacote_contem FOREIGN KEY(id_pacote_contem) REFERENCES Pacote(id_item_pacote) on DELETE cascade ,
	CONSTRAINT Fk_id_item_contido FOREIGN KEY(id_item_contido) REFERENCES Produto(id_item_produto) on DELETE cascade,
	constraint Fk_id_contem primary key (id_pacote_contem, id_item_contido)
);

CREATE TABLE Evento (
	nome_evento varchar(100) PRIMARY KEY,
	data_evento datetime,
	descricao_evento varchar(500),
	rua_endereco_evento varchar(100),
	numero_endereco_evento varchar(20),
	bairro_endereco_evento varchar(50),
	cep_endereco_evento integer,
	complemento_endereco_evento varchar(50)
);

CREATE TABLE Ingresso (
	id_ingresso integer auto_increment PRIMARY KEY,
	id_produto_ingresso integer,
	nome_evento_ingresso varchar(100),
	data_compra_ingresso datetime,
	CONSTRAINT Fk_id_produto FOREIGN KEY(id_produto_ingresso) REFERENCES Produto(id_item_produto) on DELETE cascade,
	CONSTRAINT Fk_nome_evento FOREIGN KEY(nome_evento_ingresso) REFERENCES Evento(nome_evento) on DELETE cascade
);

CREATE TABLE Carrinho (
	id_carrinho integer PRIMARY KEY,
	valor_total_carrinho integer,
	qtd_total_itens_carrinho integer
);

CREATE TABLE compra (
	qtd_itens_compra integer,
	cpf_user_compra integer,
	id_carrinho_compra integer,
	id_itens_compra integer,
	CONSTRAINT Fk_cpf_user_compra FOREIGN KEY(cpf_user_compra) REFERENCES Usuario(cpf_user) on DELETE cascade,
	CONSTRAINT Fk_id_carrinho_compra FOREIGN KEY(id_carrinho_compra) REFERENCES Carrinho(id_carrinho) on DELETE cascade,
	CONSTRAINT Fk_id_itens_compra FOREIGN KEY(id_itens_compra) REFERENCES Item(id_item) on DELETE cascade
);

CREATE TABLE CarrinhoItem (
    id_carrinho INT,
    id_item INT,
    qtd_item INT,
    PRIMARY KEY (id_carrinho, id_item),
    FOREIGN KEY (id_carrinho) REFERENCES Carrinho(id_carrinho) ON DELETE CASCADE,
    FOREIGN KEY (id_item) REFERENCES Item(id_item) ON DELETE CASCADE
);


INSERT INTO Inscricao (id_inscricao, data_inscricao, valor_inscricao, forma_pagamento_inscricao, op1_representacao_inscricao, op2_representacao_inscricao, op3_representacao_inscricao)
VALUES (10, CURRENT_TIMESTAMP, 100.50, 'Credit Card', 'Representation 1', 'Representation 2', 'Representation 3');

INSERT INTO Usuario (cpf_user, tipo_user, nome_user)
VALUES (123456, 'A', 'rodrigo');

INSERT INTO Comite (id_comite, nome_comite, tipo_comite, tema1_comite, tema2_comite, descricao_comite, qtd_vagas_comite)
VALUES (1, 'Nome do Comitê', 'Tipo', 'Tema 1', 'Tema 2', 'Descrição', 10);

INSERT INTO Diretor (cpf_diretor, id_comite_diretor)
VALUES (123456, 1);

INSERT INTO Usuario (cpf_user, tipo_user, nome_user)
VALUES (789012, 'A', 'rodrigo');

INSERT INTO Diretor (cpf_diretor, id_comite_diretor)
VALUES (789012, 1);

INSERT INTO supervisiona (cpf_diretor_supervisor, cpf_diretor_supervisionado)
VALUES (123456, 789012);

INSERT INTO Item (nome_item, qtd_total_item, descricao_item, preco_item)
VALUES ('Copo_Mengao', 8, 'copo dos campeoes', 159.99);

INSERT INTO Usuario (cpf_user, tipo_user, nome_user, instituicao_ensino_user, curso_user, login_user, senha_login_user, email_user, telefone1_user, telefone2_user, rua_endereco_user, numero_endereco_user, bairro_endereco_user, cep_endereco_user, complemento_endereco_user)
VALUES (123456789, 'D', 'João Silva', 'Universidade XYZ', 'Engenharia', 'joaosilva', 'senha123', 'joao.silva@exemplo.com', '123456789', '987654321', 'Rua A', '123', 'Bairro B', 12345678, 'Apto 1');

INSERT INTO Usuario (cpf_user, tipo_user, nome_user, instituicao_ensino_user, curso_user, login_user, senha_login_user, email_user, telefone1_user, telefone2_user, rua_endereco_user, numero_endereco_user, bairro_endereco_user, cep_endereco_user, complemento_endereco_user)
VALUES (987654321, 'A', 'João Silva', 'Universidade XYZ', 'Engenharia', 'joaosilva', 'senha123', 'joao.silva@exemplo.com', '123456789', '987654321', 'Rua A', '123', 'Bairro B', 12345678, 'Apto 1');

INSERT INTO Comite (id_comite, nome_comite, tipo_comite, tema1_comite, tema2_comite, descricao_comite, qtd_vagas_comite)
VALUES (2, 'Comitê de Tecnologia', 'Tecnologia', 'IA e Machine Learning', 'Cibersegurança', 'Discussões sobre avanços tecnológicos', 50);

INSERT INTO Delegado (cpf_delegado)
VALUES (123456789);

INSERT INTO Inscricao (id_inscricao, data_inscricao, valor_inscricao, forma_pagamento_inscricao, op1_representacao_inscricao, op2_representacao_inscricao, op3_representacao_inscricao)
VALUES (2, '2024-05-25 10:00:00', 100.00, 'Cartão', 'Brasil', 'EUA', 'China');

INSERT INTO faz (cpf_delegado_inscricao_faz, id_comite_inscricao_faz, id_inscricao_faz)
VALUES (123456789, 2, 2);

INSERT INTO Diretor (cpf_diretor, id_comite_diretor)
VALUES (123456789, 2);

INSERT INTO Diretor (cpf_diretor, id_comite_diretor)
VALUES (987654321, 2);

INSERT INTO supervisiona (cpf_diretor_supervisor, cpf_diretor_supervisionado)
VALUES (123456789, 987654321);

INSERT INTO Item (id_item, nome_item, qtd_total_item, descricao_item, preco_item)
VALUES (2, 'Camisa', 100, 'Camisa oficial do evento', 50.00);

INSERT INTO Pacote (id_item_pacote)
VALUES (2);

INSERT INTO Produto (id_item_produto, cor_produto, tamanho)
VALUES (2, 'Azul', 'M');

INSERT INTO Produto (id_item_produto, cor_produto, tamanho)
VALUES (2, 'verde', 'g');

INSERT INTO Produto (id_item_produto, cor_produto, tamanho)
VALUES (1, 'vermelha', 'u');

INSERT INTO Produto (id_item_produto, cor_produto, tamanho)
VALUES (2, 'vermelho', 'p');

INSERT INTO contem (id_pacote_contem, id_item_contido)
VALUES (2, 2);

INSERT INTO Evento (nome_evento, data_evento, descricao_evento, rua_endereco_evento, numero_endereco_evento, bairro_endereco_evento, cep_endereco_evento, complemento_endereco_evento)
VALUES ('Evento de Tecnologia', '2024-06-10 09:00:00', 'Evento sobre tecnologia e inovação', 'Rua B', '456', 'Bairro C', 87654321, 'Sala 2');

INSERT INTO Ingresso (id_produto_ingresso, nome_evento_ingresso, data_compra_ingresso)
VALUES (2, 'Evento de Tecnologia', '2024-05-20 14:00:00');

INSERT INTO Carrinho (id_carrinho, valor_total_carrinho, qtd_total_itens_carrinho)
VALUES (2, 150.00, 3);

INSERT INTO compra (qtd_itens_compra, cpf_user_compra, id_carrinho_compra, id_itens_compra)
VALUES (3, 123456789, 2, 2);

INSERT INTO Carrinho (id_carrinho, valor_total_carrinho, qtd_total_itens_carrinho) VALUES (1, 0, 0);
