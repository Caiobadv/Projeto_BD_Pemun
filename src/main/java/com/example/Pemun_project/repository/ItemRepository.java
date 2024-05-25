package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ItemRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Item> findAll() {
        String sql = "SELECT * FROM Item";
        return jdbcTemplate.query(sql, new ItemRowMapper());
    }

    public Optional<Item> findById(Integer id) {
        String sql = "SELECT * FROM Item WHERE id_item = ?";
        return jdbcTemplate.query(sql, new Object[]{id}, new ItemRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Item item) {
        String sql = "INSERT INTO Item (nome_item, qtd_total_item, descricao_item, preco_item) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, item.getNome_item(), item.getQtd_total_item(), item.getDescricao_item(), item.getPreco_item());
    }

    public int update(Item item) {
        String sql = "UPDATE Item SET nome_item = ?, qtd_total_item = ?, descricao_item = ?, preco_item = ? WHERE id_item = ?";
        return jdbcTemplate.update(sql, item.getNome_item(), item.getQtd_total_item(), item.getDescricao_item(), item.getPreco_item(), item.getId_item());
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM Item WHERE id_item = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class ItemRowMapper implements RowMapper<Item> {
        @Override
        public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
            Item item = new Item();
            item.setId_item(rs.getInt("id_item"));
            item.setNome_item(rs.getString("nome_item"));
            item.setQtd_total_item(rs.getInt("qtd_total_item"));
            item.setDescricao_item(rs.getString("descricao_item"));
            item.setPreco_item(rs.getFloat("preco_item"));
            return item;
        }
    }
}
