package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Supervisiona;
import com.example.Pemun_project.service.SupervisionaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SupervisionaController {

    @Autowired
    private SupervisionaService supervisionaService;

    @GetMapping("/supervisiona")
    public List<Supervisiona> getAllSupervisiona() {
        return supervisionaService.getAllSupervisiona();
    }

    @GetMapping("/{supervisorCpf}/{supervisionadoCpf}")
    public ResponseEntity<Supervisiona> getSupervisionaById(@PathVariable Integer supervisorCpf, @PathVariable Integer supervisionadoCpf) {
        Optional<Supervisiona> supervisiona = supervisionaService.getSupervisionaById(supervisorCpf, supervisionadoCpf);
        return supervisiona.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/supervisionaPost")
    public ResponseEntity<Supervisiona> createSupervisiona(@RequestBody Supervisiona supervisiona) {
        supervisionaService.createSupervisiona(supervisiona);
        return ResponseEntity.ok(supervisiona);
    }

    @PutMapping("/{supervisorCpf}/{supervisionadoCpf}")
    public ResponseEntity<Supervisiona> updateSupervisiona(@PathVariable Integer supervisorCpf, @PathVariable Integer supervisionadoCpf, @RequestBody Supervisiona supervisionaDetails) {
        Optional<Supervisiona> supervisiona = supervisionaService.getSupervisionaById(supervisorCpf, supervisionadoCpf);
        if (supervisiona.isPresent()) {
            supervisionaDetails.setCpf_diretor_supervisor(supervisorCpf);
            supervisionaDetails.setCpf_diretor_supervisionado(supervisionadoCpf);
            supervisionaService.updateSupervisiona(supervisionaDetails);
            return ResponseEntity.ok(supervisionaDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{supervisorCpf}/{supervisionadoCpf}")
    public ResponseEntity<Void> deleteSupervisiona(@PathVariable Integer supervisorCpf, @PathVariable Integer supervisionadoCpf) {
        Optional<Supervisiona> supervisiona = supervisionaService.getSupervisionaById(supervisorCpf, supervisionadoCpf);
        if (supervisiona.isPresent()) {
            supervisionaService.deleteSupervisiona(supervisorCpf, supervisionadoCpf);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
