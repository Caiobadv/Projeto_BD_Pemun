package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Diretor;
import com.example.Pemun_project.service.DiretorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DiretorController {

    @Autowired
    private DiretorService diretorService;

    @GetMapping("/diretores")
    public List<Diretor> getAllDiretores() {
        return diretorService.getAllDiretores();
    }

    @GetMapping("diretor/{cpf}/{idComite}")
    public ResponseEntity<Diretor> getDiretorById(@PathVariable Integer cpf, @PathVariable Integer idComite) {
        Optional<Diretor> diretor = diretorService.getDiretorById(cpf, idComite);
        return diretor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/diretor")
    public ResponseEntity<Diretor> createDiretor(@RequestBody Diretor diretor) {
        diretorService.createDiretor(diretor);
        return ResponseEntity.ok(diretor);
    }

    @PutMapping("/diretor/{cpf}/{idComite}")
    public ResponseEntity<Diretor> updateDiretor(@PathVariable Integer cpf, @PathVariable Integer idComite, @RequestBody Diretor diretorDetails) {
        Optional<Diretor> diretor = diretorService.getDiretorById(cpf, idComite);
        if (diretor.isPresent()) {
            diretorDetails.setCpf_diretor(cpf);
            diretorDetails.setId_comite_diretor(idComite);
            diretorService.updateDiretor(diretorDetails);
            return ResponseEntity.ok(diretorDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/diretor/{cpf}/{idComite}")
    public ResponseEntity<Void> deleteDiretor(@PathVariable Integer cpf, @PathVariable Integer idComite) {
        Optional<Diretor> diretor = diretorService.getDiretorById(cpf, idComite);
        if (diretor.isPresent()) {
            diretorService.deleteDiretor(cpf, idComite);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
