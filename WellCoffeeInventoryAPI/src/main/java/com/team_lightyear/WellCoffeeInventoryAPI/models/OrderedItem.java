package com.team_lightyear.WellCoffeeInventoryAPI.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Objects;

/**
 * Created by Trevor Gruber
 */

@Entity
//Tells hibernate how to identify objects
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class OrderedItem {
    
    /* fields */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    //FetchMode.SELECT uses the JSON Identity information (annotated above the class) to stop retrieving objects in a
    // recursive manner. If the object has already been retrieved once, it just passes a
    // reference (the id) into the JSON file and doesn't retrieve the whole object
    @ManyToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "item_id")
    //Stores a reference to the ordered item
    private Item itemId;
    
//    @ManyToOne (cascade = CascadeType.ALL)
//    @JoinColumn (name = "invoice_id")
//    @JsonIgnore
//    //Stores a reference to which invoice it was ordered on
//    private Invoice orderedOnInvoice;
    
    //Stores the cost of the item in this invoice
    private Double itemCost;
    
    //Stores the ordered quantity in this invoice
    private Integer quantityOrdered;
    
    /* Constructor(s) */
    
    public OrderedItem() {
    }
    
    public OrderedItem(Item itemId, Double itemCost, Integer quantityOrdered) {
        this.itemId = itemId;
//        this.orderedOnInvoice = orderedOnInvoice;
        this.itemCost = itemCost;
        this.quantityOrdered = quantityOrdered;
    }
    
    /* Custom methods */
    
    /* Getters and Setters */
    
    public int getId() {
        return id;
    }
    
    public Item getItem() {
        return itemId;
    }
    
    public void setItem(Item item) {
        this.itemId = item;
    }
    
    public Double getItemCost() {
        return itemCost;
    }
    
    public void setItemCost(Double itemCost) {
        this.itemCost = itemCost;
    }
    
    public Integer getQuantityOrdered() {
        return quantityOrdered;
    }
    
    public void setQuantityOrdered(Integer quantityOrdered) {
        this.quantityOrdered = quantityOrdered;
    }
    
//    public Invoice getInvoice() {
//        return orderedOnInvoice;
//    }
//
//    public void setInvoice(Invoice invoice) {
//        this.orderedOnInvoice = invoice;
//    }
    
    /* toString */
    
    @Override
    public String toString() {
        return "OrderedItem{" +
                "id=" + id +
                ", item=" + itemId +
//                ", orderedOnInvoice=" + orderedOnInvoice +
                ", itemCost=" + itemCost +
                ", quantityOrdered=" + quantityOrdered +
                '}';
    }
    
    /* Equals and Hashcode*/
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderedItem that = (OrderedItem) o;
        return id == that.id;
    }
    
    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}