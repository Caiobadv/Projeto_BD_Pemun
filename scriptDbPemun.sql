-- CREATE DATABASE PEMUN_DBPROJECT

CREATE TABLE Usuario (
	cpf_user integer PRIMARY KEY,
	tipo_user varchar(20) NOT NULL, # acho que aqui a gnt poderia restringir para 1 caracter e por D=Default e A=Adm
	nome_user varchar(100),
	instituicao_ensino_user varchar(50),
	curso_user varchar(50),
	login_user varchar(50),
	senha_login_user varchar(50),
	email_user varchar(50),
	telefone_user varchar(20),
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
	tema2_comite varchar(200), # adicionei isso
	descricao_comite varchar(300),
	qtd_vagas_comite integer
);

CREATE TABLE Delegado (
	cpf_delegado integer,
	CONSTRAINT Fk_cpf_user FOREIGN KEY(cpf_delegado) REFERENCES Usuario(cpf_user)
);

CREATE TABLE Inscricao (
	id_inscricao integer PRIMARY KEY,
	cpf_delegado_inscricao integer, # adicionei isso
	id_comite_inscricao integer, # adicionei isso
	data_inscricao timestamp,
	valor_inscricao float, # adicionei isso
	forma_pagamento_inscricao varchar(20),
	op1_representacao_inscricao varchar(100),
	op2_representacao_inscricao varchar(100),
	op3_representacao_inscricao varchar(100),
	CONSTRAINT Fk_cpf_delegado FOREIGN KEY(cpf_delegado_inscricao) REFERENCES Delegado(cpf_delegado),
	CONSTRAINT Fk_id_comite FOREIGN KEY(id_comite_inscricao) REFERENCES Comite(id_comite)
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
	id_pacote integer PRIMARY KEY,
	id_item_pacote integer,
	CONSTRAINT Fk_id_item FOREIGN KEY(id_item_pacote) REFERENCES Item(id_item)
);

CREATE TABLE Produto ( # não entendi pq a gnt precisa disso, por mim deixava em Item
	id_item_produto integer,
	cor_produto varchar(50),
	tamanho varchar(1), #P, M, G ou U(unico)
	CONSTRAINT Fk_id_item_produto FOREIGN KEY(id_item_produto) REFERENCES Item(id_item)
);

CREATE TABLE Evento (
	nome_evento varchar(100) PRIMARY KEY,
	data_evento date,
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
	data_compra_ingresso date,
	CONSTRAINT Fk_id_produto FOREIGN KEY(id_produto_ingresso) REFERENCES Produto(id_item_produto),
	CONSTRAINT Fk_nome_evento FOREIGN KEY(nome_evento_ingresso) REFERENCES Evento(nome_evento)
);

-- rodei até aqui

CREATE TABLE Carrinho (
	id_carrinho integer PRIMARY KEY,
	valor_total_carrinho integer,
	qtd_total_itens_carrinho integer # falta os ids dos itens
);

insert into Usuario (cpf_user,tipo_user,nome_user) values (434343, "secre", "rodrigo");

insert into Comite (id_comite,nome_comite,tipo_comite, tema1_comite) values (32, "pnud", "tec", "hackathon");

INSERT INTO Usuario (cpf_user, tipo_user, nome_user, instituicao_ensino_user, curso_user, login_user, senha_login_user, email_user, telefone_user, rua_endereco_user, numero_endereco_user, bairro_endereco_user, cep_endereco_user, complemento_endereco_user)
VALUES (323232, 'tipo', 'nome', 'instituicao', 'curso', 'login', 'senha', 'email', 'telefone', 'rua', 'numero', 'bairro', 43432, 'complemento');

INSERT INTO Delegado (cpf_delegado)
VALUES (323232);