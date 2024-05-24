package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Inscricao;
import com.example.Pemun_project.service.InscricaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class InscricaoController {

    @Autowired
    private InscricaoService inscricaoService;

    @GetMapping("/inscricoes")
    public List<Inscricao> getAllInscricoes() {
        return inscricaoService.getAllInscricoes();
    }

    @GetMapping("/{idI}")
    public ResponseEntity<Inscricao> getInscricaoById(@PathVariable Integer id) {
        Optional<Inscricao> inscricao = inscricaoService.getInscricaoById(id);
        return inscricao.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/inscricao")
    public ResponseEntity<Inscricao> createInscricao(@RequestBody Inscricao inscricao) {
        inscricaoService.createInscricao(inscricao);
        return ResponseEntity.ok(inscricao);
    }

    @PutMapping("/{idI}")
    public ResponseEntity<Inscricao> updateInscricao(@PathVariable Integer id, @RequestBody Inscricao inscricaoDetails) {
        Optional<Inscricao> inscricao = inscricaoService.getInscricaoById(id);
        if (inscricao.isPresent()) {
            inscricaoDetails.setId_inscricao(id);
            inscricaoService.updateInscricao(inscricaoDetails);
            return ResponseEntity.ok(inscricaoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{idI}")
    public ResponseEntity<Void> deleteInscricao(@PathVariable Integer id) {
        Optional<Inscricao> inscricao = inscricaoService.getInscricaoById(id);
        if (inscricao.isPresent()) {
            inscricaoService.deleteInscricao(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
