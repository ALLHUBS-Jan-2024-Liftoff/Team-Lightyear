package com.team_lightyear.WellCoffeeInventoryAPI.repositories;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Trevor Gruber
 */

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {
    List<Invoice> findByAccount(Account account);
}
