package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Comite {
    private Integer id_comite;
    private String nome_comite;
    private String tipo_comite;
    private String tema1_comite;
    private String tema2_comite;
    private String descricao_comite;
    private Integer qtd_vagas_comite;
}
