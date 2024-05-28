package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Ingresso;
import com.example.Pemun_project.service.IngressoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class IngressoController {
    
    @Autowired
    private IngressoService ingressoService;
    
    @GetMapping("/ingressos")
    public List<Ingresso> getAllIngressos() {
        return ingressoService.getAllIngressos();
    }
    
    @GetMapping("/ingressos/preco/{id_ingresso}")
    public float findPrice(@PathVariable Integer id_ingresso) {
        return ingressoService.findPrice(id_ingresso);
    }
    
    @GetMapping("/ingresso/{id_ingresso}")
    public ResponseEntity<Ingresso> getIngressoById(@PathVariable Integer id_ingresso) {
        Optional<Ingresso> ingresso = ingressoService.getIngressoById(id_ingresso);
        return ingresso.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/ingresso")
    public ResponseEntity<Ingresso> createIngresso(@RequestBody Ingresso ingresso) {
        ingressoService.createIngresso(ingresso);
        return ResponseEntity.ok(ingresso);
    }

    @PutMapping("/ingresso/{id_ingresso}")
    public ResponseEntity<Ingresso> updateIngresso(@PathVariable Integer id_ingresso, @PathVariable String nomeEvento, @RequestBody Ingresso ingressoDetails) {
        Optional<Ingresso> ingresso = ingressoService.getIngressoById(id_ingresso);
        if (ingresso.isPresent()) {
            ingressoDetails.setId_produto_ingresso(id_ingresso);
            ingressoDetails.setNome_evento_ingresso(nomeEvento);
            ingressoService.updateIngresso(ingressoDetails);
            return ResponseEntity.ok(ingressoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/ingresso/{id_ingresso}")
    public ResponseEntity<Void> deleteIngresso(@PathVariable Integer id_ingresso) {
        Optional<Ingresso> ingresso = ingressoService.getIngressoById(id_ingresso);
        if (ingresso.isPresent()) {
            ingressoService.deleteIngresso(id_ingresso);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
