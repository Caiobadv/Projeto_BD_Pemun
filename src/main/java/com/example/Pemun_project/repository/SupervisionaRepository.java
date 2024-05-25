package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Supervisiona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class SupervisionaRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Supervisiona> findAll() {
        String sql = "SELECT * FROM supervisiona";
        return jdbcTemplate.query(sql, new SupervisionaRowMapper());
    }

    public Optional<Supervisiona> findById(Integer supervisorCpf, Integer supervisionadoCpf) {
        String sql = "SELECT * FROM supervisiona WHERE cpf_diretor_supervisor = ? AND cpf_diretor_supervisionado = ?";
        return jdbcTemplate.query(sql, new Object[]{supervisorCpf, supervisionadoCpf}, new SupervisionaRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Supervisiona supervisiona) {
        String sql = "INSERT INTO supervisiona (cpf_diretor_supervisor, cpf_diretor_supervisionado) VALUES (?, ?)";
        return jdbcTemplate.update(sql, supervisiona.getCpf_diretor_supervisor(), supervisiona.getCpf_diretor_supervisionado());
    }

    public int update(Supervisiona supervisiona) {
        String sql = "UPDATE supervisiona SET cpf_diretor_supervisionado = ? WHERE cpf_diretor_supervisor = ?";
        return jdbcTemplate.update(sql, supervisiona.getCpf_diretor_supervisionado(), supervisiona.getCpf_diretor_supervisor());
    }

    public int deleteById(Integer supervisorCpf, Integer supervisionadoCpf) {
        String sql = "DELETE FROM supervisiona WHERE cpf_diretor_supervisor = ? AND cpf_diretor_supervisionado = ?";
        return jdbcTemplate.update(sql, supervisorCpf, supervisionadoCpf);
    }

    private static class SupervisionaRowMapper implements RowMapper<Supervisiona> {
        @Override
        public Supervisiona mapRow(ResultSet rs, int rowNum) throws SQLException {
            Supervisiona supervisiona = new Supervisiona();
            supervisiona.setCpf_diretor_supervisor(rs.getInt("cpf_diretor_supervisor"));
            supervisiona.setCpf_diretor_supervisionado(rs.getInt("cpf_diretor_supervisionado"));
            return supervisiona;
        }
    }
}
