package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Ingresso;
import com.example.Pemun_project.service.IngressoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class IngressoController {

    @Autowired
    private IngressoService ingressoService;

    @GetMapping("/ingressos")
    public List<Ingresso> getAllIngressos() {
        return ingressoService.getAllIngressos();
    }

    @GetMapping("/ingresso/{idProduto}/{nomeEvento}")
    public ResponseEntity<Ingresso> getIngressoById(@PathVariable Integer idProduto, @PathVariable String nomeEvento) {
        Optional<Ingresso> ingresso = ingressoService.getIngressoById(idProduto, nomeEvento);
        return ingresso.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/ingresso")
    public ResponseEntity<Ingresso> createIngresso(@RequestBody Ingresso ingresso) {
        ingressoService.createIngresso(ingresso);
        return ResponseEntity.ok(ingresso);
    }

    @PutMapping("/ingresso/{idProduto}/{nomeEvento}")
    public ResponseEntity<Ingresso> updateIngresso(@PathVariable Integer idProduto, @PathVariable String nomeEvento, @RequestBody Ingresso ingressoDetails) {
        Optional<Ingresso> ingresso = ingressoService.getIngressoById(idProduto, nomeEvento);
        if (ingresso.isPresent()) {
            ingressoDetails.setId_produto_ingresso(idProduto);
            ingressoDetails.setNome_evento_ingresso(nomeEvento);
            ingressoService.updateIngresso(ingressoDetails);
            return ResponseEntity.ok(ingressoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/ingresso/{idProduto}/{nomeEvento}")
    public ResponseEntity<Void> deleteIngresso(@PathVariable Integer idProduto, @PathVariable String nomeEvento) {
        Optional<Ingresso> ingresso = ingressoService.getIngressoById(idProduto, nomeEvento);
        if (ingresso.isPresent()) {
            ingressoService.deleteIngresso(idProduto, nomeEvento);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
