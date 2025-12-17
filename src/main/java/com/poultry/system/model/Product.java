package com.poultry.system.model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private BigDecimal price;
    private Integer quantity;
    private java.time.LocalDate harvestDate;
    private String category; // e.g., "Vegetable", "Fruit", "Poultry"
    private boolean isOrganic;

    @ElementCollection
    private java.util.List<String> imageUrls;

    @ManyToOne
    @JoinColumn(name = "farmer_id")
    private Farmer farmer;

    public Product() {
    }

    public Product(String name, String description, BigDecimal price, Integer quantity, Farmer farmer,
            java.time.LocalDate harvestDate, String category, boolean isOrganic, java.util.List<String> imageUrls) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.farmer = farmer;
        this.harvestDate = harvestDate;
        this.category = category;
        this.isOrganic = isOrganic;
        this.imageUrls = imageUrls;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Farmer getFarmer() {
        return farmer;
    }

    public void setFarmer(Farmer farmer) {
        this.farmer = farmer;
    }

    public java.time.LocalDate getHarvestDate() {
        return harvestDate;
    }

    public void setHarvestDate(java.time.LocalDate harvestDate) {
        this.harvestDate = harvestDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isOrganic() {
        return isOrganic;
    }

    public void setOrganic(boolean organic) {
        isOrganic = organic;
    }

    public java.util.List<String> getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(java.util.List<String> imageUrls) {
        this.imageUrls = imageUrls;
    }
}
