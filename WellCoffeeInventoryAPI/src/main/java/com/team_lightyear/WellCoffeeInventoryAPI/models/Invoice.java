package com.team_lightyear.WellCoffeeInventoryAPI.models;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

/**
 * Created by Trevor Gruber
 */

@Entity
public class Invoice {
    
    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    //TODO - Trevor - implement once Item entity is available
    @ManyToMany(mappedBy = "invoiceList")
    private final HashMap<Item, Long> itemLongQuantityOrderedHashMap = new HashMap<>();
    
//    TODO - Trevor - implement once authentication/authorization service is running
//    @ManyToOne
//    private Account account;
    
    //LocalDate is stored as 2010-12-03
    private LocalDate invoiceDate;
    
    private String vendor;
    
    @Column(unique = true)
    private String invoiceNumber;
    
    
    
    /* Constructor(s) */
    
    public Invoice() {
    }
    
    public Invoice(LocalDate invoiceDate, String vendor, String invoiceNumber) {
        this.invoiceDate = invoiceDate;
        this.vendor = vendor;
        this.invoiceNumber = invoiceNumber;
    }
    
    /* Custom methods */
    
    public void addItem(Item item, Long quantity){
        itemLongQuantityOrderedHashMap.put(item, quantity);
    }
    
    /* Getters and Setters */
    
    public long getId() {
        return id;
    }
    
    public String getVendor() {
        return vendor;
    }
    
    public void setVendor(String vendor) {
        this.vendor = vendor;
    }
    
    public String getInvoiceNumber() {
        return invoiceNumber;
    }
    
    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }
    
    public LocalDate getInvoiceDate() {
        return invoiceDate;
    }
    
    public void setInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
    }
    
    /* toString */
    
    @Override
    public String toString() {
        return "Invoice{" +
                "id=" + id +
                ", invoiceDate=" + invoiceDate +
                ", vendor='" + vendor + '\'' +
                ", invoiceNumber='" + invoiceNumber + '\'' +
                '}';
    }
    
    /* Equals and Hashcode*/
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Invoice invoice = (Invoice) o;
        return id == invoice.id;
    }
    
    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
