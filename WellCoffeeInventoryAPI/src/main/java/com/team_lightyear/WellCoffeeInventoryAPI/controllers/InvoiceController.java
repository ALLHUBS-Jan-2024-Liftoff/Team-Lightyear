package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.models.InvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
    
    //Get list of invoices
    @GetMapping("")
    public List<Invoice> getInvoiceList(){return invoiceRepository.findAll();}
    
    @PostMapping("/new")
    public Invoice postInvoice(InvoiceDTO newInvoice) {
        return invoiceService.processNewInvoice(newInvoice);
    }
}
