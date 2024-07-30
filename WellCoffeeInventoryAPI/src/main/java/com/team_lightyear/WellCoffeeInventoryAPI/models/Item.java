package com.team_lightyear.WellCoffeeInventoryAPI.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Created by Deanne Chae
 */

@Entity
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
    @JsonBackReference // Prevents infinite recursion
    private Category category;
    
    @ManyToMany
    private final List<Invoice> invoiceList = new ArrayList<>();

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
    
    public List<Invoice> getInvoiceList() {
        return invoiceList;
    }
    
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
