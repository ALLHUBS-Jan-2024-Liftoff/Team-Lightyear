package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.OrderedItem;
import com.team_lightyear.WellCoffeeInventoryAPI.services.OrderedItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

/**
 * Created by Trevor Gruber
 */
@RestController
@RequestMapping("/api/orderedItem")
public class OrderedItemController {
    
    @Autowired
    private OrderedItemService orderedItemService;
    
    //This controller method is likely not needed
    @GetMapping("all")
    public List<OrderedItem> getAllOrderedItems () {
        return orderedItemService.orderedItemList();
    }
    
    //This controller method may be useful
    @GetMapping("/{id}")
    public ResponseEntity<?> getItemById(@PathVariable int id) {
        Optional<OrderedItem> item = orderedItemService.getOrderedItemById(id);
        if (item.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item with ID " + id + " not found");
        }
        return ResponseEntity.ok(item);
    }
}
