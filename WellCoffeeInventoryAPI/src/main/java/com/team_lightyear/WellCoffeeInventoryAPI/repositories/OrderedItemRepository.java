package com.team_lightyear.WellCoffeeInventoryAPI.repositories;

import com.team_lightyear.WellCoffeeInventoryAPI.models.OrderedItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Trevor Gruber
 */

@Repository
public interface OrderedItemRepository extends JpaRepository<OrderedItem, Integer> {
}
