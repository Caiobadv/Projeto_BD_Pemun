package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Compra;
import com.example.Pemun_project.repository.CompraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompraService {

    @Autowired
    private CompraRepository compraRepository;

    public List<Compra> getAllCompras() {
        return compraRepository.findAll();
    }

    public Optional<Compra> getCompraById(Integer cpfUser, Integer idCarrinho, Integer idItens) {
        return compraRepository.findById(cpfUser, idCarrinho, idItens);
    }

    public void createCompra(Compra compra) {
        compraRepository.save(compra);
    }

    public void updateCompra(Compra compra) {
        compraRepository.update(compra);
    }

    public void deleteCompra(Integer cpfUser, Integer idCarrinho, Integer idItens) {
        compraRepository.deleteById(cpfUser, idCarrinho, idItens);
    }
}
