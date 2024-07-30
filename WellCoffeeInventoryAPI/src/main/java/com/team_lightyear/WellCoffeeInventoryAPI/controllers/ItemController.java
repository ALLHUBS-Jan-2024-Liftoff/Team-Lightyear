package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import com.team_lightyear.WellCoffeeInventoryAPI.services.CategoryService;
import com.team_lightyear.WellCoffeeInventoryAPI.services.ItemService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/item")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/new")
    public ResponseEntity<?> createItem(@RequestParam int categoryId, @RequestBody Item item) {
        try {
            Item createdItem = itemService.createItem(categoryId, item);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdItem);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public List<Item> getAllItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getItemById(@PathVariable int id) {
        Optional<Item> item = itemService.getItemById(id);
        if (item.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item with ID " + id + " not found");
        }
        return ResponseEntity.ok(item);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> updateItem(@PathVariable int id, @RequestBody Item itemDetails) {
        try {
            Item updatedItem = itemService.updateItem(id, itemDetails);
            return ResponseEntity.ok(updatedItem);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable int id) {
        try {
            itemService.deleteItem(id);
            return ResponseEntity.ok("Item with ID " + id + " deleted successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
