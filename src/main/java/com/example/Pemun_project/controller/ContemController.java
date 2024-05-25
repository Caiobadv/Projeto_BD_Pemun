package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Contem;
import com.example.Pemun_project.service.ContemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contem")
public class ContemController {

    @Autowired
    private ContemService contemService;

    @GetMapping
    public List<Contem> getAllContem() {
        return contemService.getAllContem();
    }

    @GetMapping("Contem/{idPacote}/{idItem}")
    public ResponseEntity<Contem> getContemById(@PathVariable Integer idPacote, @PathVariable Integer idItem) {
        Optional<Contem> contem = contemService.getContemById(idPacote, idItem);
        return contem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Contem> createContem(@RequestBody Contem contem) {
        contemService.createContem(contem);
        return ResponseEntity.ok(contem);
    }

    @PutMapping("Contem/{idPacote}/{idItem}")
    public ResponseEntity<Contem> updateContem(@PathVariable Integer idPacote, @PathVariable Integer idItem, @RequestBody Contem contemDetails) {
        Optional<Contem> contem = contemService.getContemById(idPacote, idItem);
        if (contem.isPresent()) {
            contemDetails.setId_pacote_contem(idPacote);
            contemDetails.setId_item_contido(idItem);
            contemService.updateContem(contemDetails);
            return ResponseEntity.ok(contemDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("Contem/{idPacote}/{idItem}")
    public ResponseEntity<Void> deleteContem(@PathVariable Integer idPacote, @PathVariable Integer idItem) {
        Optional<Contem> contem = contemService.getContemById(idPacote, idItem);
        if (contem.isPresent()) {
            contemService.deleteContem(idPacote, idItem);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
