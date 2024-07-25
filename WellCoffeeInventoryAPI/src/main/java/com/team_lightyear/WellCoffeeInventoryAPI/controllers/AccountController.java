package com.team_lightyear.WellCoffeeInventoryAPI.controllers;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Account;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.AccountRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Dominique Gould
 */


@Controller
public class AccountController {
    @Autowired
    private AccountRepository accountRepository;

    @RequestMapping("/")
    public String getAllAccounts(Model model) {
        model.addAttribute("Accounts");
        return "redirect:/";
    }

//    @PostMapping("create")
//    public String processCreateAccountForm(@ModelAttribute @Valid Account newAccount, Errors errors, Model model) {
//        if (errors.hasErrors()) {
//            model.addAttribute("title", "Create Account");
//            return "/create";
//
//        }
//        accountRepository.save(newAccount);
//        return "/account";
//    }


}
