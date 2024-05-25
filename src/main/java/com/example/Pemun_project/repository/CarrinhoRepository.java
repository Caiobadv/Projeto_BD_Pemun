package com.example.Pemun_project.repository;

import com.example.Pemun_project.model.Carrinho;
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

    public Optional<Carrinho> findById(Integer id) {
        String sql = "SELECT * FROM Carrinho WHERE id_carrinho = ?";
        return jdbcTemplate.query(sql, new Object[]{id}, new CarrinhoRowMapper())
                .stream()
                .findFirst();
    }

    public int save(Carrinho carrinho) {
        String sql = "INSERT INTO Carrinho (valor_total_carrinho, qtd_total_itens_carrinho) VALUES (?, ?)";
        return jdbcTemplate.update(sql, carrinho.getValor_total_carrinho(), carrinho.getQtd_total_itens_carrinho());
    }

    public int update(Carrinho carrinho) {
        String sql = "UPDATE Carrinho SET valor_total_carrinho = ?, qtd_total_itens_carrinho = ? WHERE id_carrinho = ?";
        return jdbcTemplate.update(sql, carrinho.getValor_total_carrinho(), carrinho.getQtd_total_itens_carrinho(), carrinho.getId_carrinho());
    }

    public int deleteById(Integer id) {
        String sql = "DELETE FROM Carrinho WHERE id_carrinho = ?";
        return jdbcTemplate.update(sql, id);
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
}
