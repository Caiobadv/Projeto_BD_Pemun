package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Delegado;
import com.example.Pemun_project.service.DelegadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DelegadoController {

    @Autowired
    private DelegadoService delegadoService;

    @GetMapping("/delegados")
    public List<Delegado> getAllDelegados() {
        return delegadoService.getAllDelegados();
    }

    @GetMapping("/{cpfD}")
    public ResponseEntity<Delegado> getDelegadoByCpf(@PathVariable Integer cpf) {
        Optional<Delegado> delegado = delegadoService.getDelegadoByCpf(cpf);
        return delegado.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/delegado")
    public ResponseEntity<Delegado> createDelegado(@RequestBody Delegado delegado) {
        delegadoService.createDelegado(delegado);
        return ResponseEntity.ok(delegado);
    }

    @PutMapping("/{cpfD}")
    public ResponseEntity<Delegado> updateDelegado(@PathVariable Integer cpf, @RequestBody Delegado delegadoDetails) {
        Optional<Delegado> delegado = delegadoService.getDelegadoByCpf(cpf);
        if (delegado.isPresent()) {
            delegadoDetails.setCpf_delegado(cpf);
            delegadoService.updateDelegado(delegadoDetails);
            return ResponseEntity.ok(delegadoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{cpfD}")
    public ResponseEntity<Void> deleteDelegado(@PathVariable Integer cpf) {
        Optional<Delegado> delegado = delegadoService.getDelegadoByCpf(cpf);
        if (delegado.isPresent()) {
            delegadoService.deleteDelegado(cpf);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
