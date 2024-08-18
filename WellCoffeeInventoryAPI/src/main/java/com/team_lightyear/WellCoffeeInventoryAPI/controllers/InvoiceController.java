package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.GetDTO.dto.GetInvoiceDTO;
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

/**
 * Created by Trevor Gruber
 */
@RestController
@RequestMapping("/api/invoice")
@CrossOrigin(origins = "http://localhost:5173")
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
    public ResponseEntity<?> getInvoiceList(){
        List<GetInvoiceDTO> invoices = invoiceService.getInvoiceDTOList();
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }
    
    //Get invoice by id
    @GetMapping("/{id}")
    public ResponseEntity<?> getInvoiceById(@PathVariable int id) {
        GetInvoiceDTO invoice = invoiceService.getInvoiceById(id);
        return new ResponseEntity<>(invoice, HttpStatus.OK);
    }
    
    //Create new invoice
    @PostMapping("/new")
    public Invoice postInvoice(@RequestBody InvoiceDTO newInvoice) {
        //TODO get user from session and set in newInvoice
        
        //Calls the invoice service to process the new invoice
        Invoice invoice = invoiceService.processNewInvoice(newInvoice);
        //Adds invoice to the Set<Invoice> invoiceList in OrderedItem after the invoice has been
        // created
        itemService.addInvoiceToItem(invoice);
        return invoice;
    }
    
    //TODO - write method to get invoices created by a specific Account
    
}
