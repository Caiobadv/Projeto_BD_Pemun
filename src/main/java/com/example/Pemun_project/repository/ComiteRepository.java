package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Comite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ComiteRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Comite> findAll() {
        String sql = "SELECT * FROM Comite";
        return jdbcTemplate.query(sql, new ComiteRowMapper());
    }

    public Optional<Comite> findById(Integer id) {
        String sql = "SELECT * FROM Comite WHERE id_comite = ?";
        return jdbcTemplate.query(sql, new Object[]{id}, new ComiteRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Comite comite) {
        String sql = "INSERT INTO Comite (id_comite, nome_comite, tipo_comite, tema1_comite, tema2_comite, descricao_comite, qtd_vagas_comite) VALUES (?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, comite.getId_comite(), comite.getNome_comite(), comite.getTipo_comite(), comite.getTema1_comite(), comite.getTema2_comite(), comite.getDescricao_comite(), comite.getQtd_vagas_comite());
    }

    public int update(Comite comite) {
        String sql = "UPDATE Comite SET nome_comite = ?, tipo_comite = ?, tema1_comite = ?, tema2_comite = ?, descricao_comite = ?, qtd_vagas_comite = ? WHERE id_comite = ?";
        return jdbcTemplate.update(sql, comite.getNome_comite(), comite.getTipo_comite(), comite.getTema1_comite(), comite.getTema2_comite(), comite.getDescricao_comite(), comite.getQtd_vagas_comite(), comite.getId_comite());
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM Comite WHERE id_comite = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class ComiteRowMapper implements RowMapper<Comite> {
        @Override
        public Comite mapRow(ResultSet rs, int rowNum) throws SQLException {
            Comite comite = new Comite();
            comite.setId_comite(rs.getInt("id_comite"));
            comite.setNome_comite(rs.getString("nome_comite"));
            comite.setTipo_comite(rs.getString("tipo_comite"));
            comite.setTema1_comite(rs.getString("tema1_comite"));
            comite.setTema2_comite(rs.getString("tema2_comite"));
            comite.setDescricao_comite(rs.getString("descricao_comite"));
            comite.setQtd_vagas_comite(rs.getInt("qtd_vagas_comite"));
            return comite;
        }
    }
}
