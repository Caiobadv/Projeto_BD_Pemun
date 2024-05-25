package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Compra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class CompraRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Compra> findAll() {
        String sql = "SELECT * FROM compra";
        return jdbcTemplate.query(sql, new CompraRowMapper());
    }

    public Optional<Compra> findById(Integer cpfUser, Integer idCarrinho, Integer idItens) {
        String sql = "SELECT * FROM compra WHERE cpf_user_compra = ? AND id_carrinho_compra = ? AND id_itens_compra = ?";
        return jdbcTemplate.query(sql, new Object[]{cpfUser, idCarrinho, idItens}, new CompraRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Compra compra) {
        String sql = "INSERT INTO compra (qtd_itens_compra, cpf_user_compra, id_carrinho_compra, id_itens_compra) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, compra.getQtd_itens_compra(), compra.getCpf_user_compra(), compra.getId_carrinho_compra(), compra.getId_itens_compra());
    }

    public int update(Compra compra) {
        String sql = "UPDATE compra SET qtd_itens_compra = ?, id_carrinho_compra = ?, id_itens_compra = ? WHERE cpf_user_compra = ? AND id_carrinho_compra = ? AND id_itens_compra = ?";
        return jdbcTemplate.update(sql, compra.getQtd_itens_compra(), compra.getId_carrinho_compra(), compra.getId_itens_compra(), compra.getCpf_user_compra(), compra.getId_carrinho_compra(), compra.getId_itens_compra());
    }

    public int deleteById(Integer cpfUser, Integer idCarrinho, Integer idItens) {
        String sql = "DELETE FROM compra WHERE cpf_user_compra = ? AND id_carrinho_compra = ? AND id_itens_compra = ?";
        return jdbcTemplate.update(sql, cpfUser, idCarrinho, idItens);
    }

    private static class CompraRowMapper implements RowMapper<Compra> {
        @Override
        public Compra mapRow(ResultSet rs, int rowNum) throws SQLException {
            Compra compra = new Compra();
            compra.setQtd_itens_compra(rs.getInt("qtd_itens_compra"));
            compra.setCpf_user_compra(rs.getInt("cpf_user_compra"));
            compra.setId_carrinho_compra(rs.getInt("id_carrinho_compra"));
            compra.setId_itens_compra(rs.getInt("id_itens_compra"));
            return compra;
        }
    }
}
