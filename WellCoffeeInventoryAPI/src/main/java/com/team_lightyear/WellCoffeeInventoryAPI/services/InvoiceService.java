package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.InvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.OrderedItemDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.GetDTO.GetInvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.GetDTO.GetInvoiceDTOMapper;
import com.team_lightyear.WellCoffeeInventoryAPI.models.*;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Created by Trevor Gruber
 */
@Service
public class InvoiceService {
    
    @Autowired
    private ItemService itemService;
    
    @Autowired
    private OrderedItemService orderedItemService;
    
    @Autowired
    private InvoiceRepository invoiceRepository;
    
    @Autowired
    private GetInvoiceDTOMapper getInvoiceDTOMapper;
    
    //Retrieve list of GetInvoiceDTOs
    public List<GetInvoiceDTO> getInvoiceDTOList () {
        return invoiceRepository.findAll().stream().map(getInvoiceDTOMapper).collect(Collectors.toList());
    }
    
    //Retrieve an invoice by its id
    public GetInvoiceDTO getInvoiceById(int id) {
        Optional<GetInvoiceDTO> result = invoiceRepository.findById(id).map(getInvoiceDTOMapper);
        if (result.isEmpty()) {
            throw new RuntimeException("Invoice not found");
        }
        return result.get();
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
