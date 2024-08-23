package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.GetDTO.dto.GetInvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.InvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.services.AccountService;
import com.team_lightyear.WellCoffeeInventoryAPI.services.InvoiceService;
import com.team_lightyear.WellCoffeeInventoryAPI.services.ItemService;
import com.team_lightyear.WellCoffeeInventoryAPI.services.OrderedItemService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    
    @Autowired
    LoginController loginController;
    
    @Autowired
    AccountService accountService;
    
    //Get list of invoices
    @GetMapping("")
    public ResponseEntity<?> getInvoiceList() {
        List<GetInvoiceDTO> invoices = invoiceService.getInvoiceDTOList();
        return new ResponseEntity<>(invoices, HttpStatus.OK);
    }
    
    //Get list of invoices by Account ID
    @GetMapping("/account/{id}")
    public ResponseEntity<?> getInvoiceListByAccount(@PathVariable int id) {
        Optional<Account> result = accountService.getAccountById(id);
        
        Map<String, Object> data = new HashMap<>();
        
        if (result.isPresent()) {
            Account account = result.get();
            List<GetInvoiceDTO> invoices = invoiceService.getInvoiceDTOListByAccount(account);
            data.put("status", "200");
            data.put("message", "Success");
            data.put("data", invoices);
            return new ResponseEntity<>(data, HttpStatus.OK);
        } else {
            Map<String, String> responseBody = new HashMap<>();
            responseBody.put("message", "No user with that ID exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseBody);
        }
    }
    
    //Get invoice by id
    @GetMapping("/{id}")
    public ResponseEntity<?> getInvoiceById(@PathVariable int id) {
        GetInvoiceDTO invoice = invoiceService.getInvoiceById(id);
        return new ResponseEntity<>(invoice, HttpStatus.OK);
    }
    
    //Create new invoice
    @PostMapping("/new")
    public ResponseEntity<Map<String, String>> postInvoice(@RequestBody InvoiceDTO newInvoice, HttpServletRequest request) {
        HttpSession session = request.getSession();
        Account account = loginController.getAccountFromSession(session);
        newInvoice.setAccount(account);
        Map<String, String> responseBody = new HashMap<>();
        if (account != null) {
            //Calls the invoice service to process the new invoice
            Invoice invoice = invoiceService.processNewInvoice(newInvoice);
            //Adds invoice to the Set<Invoice> invoiceList in OrderedItem after the invoice has been
            // created
            itemService.addInvoiceToItem(invoice);
            responseBody.put("message", "Invoice successfully created");
            return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
        } else {
            responseBody.put("message", "User not found in session");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseBody);
        }
    }
    
    //TODO - write method to get invoices created by a specific Account
    
}
