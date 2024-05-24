package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Inscricao;
import com.example.Pemun_project.repository.InscricaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InscricaoService {

    @Autowired
    private InscricaoRepository inscricaoRepository;

    public List<Inscricao> getAllInscricoes() {
        return inscricaoRepository.findAll();
    }

    public Optional<Inscricao> getInscricaoById(Integer id) {
        return inscricaoRepository.findById(id);
    }

    public void createInscricao(Inscricao inscricao) {
        inscricaoRepository.save(inscricao);
    }

    public void updateInscricao(Inscricao inscricao) {
        inscricaoRepository.update(inscricao);
    }

    public void deleteInscricao(Integer id) {
        inscricaoRepository.deleteById(id);
    }
}
