package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Ingresso;
import com.example.Pemun_project.repository.IngressoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngressoService {

    @Autowired
    private IngressoRepository ingressoRepository;

    public List<Ingresso> getAllIngressos() {
        return ingressoRepository.findAll();
    }

    public Optional<Ingresso> getIngressoById(Integer idProduto, String nomeEvento) {
        return ingressoRepository.findById(idProduto, nomeEvento);
    }

    public void createIngresso(Ingresso ingresso) {
        ingressoRepository.save(ingresso);
    }

    public void updateIngresso(Ingresso ingresso) {
        ingressoRepository.update(ingresso);
    }

    public void deleteIngresso(Integer idProduto, String nomeEvento) {
        ingressoRepository.deleteById(idProduto, nomeEvento);
    }
}
