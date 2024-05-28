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

    public void addItemToCarrinho(Integer carrinhoId, Item item, int qtdItem) {
        String sqlCheckItem = "SELECT COUNT(*) FROM Item WHERE id_item = ?";
        int count = jdbcTemplate.queryForObject(sqlCheckItem, new Object[]{item.getId_item()}, Integer.class);
        if (count > 0) {
            String sqlCheckCarrinhoItem = "SELECT COUNT(*) FROM CarrinhoItem WHERE id_carrinho = ? AND id_item = ?";
            int countCarrinhoItem = jdbcTemplate.queryForObject(sqlCheckCarrinhoItem, new Object[]{carrinhoId, item.getId_item()}, Integer.class);
            if (countCarrinhoItem > 0) {
                String sqlUpdate = "UPDATE CarrinhoItem SET qtd_item = qtd_item + ? WHERE id_carrinho = ? AND id_item = ?";
                jdbcTemplate.update(sqlUpdate, qtdItem, carrinhoId, item.getId_item());
            } else {
                String sqlInsert = "INSERT INTO CarrinhoItem (id_carrinho, id_item, qtd_item) VALUES (?, ?, ?)";
                jdbcTemplate.update(sqlInsert, carrinhoId, item.getId_item(), qtdItem);
            }
        } else {
            throw new RuntimeException("Item não encontrado no banco de dados");
        }
    }

    public void removeItemFromCarrinho(Integer carrinhoId, Integer itemId) {
        String sql = "DELETE FROM CarrinhoItem WHERE id_carrinho = ? AND id_item = ?";
        jdbcTemplate.update(sql, carrinhoId, itemId);
    }

    public List<Item> findItensByCarrinhoId(Integer carrinhoId) {
        String sql = "SELECT i.id_item, i.nome_item, i.qtd_total_item, i.descricao_item, i.preco_item, ci.qtd_item FROM Item i " +
                     "JOIN CarrinhoItem ci ON i.id_item = ci.id_item WHERE ci.id_carrinho = ?";
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
            item.setDescricao_item(rs.getString("descricao_item"));
            item.setPreco_item(rs.getFloat("preco_item"));
            item.setQtd_total_item(rs.getInt("qtd_item"));
            return item;
        }
    }
}
