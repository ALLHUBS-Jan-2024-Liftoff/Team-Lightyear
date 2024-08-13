package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.AccountRepository;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Created by Dominique Gould
 */

@RestController
@RequestMapping("/api/")
public class LoginController {
    @Autowired
    AccountRepository accountRepository;

    private static final String userSessionKey = "account";

    public Account getAccountFromSession(HttpSession session) {
        Integer accountId = (Integer) session.getAttribute(accountSessionKey);
        if (accountId == null) {
            return null;
        }

        Optional<Account> account = accountRepository.findById(accountId);

        if (account.isEmpty()) {
            return null;
        }

        return account.get();
    }



}
