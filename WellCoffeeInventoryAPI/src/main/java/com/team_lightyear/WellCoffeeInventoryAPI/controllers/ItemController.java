package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.ItemDTO;
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
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private CategoryService categoryService;

    @PostMapping("/new")
    public ResponseEntity<?> createItem(@RequestBody ItemDTO itemDTO) {
        try {
            // This converts the DTO into an Item entity
            Item item = new Item(
                    itemDTO.getName(),
                    itemDTO.getQuantity(),
                    itemDTO.getMinQuantity(),
                    itemDTO.getPrice(),
                    itemDTO.getLocation(),
                    itemDTO.getDescription(),
                    null,  // Category is handled in the service layer
                    itemDTO.getAmazonProductId(),
                    itemDTO.getImage()
            );

            // This retrieves the categoryId from the DTO
            int categoryId = itemDTO.getCategoryId();

            // Creates the new Item and saves it to the database
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
    public ResponseEntity<?> updateItem(@PathVariable int id, @RequestBody ItemDTO itemDetails) {
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
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The item with ID " + id + " is linked to other records and cannot be deleted at this time.");
        }
    }
}
