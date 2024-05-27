package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class UsuarioRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Usuario> findAll() {
        String sql = "SELECT * FROM Usuario";
        return jdbcTemplate.query(sql, new UsuarioRowMapper());
    }

    public Optional<Usuario> findByCpf(Integer cpf) {
        String sql = "SELECT * FROM Usuario WHERE cpf_user = ?";
        return jdbcTemplate.query(sql, new Object[]{cpf}, new UsuarioRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Usuario usuario) {
        String sql = "INSERT INTO Usuario (cpf_user, tipo_user, nome_user, instituicao_ensino_user, curso_user, login_user, senha_login_user, email_user, telefone1_user, rua_endereco_user, numero_endereco_user, bairro_endereco_user, cep_endereco_user, complemento_endereco_user) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, usuario.getCpf_user(), usuario.getTipo_user(), usuario.getNome_user(), usuario.getInstituicao_ensino_user(), usuario.getCurso_user(), usuario.getLogin_user(), usuario.getSenha_login_user(), usuario.getEmail_user(), usuario.getTelefone1_user(), usuario.getRua_endereco_user(), usuario.getNumero_endereco_user(), usuario.getBairro_endereco_user(), usuario.getCep_endereco_user(), usuario.getComplemento_endereco_user());
    }

    public int update(Usuario usuario) {
        String sql = "UPDATE Usuario SET tipo_user = ?, nome_user = ?, instituicao_ensino_user = ?, curso_user = ?, login_user = ?, senha_login_user = ?, email_user = ?, telefone1_user = ?, rua_endereco_user = ?, numero_endereco_user = ?, bairro_endereco_user = ?, cep_endereco_user = ?, complemento_endereco_user = ? WHERE cpf_user = ?";
        return jdbcTemplate.update(sql, usuario.getTipo_user(), usuario.getNome_user(), usuario.getInstituicao_ensino_user(), usuario.getCurso_user(), usuario.getLogin_user(), usuario.getSenha_login_user(), usuario.getEmail_user(), usuario.getTelefone1_user(), usuario.getRua_endereco_user(), usuario.getNumero_endereco_user(), usuario.getBairro_endereco_user(), usuario.getCep_endereco_user(), usuario.getComplemento_endereco_user(), usuario.getCpf_user());
    }

    public int deleteByCpf(Integer cpf) {
        String sql = "DELETE FROM Usuario WHERE cpf_user = ?";
        return jdbcTemplate.update(sql, cpf);
    }

    private static class UsuarioRowMapper implements RowMapper<Usuario> {
        @Override
        public Usuario mapRow(ResultSet rs, int rowNum) throws SQLException {
            Usuario usuario = new Usuario();
            usuario.setCpf_user(rs.getInt("cpf_user"));
            usuario.setTipo_user(rs.getString("tipo_user"));
            usuario.setNome_user(rs.getString("nome_user"));
            usuario.setInstituicao_ensino_user(rs.getString("instituicao_ensino_user"));
            usuario.setCurso_user(rs.getString("curso_user"));
            usuario.setLogin_user(rs.getString("login_user"));
            usuario.setSenha_login_user(rs.getString("senha_login_user"));
            usuario.setEmail_user(rs.getString("email_user"));
            usuario.setTelefone1_user(rs.getString("telefone1_user"));
            usuario.setRua_endereco_user(rs.getString("rua_endereco_user"));
            usuario.setNumero_endereco_user(rs.getString("numero_endereco_user"));
            usuario.setBairro_endereco_user(rs.getString("bairro_endereco_user"));
            usuario.setCep_endereco_user(rs.getInt("cep_endereco_user"));
            usuario.setComplemento_endereco_user(rs.getString("complemento_endereco_user"));
            return usuario;
        }
    }
}
