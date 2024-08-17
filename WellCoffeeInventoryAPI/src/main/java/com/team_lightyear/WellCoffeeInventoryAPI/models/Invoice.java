package com.team_lightyear.WellCoffeeInventoryAPI.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.time.LocalDate;
import java.util.*;

/**
 * Created by Trevor Gruber
 */

@Entity
//Tells hibernate how to identify objects
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Invoice {
    
    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    //FetchMode.SELECT uses the JSON Identity information (annotated above the class) to stop
    // retrieving objects in a
    // recursive manner. If the object has already been retrieved once, it just passes a
    // reference (the id) into the JSON file and doesn't retrieve the whole object
    @ManyToMany (cascade = CascadeType.ALL)
    @JsonIgnore
    @JoinTable(
            name = "Invoice_Item",
            joinColumns = { @JoinColumn(name = "invoice_id") },
            inverseJoinColumns = { @JoinColumn(name = "item_id") }
    )
    //This field stores a set of the Item model to be able to retrieve item information
    private final Set<Item> itemsOrdered = new HashSet<>();
    
    @OneToMany( cascade = CascadeType.ALL)
    @JsonIgnore
    //This field stores a list of the OrderedItem model to be able to retrieve the cost of the
    // item on this particular invoice
    private final List<OrderedItem> orderedItems = new ArrayList<>();
    
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

    public void addItem(Item item){
        itemsOrdered.add(item);
    }
    
    public void addOrderedItem(OrderedItem orderedItem) {
        orderedItems.add(orderedItem);
    }
    
    /* Getters and Setters */
    
    public int getId() {
        return id;
    }
    
    public Set<Item> getItemsOrdered() {
        return itemsOrdered;
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
    
    public List<OrderedItem> getOrderedItemList() {
        return orderedItems;
    }
    
    /* toString */
    
    @Override
    public String toString() {
        return "Invoice{" +
                "id=" + id +
                ", itemsOrdered=" + itemsOrdered +
                ", orderedItems=" + orderedItems +
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
