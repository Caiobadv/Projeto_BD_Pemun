package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Produto;
import com.example.Pemun_project.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/produtos")
    public List<Produto> getAllProdutos() {
        return produtoService.getAllProdutos();
    }

    @GetMapping("/produto/{idProduto}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable Integer id) {
        Optional<Produto> produto = produtoService.getProdutoById(id);
        return produto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/produto")
    public ResponseEntity<Produto> createProduto(@RequestBody Produto produto) {
        produtoService.createProduto(produto);
        return ResponseEntity.ok(produto);
    }

    @PutMapping("/produto/{idProduto}")
    public ResponseEntity<Produto> updateProduto(@PathVariable Integer id, @RequestBody Produto produtoDetails) {
        Optional<Produto> produto = produtoService.getProdutoById(id);
        if (produto.isPresent()) {
            produtoDetails.setId_item_produto(id);
            produtoService.updateProduto(produtoDetails);
            return ResponseEntity.ok(produtoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/produto/{idProduto}")
    public ResponseEntity<Void> deleteProduto(@PathVariable Integer id) {
        Optional<Produto> produto = produtoService.getProdutoById(id);
        if (produto.isPresent()) {
            produtoService.deleteProduto(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
