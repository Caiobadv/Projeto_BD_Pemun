package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Carrinho;
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
public class CarrinhoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Carrinho> findAll() {
        String sql = "SELECT * FROM Carrinho";
        return jdbcTemplate.query(sql, new CarrinhoRowMapper());
    }

    public Optional<Carrinho> findById(Integer id_carrinho) {
        String sql = "SELECT * FROM Carrinho WHERE id_carrinho = ?";
        return jdbcTemplate.query(sql, new Object[]{id_carrinho}, new CarrinhoRowMapper())
                .stream()
                .findFirst();
    }

    public void save(Carrinho carrinho) {
        if (carrinho.getId_carrinho() == null) {
            String sql = "INSERT INTO Carrinho (valor_total_carrinho, qtd_total_itens_carrinho) VALUES (?, ?)";
            jdbcTemplate.update(sql, carrinho.getValor_total_carrinho(), carrinho.getQtd_total_itens_carrinho());
        } else {
            String sql = "UPDATE Carrinho SET valor_total_carrinho = ?, qtd_total_itens_carrinho = ? WHERE id_carrinho = ?";
            jdbcTemplate.update(sql, carrinho.getValor_total_carrinho(), carrinho.getQtd_total_itens_carrinho(), carrinho.getId_carrinho());
        }
    }

    public void addItemToCarrinho(Integer carrinhoId, Item item) {
        String sql = "INSERT INTO Item (id_item, nome_item, qtd_total_item, preco_item, id_carrinho) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, item.getId_item(), item.getNome_item(), item.getQtd_total_item(), item.getPreco_item(), carrinhoId);
    }

    public void removeItemFromCarrinho(Integer carrinhoId, Long itemId) {
        String sql = "DELETE FROM Item WHERE id_carrinho = ? AND id_item = ?";
        jdbcTemplate.update(sql, carrinhoId, itemId);
    }

    public List<Item> findItensByCarrinhoId(Integer carrinhoId) {
        String sql = "SELECT * FROM Item WHERE id_carrinho = ?";
        return jdbcTemplate.query(sql, new Object[]{carrinhoId}, new ItemRowMapper());
    }

    public int deleteById(Integer id_carrinho) {
        String sql = "DELETE FROM Carrinho WHERE id_carrinho = ?";
        return jdbcTemplate.update(sql, id_carrinho);
    }

    private static class CarrinhoRowMapper implements RowMapper<Carrinho> {
        @Override
        public Carrinho mapRow(ResultSet rs, int rowNum) throws SQLException {
            Carrinho carrinho = new Carrinho();
            carrinho.setId_carrinho(rs.getInt("id_carrinho"));
            carrinho.setValor_total_carrinho(rs.getInt("valor_total_carrinho"));
            carrinho.setQtd_total_itens_carrinho(rs.getInt("qtd_total_itens_carrinho"));
            return carrinho;
        }
    }

    private static class ItemRowMapper implements RowMapper<Item> {
        @Override
        public Item mapRow(ResultSet rs, int rowNum) throws SQLException {
            Item item = new Item();
            item.setId_item(rs.getInt("id_item"));
            item.setNome_item(rs.getString("nome_item"));
            item.setQtd_total_item(rs.getInt("qtd_total_item"));
            item.setPreco_item(rs.getFloat("preco_item"));
            return item;
        }
    }
}
