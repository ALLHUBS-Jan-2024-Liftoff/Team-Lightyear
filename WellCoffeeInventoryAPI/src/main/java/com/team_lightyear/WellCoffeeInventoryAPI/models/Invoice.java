package com.team_lightyear.WellCoffeeInventoryAPI.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.util.Objects;

/**
 * Created by Trevor Gruber
 */

@Entity
public class Invoice {
    
    /* fields */
    @Id
    @GeneratedValue
    private int id;
    
    //TODO implement once Item entity is available
//    @ManyToMany
//    private List<Item> itemList = new ArrayList<>();
    
    //TODO implement once authentication/authorization service is running
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
