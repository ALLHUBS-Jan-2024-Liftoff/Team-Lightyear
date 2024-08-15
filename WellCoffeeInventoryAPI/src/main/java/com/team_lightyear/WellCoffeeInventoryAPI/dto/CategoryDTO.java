package com.team_lightyear.WellCoffeeInventoryAPI.dto;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by Deanne Chae
 */

public class CategoryDTO {
    private int id;
    private String name;
    private List<ItemDTO> items;
    private LocalDateTime dateCreated;

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

    public List<ItemDTO> getItems() {
        return items;
    }

    public void setItems(List<ItemDTO> items) {
        this.items = items;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }
}
