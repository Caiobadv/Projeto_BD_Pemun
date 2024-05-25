package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Contem;
import com.example.Pemun_project.repository.ContemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContemService {

    @Autowired
    private ContemRepository contemRepository;

    public List<Contem> getAllContem() {
        return contemRepository.findAll();
    }

    public Optional<Contem> getContemById(Integer idPacote, Integer idItem) {
        return contemRepository.findById(idPacote, idItem);
    }

    public void createContem(Contem contem) {
        contemRepository.save(contem);
    }

    public void updateContem(Contem contem) {
        contemRepository.update(contem);
    }

    public void deleteContem(Integer idPacote, Integer idItem) {
        contemRepository.deleteById(idPacote, idItem);
    }
}
