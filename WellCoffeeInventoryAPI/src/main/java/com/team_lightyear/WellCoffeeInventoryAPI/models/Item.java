package com.team_lightyear.WellCoffeeInventoryAPI.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.*;

/**
 * Created by Deanne Chae
 */

@Entity
//Tells hibernate how to identify objects
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    // Specifying the strategy ensures the JPA will consistently and reliably generate unique primary keys

    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 50, message = "Must be between 3 and 15 characters")
    private String name;
    private Integer quantity;
    private Double price;
    private String location;
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "orderedItem_id")
    //Stores a List of OrderedItem model to be able to retrieve a history of the cost of the item
    private final List<OrderedItem> orderedItemList = new ArrayList<>();
    
    //FetchMode.SELECT uses the JSON Identity information (annotated above the class) to stop
    // retrieving objects in a
    // recursive manner. If the object has already been retrieved once, it just passes a
    // reference (the id) into the JSON file and doesn't retrieve the whole object
    
    @ManyToMany (mappedBy = "itemsOrdered")
    @Fetch(FetchMode.SELECT)
    //Stores the list of invoices this item is included in
    private final Set<Invoice> invoiceList = new HashSet<>();
    
    // No-argument constructor, required by JPA
    public Item() {
    }

    // Constructor
    public Item(String name, Integer quantity, Double price, String location, String description, Category category) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.location = location;
        this.description = description;
        this.category = category;
    }

    // Getters and Setters
    
    public void addInvoice (Invoice invoice) {
        invoiceList.add(invoice);
    }
    
    public void addOrderedItem(OrderedItem orderedItem) {
        orderedItemList.add(orderedItem);
    }
    
    public List<OrderedItem> getOrderedItemList() {
        return orderedItemList;
    }
    
    public Set<Invoice> getInvoiceList() {
        return invoiceList;
    }
    
    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
    
//    public List<Invoice> getInvoiceList() {
//        return invoiceList;
//    }
    
    // toString() method
    
    
    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ", location='" + location + '\'' +
                ", description='" + description + '\'' +
                ", category=" + category +
                ", orderedItemList=" + orderedItemList +
                ", invoiceList=" + invoiceList +
                '}';
    }
    
    // equals() method
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return id == item.id;
    }

    // hashCode() method
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
