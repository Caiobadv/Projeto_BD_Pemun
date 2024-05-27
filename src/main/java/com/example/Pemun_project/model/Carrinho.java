package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Carrinho {
    private Integer id_carrinho;
    private Integer valor_total_carrinho;
    private Integer qtd_total_itens_carrinho;
    private List<Item> id_itens;
}
