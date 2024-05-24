package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Delegado;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class DelegadoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Delegado> findAll() {
        String sql = "SELECT * FROM Delegado";
        return jdbcTemplate.query(sql, new DelegadoRowMapper());
    }

    public Optional<Delegado> findByCpf(Integer cpf) {
        String sql = "SELECT * FROM Delegado WHERE cpf_delegado = ?";
        return jdbcTemplate.query(sql, new Object[]{cpf}, new DelegadoRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Delegado delegado) {
        String sql = "INSERT INTO Delegado (cpf_delegado) VALUES (?)";
        return jdbcTemplate.update(sql, delegado.getCpf_delegado());
    }

    public int update(Delegado delegado) {
        String sql = "UPDATE Delegado SET cpf_delegado = ? WHERE cpf_delegado = ?";
        return jdbcTemplate.update(sql, delegado.getCpf_delegado(), delegado.getCpf_delegado());
    }

    public int deleteByCpf(Integer cpf) {
        String sql = "DELETE FROM Delegado WHERE cpf_delegado = ?";
        return jdbcTemplate.update(sql, cpf);
    }

    private static class DelegadoRowMapper implements RowMapper<Delegado> {
        @Override
        public Delegado mapRow(ResultSet rs, int rowNum) throws SQLException {
            Delegado delegado = new Delegado();
            delegado.setCpf_delegado(rs.getInt("cpf_delegado"));
            return delegado;
        }
    }
}
