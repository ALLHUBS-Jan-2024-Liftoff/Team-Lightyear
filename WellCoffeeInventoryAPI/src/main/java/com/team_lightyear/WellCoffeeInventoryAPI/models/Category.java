package com.team_lightyear.WellCoffeeInventoryAPI.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Created by Deanne Chae
 */

@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 50, message = "Must be between 3 and 50 characters")
    private String name;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL) // This makes sure operations like saving or deleting a category will also affect associated items
    private final List<Item> items = new ArrayList<>();

    private LocalDateTime dateCreated;

    // Constructors
    public Category() {
    }

    public Category(String name) {
        this.name = name;
        this.dateCreated = LocalDateTime.now();
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Item> getItems() {
        return items;
    }
    public void addItem(Item item) {
        items.add(item);
    }

    // toString() method
    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dateCreated=" + dateCreated +
                '}';
    }

    // equals() method
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return id == category.id;
    }

    // hashCode() method
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
