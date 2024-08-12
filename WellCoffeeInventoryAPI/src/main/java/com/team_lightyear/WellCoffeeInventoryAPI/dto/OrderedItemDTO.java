package com.team_lightyear.WellCoffeeInventoryAPI.dto;

import java.util.Objects;

/**
 * Created by Trevor Gruber
 */

public class OrderedItemDTO {
    
    /* fields */
    private int itemId;
    
    private int quantityOrdered;
    
    private Double itemCost;
    
    /* Constructor(s) */
    
    public OrderedItemDTO() {
    }
    
    public OrderedItemDTO(int itemId, int quantityOrdered, Double itemCost) {
        this.itemId = itemId;
        this.quantityOrdered = quantityOrdered;
        this.itemCost = itemCost;
    }
    
    /* Custom methods */
    
    /* Getters and Setters */
    
    public int getItemId() {
        return itemId;
    }
    
    public void setItemId(int itemId) {
        this.itemId = itemId;
    }
    
    public int getQuantityOrdered() {
        return quantityOrdered;
    }
    
    public void setQuantityOrdered(int quantityOrdered) {
        this.quantityOrdered = quantityOrdered;
    }
    
    public Double getItemCost() {
        return itemCost;
    }
    
    public void setItemCost(Double itemCost) {
        this.itemCost = itemCost;
    }
    
    /* toString */
    
    @Override
    public String toString() {
        return "OrderedItemDTO{" +
                "itemId=" + itemId +
                ", quantityOrdered=" + quantityOrdered +
                ", itemCost=" + itemCost +
                '}';
    }
    
    /* Equals and Hashcode*/
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrderedItemDTO that = (OrderedItemDTO) o;
        return itemId == that.itemId && quantityOrdered == that.quantityOrdered;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(itemId, quantityOrdered);
    }
}
