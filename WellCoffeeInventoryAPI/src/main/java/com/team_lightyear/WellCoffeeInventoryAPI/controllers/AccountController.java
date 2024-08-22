package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.services.AccountService;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.RegisterFormDTO;
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

    // Endpoint = localhost:8080/api/manage/all
    @GetMapping("/all")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    // Endpoint = localhost:8080/api/manage/new
    @PostMapping("/new")
    public Account createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    // Endpoint = localhost:8080/api/manage/{id}
    @GetMapping("/{id}")
    public ResponseEntity<?> getAccountById(@PathVariable int id) {
        Optional<Account> account = accountService.getAccountById(id);
        // Check if the account exists
        if (account.isEmpty()) {
            // If not found, return HTTP 404 (Not Found) with a message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account with ID " + id + " not found");
        }
        // If found, return the account with HTTP 200 (OK)
        return ResponseEntity.ok(account);
    }

    // Endpoint = localhost:8080/api/manage/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAccount(@PathVariable int id) {
        try {
            accountService.deleteAccount(id);
            // Return success message with HTTP 200 (OK)
            return ResponseEntity.ok("Account with ID " + id + " deleted successfully");
        } catch (EntityNotFoundException e) {
            // If account not found, return HTTP 404 (Not Found) with an error message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    // Endpoint = localhost:8080/api/manage/{id}
    @PatchMapping("/{id}")
    public ResponseEntity<?> updateAccount(@PathVariable int id, @RequestBody RegisterFormDTO accountDetails) {
        try {
            Account updatedAccount = accountService.updateAccount(id, accountDetails);
            // Return the updated account with HTTP 200 (OK)
            return ResponseEntity.ok(updatedAccount);
        } catch (EntityNotFoundException e) {
            // If account not found, return HTTP 404 (Not Found) with an error message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
