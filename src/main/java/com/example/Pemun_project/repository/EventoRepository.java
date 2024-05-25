package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Evento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class EventoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Evento> findAll() {
        String sql = "SELECT * FROM Evento";
        return jdbcTemplate.query(sql, new EventoRowMapper());
    }

    public Optional<Evento> findById(String nome) {
        String sql = "SELECT * FROM Evento WHERE nome_evento = ?";
        return jdbcTemplate.query(sql, new Object[]{nome}, new EventoRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Evento evento) {
        String sql = "INSERT INTO Evento (nome_evento, data_evento, descricao_evento, rua_endereco_evento, numero_endereco_evento, bairro_endereco_evento, cep_endereco_evento, complemento_endereco_evento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, evento.getNome_evento(), evento.getData_evento(), evento.getDescricao_evento(), evento.getRua_endereco_evento(), evento.getNumero_endereco_evento(), evento.getBairro_endereco_evento(), evento.getCep_endereco_evento(), evento.getComplemento_endereco_evento());
    }

    public int update(Evento evento) {
        String sql = "UPDATE Evento SET data_evento = ?, descricao_evento = ?, rua_endereco_evento = ?, numero_endereco_evento = ?, bairro_endereco_evento = ?, cep_endereco_evento = ?, complemento_endereco_evento = ? WHERE nome_evento = ?";
        return jdbcTemplate.update(sql, evento.getData_evento(), evento.getDescricao_evento(), evento.getRua_endereco_evento(), evento.getNumero_endereco_evento(), evento.getBairro_endereco_evento(), evento.getCep_endereco_evento(), evento.getComplemento_endereco_evento(), evento.getNome_evento());
    }

    public int deleteById(String nome) {
        String sql = "DELETE FROM Evento WHERE nome_evento = ?";
        return jdbcTemplate.update(sql, nome);
    }

    private static class EventoRowMapper implements RowMapper<Evento> {
        @Override
        public Evento mapRow(ResultSet rs, int rowNum) throws SQLException {
            Evento evento = new Evento();
            evento.setNome_evento(rs.getString("nome_evento"));
            evento.setData_evento(rs.getTimestamp("data_evento").toLocalDateTime());
            evento.setDescricao_evento(rs.getString("descricao_evento"));
            evento.setRua_endereco_evento(rs.getString("rua_endereco_evento"));
            evento.setNumero_endereco_evento(rs.getString("numero_endereco_evento"));
            evento.setBairro_endereco_evento(rs.getString("bairro_endereco_evento"));
            evento.setCep_endereco_evento(rs.getInt("cep_endereco_evento"));
            evento.setComplemento_endereco_evento(rs.getString("complemento_endereco_evento"));
            return evento;
        }
    }
}
