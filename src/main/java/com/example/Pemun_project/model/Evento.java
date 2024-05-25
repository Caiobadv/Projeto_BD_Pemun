package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class Evento {
    private String nome_evento;
    private LocalDateTime data_evento;
    private String descricao_evento;
    private String rua_endereco_evento;
    private String numero_endereco_evento;
    private String bairro_endereco_evento;
    private Integer cep_endereco_evento;
    private String complemento_endereco_evento;
}
