package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Evento;
import com.example.Pemun_project.repository.EventoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public List<Evento> getAllEventos() {
        return eventoRepository.findAll();
    }

    public Optional<Evento> getEventoById(String nome) {
        return eventoRepository.findById(nome);
    }

    public void createEvento(Evento evento) {
        eventoRepository.save(evento);
    }

    public void updateEvento(Evento evento) {
        eventoRepository.update(evento);
    }

    public void deleteEvento(String nome) {
        eventoRepository.deleteById(nome);
    }
}
