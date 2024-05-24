package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Diretor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class DiretorRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Diretor> findAll() {
        String sql = "SELECT * FROM Diretor";
        return jdbcTemplate.query(sql, new DiretorRowMapper());
    }

    public Optional<Diretor> findById(Integer cpf, Integer idComite) {
        String sql = "SELECT * FROM Diretor WHERE cpf_diretor = ? AND id_comite_diretor = ?";
        return jdbcTemplate.query(sql, new Object[]{cpf, idComite}, new DiretorRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Diretor diretor) {
        String sql = "INSERT INTO Diretor (cpf_diretor, id_comite_diretor) VALUES (?, ?)";
        return jdbcTemplate.update(sql, diretor.getCpf_diretor(), diretor.getId_comite_diretor());
    }

    public int update(Diretor diretor) {
        String sql = "UPDATE Diretor SET id_comite_diretor = ? WHERE cpf_diretor = ?";
        return jdbcTemplate.update(sql, diretor.getId_comite_diretor(), diretor.getCpf_diretor());
    }

    public int deleteById(Integer cpf, Integer idComite) {
        String sql = "DELETE FROM Diretor WHERE cpf_diretor = ? AND id_comite_diretor = ?";
        return jdbcTemplate.update(sql, cpf, idComite);
    }

    private static class DiretorRowMapper implements RowMapper<Diretor> {
        @Override
        public Diretor mapRow(ResultSet rs, int rowNum) throws SQLException {
            Diretor diretor = new Diretor();
            diretor.setCpf_diretor(rs.getInt("cpf_diretor"));
            diretor.setId_comite_diretor(rs.getInt("id_comite_diretor"));
            return diretor;
        }
    }
}
