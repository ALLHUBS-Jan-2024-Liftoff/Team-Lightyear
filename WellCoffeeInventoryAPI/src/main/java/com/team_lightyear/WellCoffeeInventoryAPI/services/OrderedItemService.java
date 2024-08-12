package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.models.OrderedItem;
import com.team_lightyear.WellCoffeeInventoryAPI.models.OrderedItemDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.OrderedItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by Trevor Gruber
 */
@Service
public class OrderedItemService {
    
    @Autowired
    OrderedItemRepository orderedItemRepository;
    
    @Autowired
    ItemService itemService;
    
    @Autowired
    InvoiceRepository invoiceRepository;
    
    public OrderedItem createOrderedItem (OrderedItemDTO orderedItemDTO, Invoice newInvoice) {
        Item item = itemService.getItemById(orderedItemDTO.getItemId()).get();
        OrderedItem newOrderedItem = new OrderedItem(item, newInvoice, orderedItemDTO.getItemCost(),
                orderedItemDTO.getQuantityOrdered());
        return orderedItemRepository.save(newOrderedItem);
    }
    
    public void addOrderedItemToItem(OrderedItem newOrderedItem) {
        Item item = itemService.getItemById(newOrderedItem.getItem().getId()).get();
        item.addOrderedItem(newOrderedItem);
    }
    
    public Optional<OrderedItem> getOrderedItemById(Integer id) {
        return orderedItemRepository.findById(id);
    }
    
    public List<OrderedItem> orderedItemList (){
        return orderedItemRepository.findAll();
    }
    
}
