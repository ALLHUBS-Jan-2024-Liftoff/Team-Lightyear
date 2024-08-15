package com.team_lightyear.WellCoffeeInventoryAPI.dto;

import java.util.ArrayList;

public class ItemDTO {
    private int id;
    private String name;
    private Integer quantity;
    private Double price;
    private String location;
    private String description;
    private Integer categoryId;
    private String comment;
//    private ArrayList<String> comment;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(double price) {
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

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
//    public ArrayList<String> getComment() {
//        return comment;
//    }
//
//    public void setComment(ArrayList<String> comment) {
//        this.comment = comment;
//    }
}
