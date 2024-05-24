package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Diretor;
import com.example.Pemun_project.repository.DiretorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DiretorService {

    @Autowired
    private DiretorRepository diretorRepository;

    public List<Diretor> getAllDiretores() {
        return diretorRepository.findAll();
    }

    public Optional<Diretor> getDiretorById(Integer cpf, Integer idComite) {
        return diretorRepository.findById(cpf, idComite);
    }

    public void createDiretor(Diretor diretor) {
        diretorRepository.save(diretor);
    }

    public void updateDiretor(Diretor diretor) {
        diretorRepository.update(diretor);
    }

    public void deleteDiretor(Integer cpf, Integer idComite) {
        diretorRepository.deleteById(cpf, idComite);
    }
}
