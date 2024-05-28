package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Carrinho;
import com.example.Pemun_project.model.Item;
import com.example.Pemun_project.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    @GetMapping("/carrinhos")
    public List<Carrinho> getAllCarrinhos() {
        return carrinhoService.getAllCarrinhos();
    }

    @GetMapping("/carrinho/{id_carrinho}")
    public ResponseEntity<Carrinho> getCarrinhoById(@PathVariable Integer id_carrinho) {
        Optional<Carrinho> carrinho = carrinhoService.getCarrinhoById(id_carrinho);
        return carrinho.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/carrinho")
    public ResponseEntity<Carrinho> createCarrinho(@RequestBody Carrinho carrinho) {
        carrinhoService.createCarrinho(carrinho);
        return ResponseEntity.ok(carrinho);
    }

    @PostMapping("/{carrinhoId}/add")
    public ResponseEntity<Carrinho> addItemAoCarrinho(@PathVariable Integer carrinhoId, @RequestBody Item item, @RequestParam int qtdItem) {
        Carrinho carrinho = carrinhoService.addItemAoCarrinho(carrinhoId, item, qtdItem);
        return ResponseEntity.ok(carrinho);
    }

    @DeleteMapping("/{carrinhoId}/remove")
    public ResponseEntity<Carrinho> removeItemDoCarrinho(@PathVariable Integer carrinhoId, @RequestParam Integer itemId) {
        Carrinho carrinho = carrinhoService.removeItemDoCarrinho(carrinhoId, itemId);
        return ResponseEntity.ok(carrinho);
    }

    @GetMapping("/{carrinhoId}")
    public ResponseEntity<List<Item>> getItensByCarrinhoId(@PathVariable Integer carrinhoId) {
        List<Item> itens = carrinhoService.getItensByCarrinhoId(carrinhoId);
        return ResponseEntity.ok(itens);
    }
}
