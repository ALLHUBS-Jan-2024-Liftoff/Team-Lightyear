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
@CrossOrigin(origins = "http://localhost:5173") // Allow cross-origin requests from the specified origin
public class LoginController {
    @Autowired
    AccountRepository accountRepository;

    private static final String accountSessionKey = "account";

    public Account getAccountFromSession(HttpSession session) {
        Integer accountId = (Integer) session.getAttribute(accountSessionKey);
        if (accountId == null) {
            return null; // Return null if no account ID is found
        }

        Optional<Account> account = accountRepository.findById(accountId);

        return account.orElse(null); // Return the account if found by ID, otherwise return null

    }

    private static void setAccountInSession(HttpSession session, Account account) {
        session.setAttribute(accountSessionKey, account.getId()); // Store the account ID in the session
    }

    // Endpoint = localhost:8080/api/login
    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> processLoginForm(@RequestBody LoginFormDTO loginFormDTO, HttpServletRequest request) {
        Map<String, String> responseBody = new HashMap<>(); // Response body to hold the response message
        Account theAccount = accountRepository.findByEmail(loginFormDTO.getEmail().toLowerCase()); // Find existing account by email
        String password = loginFormDTO.getPassword(); // Retrieve the existing user's password
        ResponseEntity<Map<String, String>> response = null;

        // Debugging log
        System.out.println("Attempting to log in with email: " + loginFormDTO.getEmail());

        // Check if the account exists
        if (theAccount == null) {
            responseBody.put("message", "Account with that email does not exist");
            response = ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(responseBody); // Return 400 Bad Request if account is not found

            // Check if the password matches
        } else if (!theAccount.isMatchingPassword(password)) {
            responseBody.put("message", "Password does not match");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody); // Return 400 Bad Request if password is incorrect
        } else {
            setAccountInSession(request.getSession(), theAccount); // Set the account in session
            responseBody.put("email", theAccount.getEmail());
            responseBody.put("accountRole", theAccount.getRole());
            responseBody.put("message", "Account successfully logged in.");
            response = ResponseEntity
                    .status(HttpStatus.OK)
                    .body(responseBody); // Return 200 OK with success message
        }
        return response;
        }

    // Endpoint = localhost:8080/api/register
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> processRegistrationForm(@RequestBody RegisterFormDTO registerFormDTO, HttpServletRequest request) {
        ResponseEntity<Map<String, String>> response = null;
        Map<String, String> responseBody = new HashMap<>();
        try {
            // Check if an account with the email exists
            Account existingAccount = accountRepository.findByEmail(registerFormDTO.getEmail());
            // If no existing account is found and both email and password are provided, create a new Account object with default role "Employee"
            if (existingAccount == null && !registerFormDTO.getEmail().isEmpty() && !registerFormDTO.getPassword().isEmpty()) {
                response = ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(responseBody);
                // New account role automatically set to "Employee". Must updateAccount to change"
                Account newAccount = new Account(registerFormDTO.getFirstName(), registerFormDTO.getLastName(), registerFormDTO.getEmail(), registerFormDTO.getPassword(), "Employee");
                setAccountInSession(request.getSession(), newAccount);
                // Save the new account to the repository
                accountRepository.save(newAccount);
                responseBody.put("message", "Account successfully registered");

                // If an account with the same email already exists
            } else if (existingAccount != null) {
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);
                responseBody.put("message", "User already exists.");

                // If the email field is empty in the registration form
            } else if (registerFormDTO.getEmail().isEmpty()) {
                responseBody.put("message", "Email required.");
                response = ResponseEntity
                        .status(HttpStatus.BAD_REQUEST)
                        .body(responseBody);

                // If the password field is empty in the registration form
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
        return "redirect:/login";
    }


}
