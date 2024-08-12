package com.team_lightyear.WellCoffeeInventoryAPI.models;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

/**
 * Created by Trevor Gruber
 */

public class InvoiceDTO {
    
    /* fields */
    // DTO list of Item ID integers to send to InvoiceService for processing by ItemRepository
    private List<OrderedItemDTO> orderedItemsList;
    
//    private Account account;
    
    //LocalDate is stored as 2010-12-03
    private LocalDate invoiceDate;
    
    private String vendor;
    
    private String invoiceNumber;
    
    /* Constructor(s) */
    
    public InvoiceDTO() {
    }
    
    public InvoiceDTO(LocalDate invoiceDate, String vendor, String invoiceNumber,
                      List<OrderedItemDTO> itemList) {
        this.invoiceDate = invoiceDate;
        this.vendor = vendor;
        this.invoiceNumber = invoiceNumber;
        this.orderedItemsList = itemList;
    }
    
    /* Custom methods */
    
    /* Getters and Setters */
    
    public List<OrderedItemDTO> getOrderedItemsList() {
        return orderedItemsList;
    }
    
    public LocalDate getInvoiceDate() {
        return invoiceDate;
    }
    
    public void setInvoiceDate(LocalDate invoiceDate) {
        this.invoiceDate = invoiceDate;
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
    
    /* toString */
    
    @Override
    public String toString() {
        return "InvoiceDTO{" +
                "orderedItemsList=" + orderedItemsList +
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
        InvoiceDTO that = (InvoiceDTO) o;
        return Objects.equals(orderedItemsList, that.orderedItemsList) && Objects.equals(invoiceDate,
                that.invoiceDate) && Objects.equals(vendor, that.vendor) && Objects.equals(invoiceNumber, that.invoiceNumber);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(orderedItemsList, invoiceDate, vendor, invoiceNumber);
    }
}
