package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Comite;
import com.example.Pemun_project.repository.ComiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComiteService {

    @Autowired
    private ComiteRepository comiteRepository;

    public List<Comite> getAllComites() {
        return comiteRepository.findAll();
    }

    public Optional<Comite> getComiteById(Integer id) {
        return comiteRepository.findById(id);
    }

    public void createComite(Comite comite) {
        comiteRepository.save(comite);
    }

    public void updateComite(Comite comite) {
        comiteRepository.update(comite);
    }

    public void deleteComite(Integer id) {
        comiteRepository.deleteById(id);
    }
}
