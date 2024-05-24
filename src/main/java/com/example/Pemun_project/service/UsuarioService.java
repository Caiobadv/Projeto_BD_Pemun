package com.example.Pemun_project.service;

import com.example.Pemun_project.model.Usuario;
import com.example.Pemun_project.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> getUsuarioByCpf(Integer cpf) {
        return usuarioRepository.findByCpf(cpf);
    }

    public void createUsuario(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    public void updateUsuario(Usuario usuario) {
        usuarioRepository.update(usuario);
    }

    public void deleteUsuario(Integer cpf) {
        usuarioRepository.deleteByCpf(cpf);
    }
}
