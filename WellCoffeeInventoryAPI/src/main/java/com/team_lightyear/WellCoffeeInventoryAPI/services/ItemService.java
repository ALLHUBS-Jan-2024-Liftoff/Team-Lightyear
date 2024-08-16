package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.ItemDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Category;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.CategoryRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.ItemRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by Deanne Chae
 */

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private InvoiceRepository invoiceRepository;

    public Item createItem(int categoryId, Item item) {
        /* '.orElseThrow()' is another/more current method of working with 'Optional'
        This approach will either get the category or throw an exception */
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new EntityNotFoundException("Category with ID " + categoryId + " not found"));

        // If no exception is thrown, the category will be assigned and the item saved
        item.setCategory(category);
        return itemRepository.save(item);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItemById(int id) {
        return itemRepository.findById(id);
    }

    public Item updateItem(int id, ItemDTO itemDetails) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item with ID " + id + " not found"));

        /* The if statements will check to see if each field is presented with data
        Any field without a value will remain the same */
        if (itemDetails.getName() != null) {
            item.setName(itemDetails.getName());
        }
        if (itemDetails.getQuantity() != null) {
            item.setQuantity(itemDetails.getQuantity());
        }
        if (itemDetails.getMinQuantity() != null) {
            item.setMinQuantity(itemDetails.getMinQuantity());
        }
        if (itemDetails.getPrice() != null) {
            item.setPrice(itemDetails.getPrice());
        }
        if (itemDetails.getLocation() != null) {
            item.setLocation(itemDetails.getLocation());
        }
        if (itemDetails.getDescription() != null) {
            item.setDescription(itemDetails.getDescription());
        }
        if (itemDetails.getCategoryId() != null) {
            // If the category field gets assigned a new value we need to make sure it exists in the database
            int categoryId = itemDetails.getCategoryId();
            Category category = categoryRepository.findById(categoryId)
                    .orElseThrow(() -> new EntityNotFoundException("Category with ID " + categoryId + " not found"));
            item.setCategory(category);
        }

        return itemRepository.save(item);
    }
    
    public void updateItemCost(int id, Double price) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item with ID " + id + " not found"));
        item.setPrice(price);
        itemRepository.save(item);
    }
    
    public void updateItemQuantity(int id, int quantity) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Item with ID " + id + " not found"));
        int currentQuantity = item.getQuantity();
        item.setQuantity(currentQuantity + quantity);
        itemRepository.save(item);
    }

    public void deleteItem(int id) {
        if(!itemRepository.existsById(id)) {
            throw new EntityNotFoundException("Item with ID " + id + " not found");
        }
        Item item = itemRepository.getReferenceById(id);
        itemRepository.delete(item);
    }
    
    //Adds invoice to the list of invoices in the Item
    public void addInvoiceToItem(Invoice invoice) {
        for (Item item : invoice.getItemsOrdered()) {
            item.addInvoice(invoice);
        }
        invoiceRepository.save(invoice);
    }
}
