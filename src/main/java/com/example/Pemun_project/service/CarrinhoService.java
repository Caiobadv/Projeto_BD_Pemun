package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Carrinho;
import com.example.Pemun_project.model.Item;
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

    public Carrinho addItemAoCarrinho(Integer carrinhoId, Item item, int qtdItem) {
        carrinhoRepository.addItemToCarrinho(carrinhoId, item, qtdItem);
        return carrinhoRepository.findById(carrinhoId).orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));
    }

    public Carrinho removeItemDoCarrinho(Integer carrinhoId, Integer itemId) {
        carrinhoRepository.removeItemFromCarrinho(carrinhoId, itemId);
        return carrinhoRepository.findById(carrinhoId).orElseThrow(() -> new RuntimeException("Carrinho não encontrado"));
    }

    public List<Item> getItensByCarrinhoId(Integer carrinhoId) {
        return carrinhoRepository.findItensByCarrinhoId(carrinhoId);
    }
}
