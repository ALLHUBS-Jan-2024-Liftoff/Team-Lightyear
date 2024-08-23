package com.team_lightyear.WellCoffeeInventoryAPI.GetDTO.mapper;

import com.team_lightyear.WellCoffeeInventoryAPI.GetDTO.dto.GetInvoiceDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import org.springframework.stereotype.Service;

import java.util.function.Function;

/**
 * Created by Trevor Gruber
 */
@Service
public class GetInvoiceDTOMapper implements Function<Invoice, GetInvoiceDTO> {
    
    @Override
    public GetInvoiceDTO apply(Invoice invoice) {
        return new GetInvoiceDTO(
                invoice.getId(),
                invoice.getItemsOrdered().stream().map(Item::getId).toList(),
                invoice.getOrderedItemList(),
                invoice.getInvoiceDate(),
                invoice.getVendor(),
                invoice.getInvoiceNumber(),
                invoice.getAccount()
        );
    }
}
