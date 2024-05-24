package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Faz;
import com.example.Pemun_project.service.FazService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FazController {

    @Autowired
    private FazService fazService;

    @GetMapping("/faz")
    public List<Faz> getAllFaz() {
        return fazService.getAllFaz();
    }

    @GetMapping("/{cpfDelegado}/{idComite}/{idInscricao}")
    public ResponseEntity<Faz> getFazById(@PathVariable Integer cpfDelegado, @PathVariable Integer idComite, @PathVariable Integer idInscricao) {
        Optional<Faz> faz = fazService.getFazById(cpfDelegado, idComite, idInscricao);
        return faz.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/fazz")
    public ResponseEntity<Faz> createFaz(@RequestBody Faz faz) {
        fazService.createFaz(faz);
        return ResponseEntity.ok(faz);
    }

    @PutMapping("/{cpfDelegado}/{idComite}/{idInscricao}")
    public ResponseEntity<Faz> updateFaz(@PathVariable Integer cpfDelegado, @PathVariable Integer idComite, @PathVariable Integer idInscricao, @RequestBody Faz fazDetails) {
        Optional<Faz> faz = fazService.getFazById(cpfDelegado, idComite, idInscricao);
        if (faz.isPresent()) {
            fazDetails.setCpf_delegado_inscricao_faz(cpfDelegado);
            fazDetails.setId_comite_inscricao_faz(idComite);
            fazDetails.setId_inscricao_faz(idInscricao);
            fazService.updateFaz(fazDetails);
            return ResponseEntity.ok(fazDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{cpfDelegado}/{idComite}/{idInscricao}")
    public ResponseEntity<Void> deleteFaz(@PathVariable Integer cpfDelegado, @PathVariable Integer idComite, @PathVariable Integer idInscricao) {
        Optional<Faz> faz = fazService.getFazById(cpfDelegado, idComite, idInscricao);
        if (faz.isPresent()) {
            fazService.deleteFaz(cpfDelegado, idComite, idInscricao);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
