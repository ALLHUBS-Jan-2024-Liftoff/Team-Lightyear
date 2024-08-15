package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.InvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.OrderedItemDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.*;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Created by Trevor Gruber
 */
@Service
public class InvoiceService {
    
    @Autowired
    ItemService itemService;
    
    @Autowired
    OrderedItemService orderedItemService;
    
    @Autowired
    InvoiceRepository invoiceRepository;
    
    //Retrieve an invoice by its id
    public Optional<Invoice> getInvoiceById(int id) {
        return invoiceRepository.findById(id);
    }
    
    //Process new invoices
    public Invoice processNewInvoice(InvoiceDTO newInvoiceDTO){
        //Construct Invoice object from DTO
        Invoice newInvoice = new Invoice(newInvoiceDTO.getInvoiceDate(), newInvoiceDTO.getVendor()
                , newInvoiceDTO.getInvoiceNumber());
        
        //Loop through the ordered items and process them
        for (OrderedItemDTO orderedItem : newInvoiceDTO.getOrderedItemsList()) {
            //Create/Save OrderedItem object
            OrderedItem newOrderedItem = orderedItemService.createOrderedItem(orderedItem, newInvoice);
            //Process object
            newInvoice.addItem(newOrderedItem.getItem());
            newInvoice.addOrderedItem(newOrderedItem);
            orderedItemService.addOrderedItemToItem(newOrderedItem);
            //Update Item entity with new price
            itemService.updateItemCost(newOrderedItem.getItem().getId(),
                    newOrderedItem.getItemCost());
            //Update Item quantity
            itemService.updateItemQuantity(newOrderedItem.getItem().getId(), newOrderedItem.getQuantityOrdered());
        }
        return invoiceRepository.save(newInvoice);
    }
    
    //TODO - Write method to get invoices created by a specific Account
}
