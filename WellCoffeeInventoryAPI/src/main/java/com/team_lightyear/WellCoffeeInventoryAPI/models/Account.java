package com.team_lightyear.WellCoffeeInventoryAPI.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//<<<<<<< HEAD
import java.util.Collection;
//=======
import java.util.HashSet;
//>>>>>>> origin/main
import java.util.Objects;

/**
 * Created by Dominique Gould
 */
@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

//    @Size(min=1, message="First name must be at least 1 characters long")
    private String firstName;

//    @Size(min=1, message="Last name must be at least 1 characters long")
    private String lastName;

//    @NotBlank(message = "Email is required")
//    @Email(message = "Invalid email. Please try again")
    private String email;

//    @NotBlank( message = "Password is required")
//    @Size(min = 5, max = 25, message = "Password must be a minimum of 5 and maximum of 25 letters")
    private String password;

    private String role;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    // Awaiting confirmation from Trevor
    // Note from Trevor- Changed field to be a HashSet since it needs to store multiple invoices
    // and used HasHSet rather than List because each invoice should be unique. (Invoices can
    // have identical items on order, but invoice id and invoice number should be unique)
//    @OneToMany
//    @JoinColumn(name = "account_id")
//    private final HashSet<Invoice> invoices = new HashSet<>();

    public Account() {
    }


    // No Arg Constructor for JPA


    // Constructor
    public Account(String firstName, String lastName, String email, String pwHash, String role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = encoder.encode(pwHash);
        this.role = role;
    }

    public boolean isMatchingPassword(String pwHash) {
        return encoder.matches(pwHash, password);
    }

    // Getters and Setters - No Setter for ID
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return null;
//    }

    public String getPassword() {
        return password;
    }

//    @Override
    public String getUsername() {
        return null;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    // Equals and HashCode method - id and email
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

    // toString method


    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
