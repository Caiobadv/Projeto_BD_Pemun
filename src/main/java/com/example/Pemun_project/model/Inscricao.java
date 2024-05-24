package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class Inscricao {
    private Integer id_inscricao;
    private Timestamp data_inscricao;
    private Float valor_inscricao;
    private String forma_pagamento_inscricao;
    private String op1_representacao_inscricao;
    private String op2_representacao_inscricao;
    private String op3_representacao_inscricao;
}
