package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.models.InvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.InvoiceRepository;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Trevor Gruber
 */
@Service
public class InvoiceService {
    
    @Autowired
    ItemRepository itemRepository;
    
    @Autowired
    InvoiceRepository invoiceRepository;


//    @RequestParam List<Integer> skills) {
//        List<Skill> skillObjs = (List<Skill>) skillRepository.findAllById(skills);
//        newJob.setSkills(skillObjs);
    
    public Invoice processNewInvoice(InvoiceDTO newInvoiceDTO){
        List<Item> invoiceItems =
                (List<Item>) itemRepository.findAllById(newInvoiceDTO.getItemList());
        Invoice newInvoice = new Invoice(newInvoiceDTO.getInvoiceDate(), newInvoiceDTO.getVendor()
                , newInvoiceDTO.getInvoiceNumber());
        for (Item item : invoiceItems){
            newInvoice.addItems(item);
        }
        return invoiceRepository.save(newInvoice);
    }
    
}
