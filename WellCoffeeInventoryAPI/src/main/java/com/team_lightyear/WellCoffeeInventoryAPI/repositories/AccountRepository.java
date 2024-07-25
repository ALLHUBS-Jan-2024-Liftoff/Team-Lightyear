package com.team_lightyear.WellCoffeeInventoryAPI.repositories;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Dominique Gould
 */
@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

}
