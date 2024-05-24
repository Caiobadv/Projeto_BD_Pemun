package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Faz;
import com.example.Pemun_project.repository.FazRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FazService {

    @Autowired
    private FazRepository fazRepository;

    public List<Faz> getAllFaz() {
        return fazRepository.findAll();
    }

    public Optional<Faz> getFazById(Integer cpfDelegado, Integer idComite, Integer idInscricao) {
        return fazRepository.findById(cpfDelegado, idComite, idInscricao);
    }

    public void createFaz(Faz faz) {
        fazRepository.save(faz);
    }

    public void updateFaz(Faz faz) {
        fazRepository.update(faz);
    }

    public void deleteFaz(Integer cpfDelegado, Integer idComite, Integer idInscricao) {
        fazRepository.deleteById(cpfDelegado, idComite, idInscricao);
    }
}
