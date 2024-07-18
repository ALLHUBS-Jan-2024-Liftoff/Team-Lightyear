package com.team_lightyear.WellCoffeeInventoryAPI.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

/**
 * Created by Dominique Gould
 */
@Entity
public class Account {
    @Id
    @GeneratedValue
    private int id;

    @Size(min=1, message="Name must be at least 1 characters long")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email. Please try again")
    private String email;

    @NotBlank( message = "Password is required")
    @Size(min = 5, max = 25, message = "Password must be a minimum of 5 and maximum of 25 letters")
    private String password;

    private Boolean manager;

    // Awaiting confirmation from Trevor
//    @OneToMany
//    @JoinColumn(name = "Account_id")
//    private Invoice invoice;

    public Account(int id, String name, String email, String password, Boolean manager) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.manager = manager;
    }

    // No Setter for ID
    public int getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getManager() {
        return manager;
    }

    public void setManager(Boolean manager) {
        this.manager = manager;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return id == account.id && Objects.equals(email, account.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email);
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", manager=" + manager +
                '}';
    }
}
