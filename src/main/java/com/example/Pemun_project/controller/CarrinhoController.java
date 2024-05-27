package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Carrinho;
import com.example.Pemun_project.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("carrinho/{id_carrinho}")
    public ResponseEntity<Carrinho> updateCarrinho(@PathVariable Integer id_carrinho, @RequestBody Carrinho carrinhoDetails) {
        Optional<Carrinho> carrinho = carrinhoService.getCarrinhoById(id_carrinho);
        if (carrinho.isPresent()) {
            carrinhoDetails.setId_carrinho(id_carrinho);
            carrinhoService.updateCarrinho(carrinhoDetails);
            return ResponseEntity.ok(carrinhoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("carrinho/{id_carrinho}")
    public ResponseEntity<Void> deleteCarrinho(@PathVariable Integer id_carrinho) {
        Optional<Carrinho> carrinho = carrinhoService.getCarrinhoById(id_carrinho);
        if (carrinho.isPresent()) {
            carrinhoService.deleteCarrinho(id_carrinho);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
