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

    public Optional<Ingresso> getIngressoById(Integer id_ingresso) {
        return ingressoRepository.findById(id_ingresso);
    }

    public void createIngresso(Ingresso ingresso) {
        ingressoRepository.save(ingresso);
    }

    public void updateIngresso(Ingresso ingresso) {
        ingressoRepository.update(ingresso);
    }

    public void deleteIngresso(Integer id_ingresso) {
        ingressoRepository.deleteById(id_ingresso);
    }
    public float findPrice(Integer id_ingresso) {
        return ingressoRepository.findPrice(id_ingresso);
    }
}
