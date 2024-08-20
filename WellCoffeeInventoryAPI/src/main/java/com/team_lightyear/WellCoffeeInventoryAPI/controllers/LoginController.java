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
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
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

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {
        Map<String, String> responseBody = new HashMap<>();
        Account theAccount = accountRepository.findByEmail(loginFormDTO.getEmail().toLowerCase());
        String password = loginFormDTO.getPassword();
        ResponseEntity<Map<String,String>> response = null;

        System.out.println("Attempting to log in with email: " + loginFormDTO.getEmail());
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
            responseBody.put("email", theAccount.getEmail());
            responseBody.put("accountRole", theAccount.getRole());
            responseBody.put("message", "Account successfully logged in.");
            response = ResponseEntity
                    .status(HttpStatus.OK)
                    .body(responseBody);
        }
        return response;
        }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO, HttpServletRequest request) {
        ResponseEntity<Map<String, String>> response = null;
        Map<String, String> responseBody = new HashMap<>();
        try {
            Account existingAccount = accountRepository.findByEmail(registerFormDTO.getEmail());
            if (existingAccount == null && !registerFormDTO.getEmail().isEmpty() && !registerFormDTO.getPassword().isEmpty()) {
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(responseBody);
                Account newAccount = new Account(registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPassword(), "Employee");
                setAccountInSession(request.getSession(), newAccount);
                accountRepository.save(newAccount);
                responseBody.put("message", "Account successfully registered");
            } else if (existingAccount != null) {
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
                responseBody.put("message", "User already exists.");
            } else if (registerFormDTO.getEmail().isEmpty()) {
                responseBody.put("message", "Email required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
            } else if (registerFormDTO.getPassword().isEmpty()) {
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
                responseBody.put("message", "Password is required.");
            }
        } catch (Exception ex) {
            response = ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(responseBody);
            responseBody.put("message", "An exception occurred due to " + ex.getMessage());
        }
        return response;
    }



    @GetMapping("/logout")
    public String logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return "redirect:/api";
    }

}
