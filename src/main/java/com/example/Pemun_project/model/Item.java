package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Item {
    private Integer id_item;
    private String nome_item;
    private Integer qtd_total_item;
    private String descricao_item;
    private Float preco_item;
}
