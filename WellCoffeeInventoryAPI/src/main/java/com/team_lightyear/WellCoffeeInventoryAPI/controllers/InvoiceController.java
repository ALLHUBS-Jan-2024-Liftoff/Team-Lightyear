package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.InvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.services.InvoiceService;
import com.team_lightyear.WellCoffeeInventoryAPI.services.ItemService;
import com.team_lightyear.WellCoffeeInventoryAPI.services.OrderedItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Created by Trevor Gruber
 */
@RestController
@RequestMapping("/api/invoice")
public class InvoiceController {
    
    @Autowired
    private InvoiceRepository invoiceRepository;
    
    @Autowired
    private InvoiceService invoiceService;
    
    @Autowired
    private ItemService itemService;
    
    @Autowired
    OrderedItemService orderedItemService;
    
    //Get list of invoices
    @GetMapping("")
    public List<Invoice> getInvoiceList(){return invoiceRepository.findAll();}
    
    //Get invoice by id
    @GetMapping("/{id}")
    public ResponseEntity<?> getInvoiceById(@PathVariable int id) {
        Optional<Invoice> invoice = invoiceService.getInvoiceById(id);
        if (invoice.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invoice with ID " + id + " " +
                    "not found");
        }
        return ResponseEntity.ok(invoice);
    }
    
    //Create new invoice
    @PostMapping("/new")
    public Invoice postInvoice(@RequestBody InvoiceDTO newInvoice) {
        //Calls the invoice service to process the new invoice
        Invoice invoice = invoiceService.processNewInvoice(newInvoice);
        //Adds invoice to the Set<Invoice> invoiceList in OrderedItem after the invoice has been
        // created
        itemService.addInvoiceToItem(invoice);
        return invoice;
    }
    
    //TODO - write method to get invoices created by a specific Account
    
}
