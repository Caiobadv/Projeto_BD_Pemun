package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Ingresso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class IngressoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Ingresso> findAll() {
        String sql = "SELECT * FROM Ingresso";
        return jdbcTemplate.query(sql, new IngressoRowMapper());
    }

    public Optional<Ingresso> findById(Integer idProduto, String nomeEvento) {
        String sql = "SELECT * FROM Ingresso WHERE id_produto_ingresso = ? AND nome_evento_ingresso = ?";
        return jdbcTemplate.query(sql, new Object[]{idProduto, nomeEvento}, new IngressoRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Ingresso ingresso) {
        String sql = "INSERT INTO Ingresso (id_produto_ingresso, nome_evento_ingresso, data_compra_ingresso) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, ingresso.getId_produto_ingresso(), ingresso.getNome_evento_ingresso(), ingresso.getData_compra_ingresso());
    }

    public int update(Ingresso ingresso) {
        String sql = "UPDATE Ingresso SET data_compra_ingresso = ? WHERE id_produto_ingresso = ? AND nome_evento_ingresso = ?";
        return jdbcTemplate.update(sql, ingresso.getData_compra_ingresso(), ingresso.getId_produto_ingresso(), ingresso.getNome_evento_ingresso());
    }

    public int deleteById(Integer idProduto, String nomeEvento) {
        String sql = "DELETE FROM Ingresso WHERE id_produto_ingresso = ? AND nome_evento_ingresso = ?";
        return jdbcTemplate.update(sql, idProduto, nomeEvento);
    }

    private static class IngressoRowMapper implements RowMapper<Ingresso> {
        @Override
        public Ingresso mapRow(ResultSet rs, int rowNum) throws SQLException {
            Ingresso ingresso = new Ingresso();
            ingresso.setId_produto_ingresso(rs.getInt("id_produto_ingresso"));
            ingresso.setNome_evento_ingresso(rs.getString("nome_evento_ingresso"));
            ingresso.setData_compra_ingresso(rs.getTimestamp("data_compra_ingresso").toLocalDateTime());
            return ingresso;
        }
    }
}
