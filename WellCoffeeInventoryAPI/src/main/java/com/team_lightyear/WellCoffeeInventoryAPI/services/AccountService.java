package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.RegisterFormDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.AccountRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

/**
 * Created by Dominique Gould
 */

@Service
public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Optional<Account> getAccountById(int id) {
        return accountRepository.findById(id);
    }

    public void deleteAccount(int id) {
        if(!accountRepository.existsById(id)) {
            throw new EntityNotFoundException("Account with ID " + id + " not found");
        }
        accountRepository.deleteById(id);
    }


    public Account updateAccount(int id, RegisterFormDTO accountDetails) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account with ID " + id + " not found"));

        if (accountDetails.getFirstName() != null) {
            account.setFirstName(accountDetails.getFirstName());
        }
        if (accountDetails.getLastName() != null) {
            account.setLastName(accountDetails.getLastName());
        }
        if (accountDetails.getEmail() != null) {
            account.setEmail(accountDetails.getEmail());
        }
        if (accountDetails.getPassword() != null) {
            account.setPassword(accountDetails.getPassword());
        }
        if (accountDetails.getRole() != null) {
            account.setRole(accountDetails.getRole());
        }

        return accountRepository.save(account);

    }

}
