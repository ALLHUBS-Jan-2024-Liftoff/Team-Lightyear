package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.services.AccountService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * Created by Dominique Gould
 */

@RestController
@RequestMapping("/api/manage")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/all")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @PostMapping("/new")
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAccountById(@PathVariable int id) {
        Optional<Account> account = accountService.getAccountById(id);
        if (account.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account with ID " + id + " not found");
        }
        return ResponseEntity.ok(account);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAccount(@PathVariable int id) {
        try {
            accountService.deleteAccount(id);
            return ResponseEntity.ok("Account with ID " + id + " deleted successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
