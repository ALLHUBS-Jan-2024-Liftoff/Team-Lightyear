package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.services.AccountService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "http://localhost:5173")
public class CurrentAccountController {

    @Autowired
    private AccountService accountService;


    @GetMapping("")
    public ResponseEntity<?> getCurrentAccount(HttpServletRequest request) {
        Account account = getAccountFromSession(request.getSession());
        if (account == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No account found in the session");
        }
        return ResponseEntity.ok(account);
    }

}
