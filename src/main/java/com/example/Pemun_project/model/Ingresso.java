package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class Ingresso {
    private Integer id_produto_ingresso;
    private String nome_evento_ingresso;
    private LocalDateTime data_compra_ingresso;
}
