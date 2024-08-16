package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.LoginFormDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.RegisterFormDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.AccountRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Created by Dominique Gould
 */

@RestController
@RequestMapping("/")
public class LoginController {
    @Autowired
    AccountRepository accountRepository;

    private static final String accountSessionKey = "account";

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

    private static void setAccountInSession(HttpSession session, Account account) {
        session.setAttribute(accountSessionKey, account.getId());
    }

    @PostMapping
    public ResponseEntity<Map> processLoginform(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        Account theAccount = accountRepository.findByEmail(loginFormDTO.getEmail());
        String password = loginFormDTO.getPassword();
        if (theAccount == null) {
        responseBody.put("message", "Account with that email does not exist");
        response = ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(responseBody);
        } else if (!theAccount.isMatchingPassword(password)) {
            responseBody.put("message", "Password does not match");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        } else {
            setAccountInSession(request.getSession(), theAccount);
            responseBody.put("message", "Account successfully logged in.");
            responseBody.put("email", theAccount.getEmail());
            responseBody.put("accountRole", theAccount.getRole());
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(responseBody);
        }
        return response;
    }

    @PostMapping("/register")
    public ResponseEntity<Map> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO, HttpServletRequest request) {
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        try {
            Account existingAccount = accountRepository.findByEmail(registerFormDTO.getEmail());
            if (existingAccount == null && !registerFormDTO.getEmail().isEmpty() && !registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Account successfully registered");
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(responseBody);
                Account newAccount = new Account(registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPassword(), "Employee");
                setAccountInSession(request.getSession(), newAccount);
                accountRepository.save(newAccount);
            } else if (existingAccount != null) {
                responseBody.put("message", "User already exists.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getEmail().isEmpty()) {
                responseBody.put("message", "Email required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                responseBody.put("message", "Password is required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            }
        } catch (Exception ex) {
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(responseBody);
        }
        return response;
    }



    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:/api";
    }

}
