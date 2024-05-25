package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Contem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ContemRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Contem> findAll() {
        String sql = "SELECT * FROM contem";
        return jdbcTemplate.query(sql, new ContemRowMapper());
    }

    public Optional<Contem> findById(Integer idPacote, Integer idItem) {
        String sql = "SELECT * FROM contem WHERE id_pacote_contem = ? AND id_item_contido = ?";
        return jdbcTemplate.query(sql, new Object[]{idPacote, idItem}, new ContemRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Contem contem) {
        String sql = "INSERT INTO contem (id_pacote_contem, id_item_contido) VALUES (?, ?)";
        return jdbcTemplate.update(sql, contem.getId_pacote_contem(), contem.getId_item_contido());
    }

    public int update(Contem contem) {
        String sql = "UPDATE contem SET id_item_contido = ? WHERE id_pacote_contem = ?";
        return jdbcTemplate.update(sql, contem.getId_item_contido(), contem.getId_pacote_contem());
    }

    public int deleteById(Integer idPacote, Integer idItem) {
        String sql = "DELETE FROM contem WHERE id_pacote_contem = ? AND id_item_contido = ?";
        return jdbcTemplate.update(sql, idPacote, idItem);
    }

    private static class ContemRowMapper implements RowMapper<Contem> {
        @Override
        public Contem mapRow(ResultSet rs, int rowNum) throws SQLException {
            Contem contem = new Contem();
            contem.setId_pacote_contem(rs.getInt("id_pacote_contem"));
            contem.setId_item_contido(rs.getInt("id_item_contido"));
            return contem;
        }
    }
}
