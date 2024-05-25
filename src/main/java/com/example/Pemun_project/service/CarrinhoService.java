package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Carrinho;
import com.example.Pemun_project.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    public List<Carrinho> getAllCarrinhos() {
        return carrinhoRepository.findAll();
    }

    public Optional<Carrinho> getCarrinhoById(Integer id) {
        return carrinhoRepository.findById(id);
    }

    public void createCarrinho(Carrinho carrinho) {
        carrinhoRepository.save(carrinho);
    }

    public void updateCarrinho(Carrinho carrinho) {
        carrinhoRepository.update(carrinho);
    }

    public void deleteCarrinho(Integer id) {
        carrinhoRepository.deleteById(id);
    }
}
