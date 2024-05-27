package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Evento;
import com.example.Pemun_project.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class EventoController {

    @Autowired
    private EventoService eventoService;

    @GetMapping("/eventos")
    public List<Evento> getAllEventos() {
        return eventoService.getAllEventos();
    }

    @GetMapping("/evento/{nome}")
    public ResponseEntity<Evento> getEventoById(@PathVariable String nome) {
        Optional<Evento> evento = eventoService.getEventoById(nome);
        return evento.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/evento")
    public ResponseEntity<Evento> createEvento(@RequestBody Evento evento) {
        eventoService.createEvento(evento);
        return ResponseEntity.ok(evento);
    }

    @PutMapping("/evento/{nome}")
    public ResponseEntity<Evento> updateEvento(@PathVariable String nome, @RequestBody Evento eventoDetails) {
        Optional<Evento> evento = eventoService.getEventoById(nome);
        if (evento.isPresent()) {
            eventoDetails.setNome_evento(nome);
            eventoService.updateEvento(eventoDetails);
            return ResponseEntity.ok(eventoDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/evento/{nome}")
    public ResponseEntity<Void> deleteEvento(@PathVariable String nome) {
        Optional<Evento> evento = eventoService.getEventoById(nome);
        if (evento.isPresent()) {
            eventoService.deleteEvento(nome);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
