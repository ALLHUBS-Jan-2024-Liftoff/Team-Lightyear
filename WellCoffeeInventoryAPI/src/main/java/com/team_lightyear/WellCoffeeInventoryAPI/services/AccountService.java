package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.RegisterFormDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.AccountRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import static com.team_lightyear.WellCoffeeInventoryAPI.controllers.LoginController.accountSessionKey;

/**
 * Created by Dominique Gould
 */

@Service
public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    private static final String accountSessionKey = "account";

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Optional<Account> getAccountById(int id) {
        return accountRepository.findById(id);
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
        if (accountDetails.getRole() != null) {
            account.setRole(accountDetails.getRole());
        }

        return accountRepository.save(account);

    }

    public Account getAccountFromSession(HttpSession session) {
        Integer accountId = (Integer) session.getAttribute(accountSessionKey);
        if (accountId == null) {
            return null;
        }

        Optional<Account> account = accountRepository.findById(accountId);
        return account.orElse(null);
    }








}
