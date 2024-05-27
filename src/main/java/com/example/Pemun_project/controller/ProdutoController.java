package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Produto;
import com.example.Pemun_project.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/produtos")
    public List<Produto> getAllProdutos() {
        return produtoService.getAllProdutos();
    }

    @GetMapping("/produto/{id}")
    public ResponseEntity<Produto> getProdutoById(@PathVariable Integer id) {
        Optional<Produto> produto = produtoService.getProdutoById(id);
        return produto.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/produto")
    public ResponseEntity<Produto> createProduto(@RequestBody Produto produto) {
        produtoService.createProduto(produto);
        return ResponseEntity.ok(produto);
    }

    @PutMapping("/produto/{id}")
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

    @DeleteMapping("/produto/{id_produto}")
    public ResponseEntity<Void> deleteProduto(@PathVariable Integer id_produto) {
        Optional<Produto> produto = produtoService.getProdutoById(id_produto);
        if (produto.isPresent()) {
            produtoService.deleteProduto(id_produto);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
