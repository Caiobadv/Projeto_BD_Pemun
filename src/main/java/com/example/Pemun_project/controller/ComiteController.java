package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Comite;
import com.example.Pemun_project.service.ComiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ComiteController {

    @Autowired
    private ComiteService comiteService;

    @GetMapping("/comites")
    public List<Comite> getAllComites() {
        return comiteService.getAllComites();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comite> getComiteById(@PathVariable Integer id) {
        Optional<Comite> comite = comiteService.getComiteById(id);
        return comite.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Comite> createComite(@RequestBody Comite comite) {
        comiteService.createComite(comite);
        return ResponseEntity.ok(comite);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comite> updateComite(@PathVariable Integer id, @RequestBody Comite comiteDetails) {
        Optional<Comite> comite = comiteService.getComiteById(id);
        if (comite.isPresent()) {
            comiteDetails.setId_comite(id);
            comiteService.updateComite(comiteDetails);
            return ResponseEntity.ok(comiteDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComite(@PathVariable Integer id) {
        Optional<Comite> comite = comiteService.getComiteById(id);
        if (comite.isPresent()) {
            comiteService.deleteComite(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
