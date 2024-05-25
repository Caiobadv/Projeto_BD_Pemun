package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Pacote;
import com.example.Pemun_project.service.PacoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pacotes")
public class PacoteController {

    @Autowired
    private PacoteService pacoteService;

    @GetMapping
    public List<Pacote> getAllPacotes() {
        return pacoteService.getAllPacotes();
    }

    @GetMapping("/pacotes/{idPacote}")
    public ResponseEntity<Pacote> getPacoteById(@PathVariable Integer id) {
        Optional<Pacote> pacote = pacoteService.getPacoteById(id);
        return pacote.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/pacote")
    public ResponseEntity<Pacote> createPacote(@RequestBody Pacote pacote) {
        pacoteService.createPacote(pacote);
        return ResponseEntity.ok(pacote);
    }

    @PutMapping("/pacotes/{idPacote}")
    public ResponseEntity<Pacote> updatePacote(@PathVariable Integer id, @RequestBody Pacote pacoteDetails) {
        Optional<Pacote> pacote = pacoteService.getPacoteById(id);
        if (pacote.isPresent()) {
            pacoteDetails.setId_item_pacote(id);
            pacoteService.updatePacote(pacoteDetails);
            return ResponseEntity.ok(pacoteDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/pacotes/{idPacote}")
    public ResponseEntity<Void> deletePacote(@PathVariable Integer id) {
        Optional<Pacote> pacote = pacoteService.getPacoteById(id);
        if (pacote.isPresent()) {
            pacoteService.deletePacote(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
