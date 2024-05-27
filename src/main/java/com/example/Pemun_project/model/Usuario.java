package com.example.Pemun_project.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class Usuario {
    private Integer cpf_user;
    private String tipo_user;
    private String nome_user;
    private String instituicao_ensino_user;
    private String curso_user;
    private String login_user;
    private String senha_login_user;
    private String email_user;
    private String telefone1_user;
    private String telefone2_user;
    private String rua_endereco_user;
    private String numero_endereco_user;
    private String bairro_endereco_user;
    private Integer cep_endereco_user;
    private String complemento_endereco_user;
}
