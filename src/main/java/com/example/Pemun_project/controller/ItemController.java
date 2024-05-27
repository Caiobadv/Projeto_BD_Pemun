package com.example.Pemun_project.controller;

import com.example.Pemun_project.model.Item;
import com.example.Pemun_project.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/item/{idItem}")
    public ResponseEntity<Item> getItemById(@PathVariable Integer idItem) {
        Optional<Item> item = itemService.getItemById(idItem);
        return item.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/item")
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        itemService.createItem(item);
        return ResponseEntity.ok(item);
    }

    @PutMapping("/item/{idItem}")
    public ResponseEntity<Item> updateItem(@PathVariable Integer idItem, @RequestBody Item itemDetails) {
        Optional<Item> item = itemService.getItemById(idItem);
        if (item.isPresent()) {
            itemDetails.setId_item(idItem);
            itemService.updateItem(itemDetails);
            return ResponseEntity.ok(itemDetails);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/item/{idItem}")
    public ResponseEntity<Void> deleteItem(@PathVariable Integer idItem) {
        Optional<Item> item = itemService.getItemById(idItem);
        if (item.isPresent()) {
            itemService.deleteItem(idItem);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
