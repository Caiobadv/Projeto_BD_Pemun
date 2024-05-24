CREATE DATABASE PEMUN_DBPROJECT

CREATE TABLE Usuario (
	cpf_user integer PRIMARY KEY,
	tipo_user varchar(1) NOT NULL, # D=Default e A=Adm
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
	CONSTRAINT Fk_cpf_user FOREIGN KEY(cpf_delegado) REFERENCES Usuario(cpf_user)
);

CREATE TABLE Inscricao (
	id_inscricao integer PRIMARY KEY,
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
	CONSTRAINT Fk_cpf_delegado_inscricao FOREIGN KEY(cpf_delegado_inscricao_faz) REFERENCES Delegado(cpf_delegado),
	CONSTRAINT Fk_id_comite_inscricao FOREIGN KEY(id_comite_inscricao_faz) REFERENCES Comite(id_comite),
	CONSTRAINT Fk_id_inscricao_faz FOREIGN KEY(id_inscricao_faz) REFERENCES Inscricao(id_inscricao)
);

CREATE TABLE Diretor (
	cpf_diretor integer,
	id_comite_diretor integer,
	CONSTRAINT Fk_cpf_user_diretor FOREIGN KEY(cpf_diretor) REFERENCES Usuario(cpf_user),
	CONSTRAINT Fk_id_comite_diretor FOREIGN KEY(id_comite_diretor) REFERENCES Comite(id_comite)
);

CREATE TABLE supervisiona (
	cpf_diretor_supervisor integer,
	cpf_diretor_supervisionado integer,
	CONSTRAINT Fk_cpf_diretor_supervisor FOREIGN KEY(cpf_diretor_supervisor) REFERENCES Diretor(cpf_diretor),
	CONSTRAINT Fk_cpf_diretor_supervisionado FOREIGN KEY(cpf_diretor_supervisionado) REFERENCES Diretor(cpf_diretor)
);

CREATE TABLE Item (
	id_item integer PRIMARY KEY,
	nome_item varchar(100),
	qtd_total_item integer,
	descricao_item varchar(200),
	preco_item float
);

CREATE TABLE Pacote (
	id_item_pacote integer,
	CONSTRAINT Fk_id_item FOREIGN KEY(id_item_pacote) REFERENCES Item(id_item)
);

CREATE TABLE Produto ( 
	id_item_produto integer,
	cor_produto varchar(50),
	tamanho varchar(1), #P, M, G ou U(unico)
	CONSTRAINT Fk_id_item_produto FOREIGN KEY(id_item_produto) REFERENCES Item(id_item)
);

CREATE TABLE contem (
	id_pacote_contem integer,
	id_item_contido integer,
	CONSTRAINT Fk_id_pacote_contem FOREIGN KEY(id_pacote_contem) REFERENCES Pacote(id_item_pacote),
	CONSTRAINT Fk_id_item_contido FOREIGN KEY(id_item_contido) REFERENCES Produto(id_item_produto)
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
	id_produto_ingresso integer,
	nome_evento_ingresso varchar(100),
	data_compra_ingresso datetime,
	CONSTRAINT Fk_id_produto FOREIGN KEY(id_produto_ingresso) REFERENCES Produto(id_item_produto),
	CONSTRAINT Fk_nome_evento FOREIGN KEY(nome_evento_ingresso) REFERENCES Evento(nome_evento)
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
	CONSTRAINT Fk_cpf_user_compra FOREIGN KEY(cpf_user_compra) REFERENCES Usuario(cpf_user),
	CONSTRAINT Fk_id_carrinho_compra FOREIGN KEY(id_carrinho_compra) REFERENCES Carrinho(id_carrinho),
	CONSTRAINT Fk_id_itens_compra FOREIGN KEY(id_itens_compra) REFERENCES Item(id_item)
);