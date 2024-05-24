package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Delegado;
import com.example.Pemun_project.repository.DelegadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DelegadoService {

    @Autowired
    private DelegadoRepository delegadoRepository;

    public List<Delegado> getAllDelegados() {
        return delegadoRepository.findAll();
    }

    public Optional<Delegado> getDelegadoByCpf(Integer cpf) {
        return delegadoRepository.findByCpf(cpf);
    }

    public void createDelegado(Delegado delegado) {
        delegadoRepository.save(delegado);
    }

    public void updateDelegado(Delegado delegado) {
        delegadoRepository.update(delegado);
    }

    public void deleteDelegado(Integer cpf) {
        delegadoRepository.deleteByCpf(cpf);
    }
}
