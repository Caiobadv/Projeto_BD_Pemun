package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Inscricao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class InscricaoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Inscricao> findAll() {
        String sql = "SELECT * FROM Inscricao";
        return jdbcTemplate.query(sql, new InscricaoRowMapper());
    }

    public Optional<Inscricao> findById(Integer id) {
        String sql = "SELECT * FROM Inscricao WHERE id_inscricao = ?";
        return jdbcTemplate.query(sql, new Object[]{id}, new InscricaoRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Inscricao inscricao) {
        String sql = "INSERT INTO Inscricao (data_inscricao, valor_inscricao, forma_pagamento_inscricao, op1_representacao_inscricao, op2_representacao_inscricao, op3_representacao_inscricao) VALUES (?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, inscricao.getData_inscricao(), inscricao.getValor_inscricao(), inscricao.getForma_pagamento_inscricao(), inscricao.getOp1_representacao_inscricao(), inscricao.getOp2_representacao_inscricao(), inscricao.getOp3_representacao_inscricao());
    }

    public int update(Inscricao inscricao) {
        String sql = "UPDATE Inscricao SET data_inscricao = ?, valor_inscricao = ?, forma_pagamento_inscricao = ?, op1_representacao_inscricao = ?, op2_representacao_inscricao = ?, op3_representacao_inscricao = ? WHERE id_inscricao = ?";
        return jdbcTemplate.update(sql, inscricao.getData_inscricao(), inscricao.getValor_inscricao(), inscricao.getForma_pagamento_inscricao(), inscricao.getOp1_representacao_inscricao(), inscricao.getOp2_representacao_inscricao(), inscricao.getOp3_representacao_inscricao(), inscricao.getId_inscricao());
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM Inscricao WHERE id_inscricao = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class InscricaoRowMapper implements RowMapper<Inscricao> {
        @Override
        public Inscricao mapRow(ResultSet rs, int rowNum) throws SQLException {
            Inscricao inscricao = new Inscricao();
            inscricao.setId_inscricao(rs.getInt("id_inscricao"));
            inscricao.setData_inscricao(rs.getTimestamp("data_inscricao"));
            inscricao.setValor_inscricao(rs.getFloat("valor_inscricao"));
            inscricao.setForma_pagamento_inscricao(rs.getString("forma_pagamento_inscricao"));
            inscricao.setOp1_representacao_inscricao(rs.getString("op1_representacao_inscricao"));
            inscricao.setOp2_representacao_inscricao(rs.getString("op2_representacao_inscricao"));
            inscricao.setOp3_representacao_inscricao(rs.getString("op3_representacao_inscricao"));
            return inscricao;
        }
    }
}
