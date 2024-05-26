package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Produto;
import com.example.Pemun_project.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> getProdutoById(Integer id) {
        return produtoRepository.findById(id);
    }

    public void createProduto(Produto produto) {
        produtoRepository.save(produto);
    }

    public void updateProduto(Produto produto) {
        produtoRepository.update(produto);
    }

    public void deleteProduto(Integer id) {
        produtoRepository.deleteById(id);
    }
    
    public int addProduto(Produto produto) {
        return produtoRepository.save(produto);
    }


}
