package com.team_lightyear.WellCoffeeInventoryAPI.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Trevor Gruber
 */

@Entity
public class Invoice {
    
    /* fields */
    @Id
    @GeneratedValue
    private long id;
    
//    @ManyToMany
    private List<Item> itemList = new ArrayList<>();
    
    private Date invoiceDate;
    
    private String vendor;
    
    private String invoiceNumber;
    
    
    
    /* Constructor(s) */
    
    /* Custom methods */
    
    /* Getters and Setters */
    
    /* toString */
    
    /* Equals and Hashcode*/
    
}
