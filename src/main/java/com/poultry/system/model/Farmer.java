package com.poultry.system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "farmers")
public class Farmer extends User {

    private String farmName;
    private String location;
    private boolean isVerified;

    @ElementCollection
    private java.util.List<String> verificationDocs;

    private Double latitude;
    private Double longitude;

    public Farmer() {
    }

    public Farmer(String username, String password, String email, String farmName, String location) {
        super(username, password, email, "FARMER");
        this.farmName = farmName;
        this.location = location;
        this.isVerified = false; // Default to false
    }

    public String getFarmName() {
        return farmName;
    }

    public void setFarmName(String farmName) {
        this.farmName = farmName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public boolean isVerified() {
        return isVerified;
    }

    public void setVerified(boolean verified) {
        isVerified = verified;
    }

    public java.util.List<String> getVerificationDocs() {
        return verificationDocs;
    }

    public void setVerificationDocs(java.util.List<String> verificationDocs) {
        this.verificationDocs = verificationDocs;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
}
