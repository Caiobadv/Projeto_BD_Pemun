package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Repository
public class ProdutoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Produto> findAll() {
        String sql = "SELECT * FROM Produto";
        return jdbcTemplate.query(sql, new ProdutoRowMapper());
    }

    public Optional<Produto> findById(Integer id) {
        String sql = "SELECT * FROM Produto WHERE id_item_produto = ?";
        return jdbcTemplate.query(sql, new Object[]{id}, new ProdutoRowMapper()).stream().findFirst();
    }

    public int save(Produto produto) {
        String sql = "INSERT INTO Produto (id_item_produto, cor_produto, tamanho) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, produto.getId_item_produto(), produto.getCor_produto(), produto.getTamanho());
    }

    public int update(Produto produto) {
        String sql = "UPDATE Produto SET cor_produto = ?, tamanho = ? WHERE id_item_produto = ?";
        return jdbcTemplate.update(sql, produto.getCor_produto(), produto.getTamanho(), produto.getId_item_produto());
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM Produto WHERE id_item_produto = ?";
        return jdbcTemplate.update(sql, id);
    }

    private static class ProdutoRowMapper implements RowMapper<Produto> {
        @Override
        public Produto mapRow(ResultSet rs, int rowNum) throws SQLException {
            Produto produto = new Produto();
            produto.setId_item_produto(rs.getInt("id_item_produto"));
            produto.setCor_produto(rs.getString("cor_produto"));
            produto.setTamanho(rs.getString("tamanho"));
            return produto;
        }
    }
}
