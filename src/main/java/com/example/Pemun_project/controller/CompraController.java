package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Compra;
import com.example.Pemun_project.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @GetMapping("/compras")
    public List<Compra> getAllCompras() {
        return compraService.getAllCompras();
    }

    @GetMapping("/compra/{cpfUser}/{idCarrinho}/{idItens}")
    public ResponseEntity<Compra> getCompraById(@PathVariable Integer cpfUser, @PathVariable Integer idCarrinho, @PathVariable Integer idItens) {
        Optional<Compra> compra = compraService.getCompraById(cpfUser, idCarrinho, idItens);
        return compra.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/compra")
    public ResponseEntity<Compra> createCompra(@RequestBody Compra compra) {
        compraService.createCompra(compra);
        return ResponseEntity.ok(compra);
    }

    @PutMapping("/compra/{cpfUser}/{idCarrinho}/{idItens}")
    public ResponseEntity<Compra> updateCompra(@PathVariable Integer cpfUser, @PathVariable Integer idCarrinho, @PathVariable Integer idItens, @RequestBody Compra compraDetails) {
        Optional<Compra> compra = compraService.getCompraById(cpfUser, idCarrinho, idItens);
        if (compra.isPresent()) {
            compraDetails.setCpf_user_compra(cpfUser);
            compraDetails.setId_carrinho_compra(idCarrinho);
            compraDetails.setId_itens_compra(idItens);
            compraService.updateCompra(compraDetails);
            return ResponseEntity.ok(compraDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/compra/{cpfUser}/{idCarrinho}/{idItens}")
    public ResponseEntity<Void> deleteCompra(@PathVariable Integer cpfUser, @PathVariable Integer idCarrinho, @PathVariable Integer idItens) {
        Optional<Compra> compra = compraService.getCompraById(cpfUser, idCarrinho, idItens);
        if (compra.isPresent()) {
            compraService.deleteCompra(cpfUser, idCarrinho, idItens);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
