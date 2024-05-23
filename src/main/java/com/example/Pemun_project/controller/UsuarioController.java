package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Usuario;
import com.example.Pemun_project.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getAllUsuarios();
    }

    @GetMapping("/{cpf}")
    public ResponseEntity<Usuario> getUsuarioByCpf(@PathVariable Integer cpf) {
        Optional<Usuario> usuario = usuarioService.getUsuarioByCpf(cpf);
        return usuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario usuario) {
        usuarioService.createUsuario(usuario);
        return ResponseEntity.ok(usuario);
    }

    @PutMapping("/{cpf}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Integer cpf, @RequestBody Usuario usuarioDetails) {
        Optional<Usuario> usuario = usuarioService.getUsuarioByCpf(cpf);
        if (usuario.isPresent()) {
            usuarioDetails.setCpf_user(cpf);
            usuarioService.updateUsuario(usuarioDetails);
            return ResponseEntity.ok(usuarioDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{cpf}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Integer cpf) {
        Optional<Usuario> usuario = usuarioService.getUsuarioByCpf(cpf);
        if (usuario.isPresent()) {
            usuarioService.deleteUsuario(cpf);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
