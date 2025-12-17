package com.poultry.system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "customers")
public class Customer extends User {

    private String address;

    public Customer() {
    }

    public Customer(String username, String password, String email, String address) {
        super(username, password, email, "CUSTOMER");
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
