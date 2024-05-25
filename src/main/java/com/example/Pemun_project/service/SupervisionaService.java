package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Supervisiona;
import com.example.Pemun_project.repository.SupervisionaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupervisionaService {

    @Autowired
    private SupervisionaRepository supervisionaRepository;

    public List<Supervisiona> getAllSupervisiona() {
        return supervisionaRepository.findAll();
    }

    public Optional<Supervisiona> getSupervisionaById(Integer supervisorCpf, Integer supervisionadoCpf) {
        return supervisionaRepository.findById(supervisorCpf, supervisionadoCpf);
    }

    public void createSupervisiona(Supervisiona supervisiona) {
        supervisionaRepository.save(supervisiona);
    }

    public void updateSupervisiona(Supervisiona supervisiona) {
        supervisionaRepository.update(supervisiona);
    }

    public void deleteSupervisiona(Integer supervisorCpf, Integer supervisionadoCpf) {
        supervisionaRepository.deleteById(supervisorCpf, supervisionadoCpf);
    }
}
