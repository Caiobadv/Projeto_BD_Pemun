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
import java.sql.Timestamp;

@Repository
public class IngressoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Ingresso> findAll() {
        String sql = "SELECT * FROM Ingresso";
        return jdbcTemplate.query(sql, new IngressoRowMapper());
    }

    public Optional<Ingresso> findById(Integer id_ingresso) {
        String sql = "SELECT * FROM Ingresso WHERE id_ingresso = ?";
        return jdbcTemplate.query(sql, new Object[]{id_ingresso}, new IngressoRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Ingresso ingresso) {
        String sql = "INSERT INTO Ingresso (id_produto_ingresso, nome_evento_ingresso, data_compra_ingresso) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, ingresso.getId_produto_ingresso(), ingresso.getNome_evento_ingresso(), Timestamp.valueOf(ingresso.getData_compra_ingresso()));
    }

    public int update(Ingresso ingresso) {
        String sql = "UPDATE Ingresso SET data_compra_ingresso = ? WHERE id_produto_ingresso = ? AND nome_evento_ingresso = ?";
        return jdbcTemplate.update(sql, ingresso.getData_compra_ingresso(), ingresso.getId_produto_ingresso(), ingresso.getNome_evento_ingresso());
    }

    public int deleteById(Integer id_ingresso) {
        String sql = "DELETE FROM Ingresso WHERE id_ingresso = ?";
        return jdbcTemplate.update(sql, id_ingresso);
    }

    public float findPrice(Integer id_ingresso) {
        String sql = "SELECT i2.preco_item FROM Ingresso i JOIN Produto p ON i.id_produto_ingresso = p.id_produto JOIN Item i2 ON p.id_item_produto = i2.id_item WHERE i.id_ingresso = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{id_ingresso}, Float.class);
    }

    private static class IngressoRowMapper implements RowMapper<Ingresso> {
        @Override
        public Ingresso mapRow(ResultSet rs, int rowNum) throws SQLException {
            Ingresso ingresso = new Ingresso();
            ingresso.setId_ingresso(rs.getInt("id_ingresso"));
            ingresso.setId_produto_ingresso(rs.getInt("id_produto_ingresso"));
            ingresso.setNome_evento_ingresso(rs.getString("nome_evento_ingresso"));
            ingresso.setData_compra_ingresso(rs.getTimestamp("data_compra_ingresso").toLocalDateTime());
            return ingresso;
        }
    }
}
