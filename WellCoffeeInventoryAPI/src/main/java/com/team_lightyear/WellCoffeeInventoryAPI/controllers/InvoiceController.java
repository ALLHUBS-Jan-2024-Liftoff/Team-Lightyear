package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
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
    
    //Get list of invoices
    @GetMapping("")
    public List<Invoice> getInvoiceList(){return invoiceRepository.findAll();}
    
    @PostMapping("/new")
    public Invoice postInvoice(Invoice newinvoice) {
        return invoiceRepository.save(newinvoice);
    }
}
