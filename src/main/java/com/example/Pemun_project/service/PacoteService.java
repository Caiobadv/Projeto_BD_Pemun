package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Pacote;
import com.example.Pemun_project.repository.PacoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacoteService {

    @Autowired
    private PacoteRepository pacoteRepository;

    public List<Pacote> getAllPacotes() {
        return pacoteRepository.findAll();
    }

    public Optional<Pacote> getPacoteById(Integer id) {
        return pacoteRepository.findById(id);
    }

    public void createPacote(Pacote pacote) {
        pacoteRepository.save(pacote);
    }

    public void updatePacote(Pacote pacote) {
        pacoteRepository.update(pacote);
    }

    public void deletePacote(Integer id) {
        pacoteRepository.deleteById(id);
    }
}
