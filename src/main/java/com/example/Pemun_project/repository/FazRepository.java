package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Faz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class FazRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Faz> findAll() {
        String sql = "SELECT * FROM faz";
        return jdbcTemplate.query(sql, new FazRowMapper());
    }

    public Optional<Faz> findById(Integer cpfDelegado, Integer idComite, Integer idInscricao) {
        String sql = "SELECT * FROM faz WHERE cpf_delegado_inscricao_faz = ? AND id_comite_inscricao_faz = ? AND id_inscricao_faz = ?";
        return jdbcTemplate.query(sql, new Object[]{cpfDelegado, idComite, idInscricao}, new FazRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Faz faz) {
        String sql = "INSERT INTO faz (cpf_delegado_inscricao_faz, id_comite_inscricao_faz, id_inscricao_faz) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, faz.getCpf_delegado_inscricao_faz(), faz.getId_comite_inscricao_faz(), faz.getId_inscricao_faz());
    }

    public int update(Faz faz) {
        String sql = "UPDATE faz SET id_comite_inscricao_faz = ?, id_inscricao_faz = ? WHERE cpf_delegado_inscricao_faz = ?";
        return jdbcTemplate.update(sql, faz.getId_comite_inscricao_faz(), faz.getId_inscricao_faz(), faz.getCpf_delegado_inscricao_faz());
    }

    public int deleteById(Integer cpfDelegado, Integer idComite, Integer idInscricao) {
        String sql = "DELETE FROM faz WHERE cpf_delegado_inscricao_faz = ? AND id_comite_inscricao_faz = ? AND id_inscricao_faz = ?";
        return jdbcTemplate.update(sql, cpfDelegado, idComite, idInscricao);
    }

    private static class FazRowMapper implements RowMapper<Faz> {
        @Override
        public Faz mapRow(ResultSet rs, int rowNum) throws SQLException {
            Faz faz = new Faz();
            faz.setCpf_delegado_inscricao_faz(rs.getInt("cpf_delegado_inscricao_faz"));
            faz.setId_comite_inscricao_faz(rs.getInt("id_comite_inscricao_faz"));
            faz.setId_inscricao_faz(rs.getInt("id_inscricao_faz"));
            return faz;
        }
    }
}
