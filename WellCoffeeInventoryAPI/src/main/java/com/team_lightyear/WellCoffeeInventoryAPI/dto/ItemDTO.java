package com.team_lightyear.WellCoffeeInventoryAPI.dto;

import java.util.ArrayList;

public class ItemDTO {
    private int id;
    private String name;
    private Integer quantity;
    private Integer minQuantity;
    private Double price;
    private String location;
    private String description;
    private Integer categoryId;
<<<<<<< HEAD
    private String comment;

    private String amazonProductId;
    private String image;
>>>>>>> origin

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
<<<<<<< HEAD

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
=======
    
    public Integer getMinQuantity() {
        return minQuantity;
    }
    
    public void setMinQuantity(Integer minQuantity) {
        this.minQuantity = minQuantity;
    }
    
    public String getAmazonProductId() {
        return amazonProductId;
    }
    
    public void setAmazonProductId(String amazonProductId) {
        this.amazonProductId = amazonProductId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
>>>>>>> origin
}
