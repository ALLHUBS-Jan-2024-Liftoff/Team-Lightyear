package com.team_lightyear.WellCoffeeInventoryAPI.repositories;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Deanne Chae
 */

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String name, String description);
}
