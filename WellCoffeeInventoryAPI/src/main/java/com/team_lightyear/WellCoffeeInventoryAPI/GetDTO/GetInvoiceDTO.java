package com.team_lightyear.WellCoffeeInventoryAPI.GetDTO;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import com.team_lightyear.WellCoffeeInventoryAPI.models.OrderedItem;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

/**
 * Created by Trevor Gruber
 */

public record GetInvoiceDTO(int id, Set<Item> itemsOrdered,
                            List<OrderedItem> orderedItems, LocalDate invoiceDate,
                            String vendor,
                            String invoiceNumber) {
}
