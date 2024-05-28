package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Pacote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class PacoteRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Pacote> findAll() {
        String sql = "SELECT * FROM Pacote";
        return jdbcTemplate.query(sql, new PacoteRowMapper());
    }

    public Optional<Pacote> findById(Integer id_ingresso) {
        String sql = "SELECT * FROM Pacote WHERE id_pacote = ?";
        return jdbcTemplate.query(sql, new Object[]{id_ingresso}, new PacoteRowMapper()).stream().findFirst();
    }

    public int save(Pacote pacote) {
        String sql = "INSERT INTO Pacote (id_item_pacote) VALUES (?)";
        return jdbcTemplate.update(sql, pacote.getId_item_pacote());
    }

    public int update(Pacote pacote) {
        String sql = "UPDATE Pacote SET id_item_pacote = ? WHERE id_item_pacote = ?";
        return jdbcTemplate.update(sql, pacote.getId_item_pacote(), pacote.getId_item_pacote());
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM Pacote WHERE id_pacote = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class PacoteRowMapper implements RowMapper<Pacote> {
        @Override
        public Pacote mapRow(ResultSet rs, int rowNum) throws SQLException {
            Pacote pacote = new Pacote();
            pacote.setId_pacote(rs.getInt("id_pacote"));
            pacote.setId_item_pacote(rs.getInt("id_item_pacote"));
            return pacote;
        }
    }
}
