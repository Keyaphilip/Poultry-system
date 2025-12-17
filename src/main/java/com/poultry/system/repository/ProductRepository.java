package com.poultry.system.repository;

import com.poultry.system.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByFarmerId(Long farmerId);

    // Simple search method
    List<Product> findByCategoryContainingIgnoreCaseAndPriceLessThanEqualAndFarmerLocationContainingIgnoreCase(
            String category, java.math.BigDecimal maxPrice, String location);

    // Advanced search: Verified farmers only
    List<Product> findByFarmerIsVerifiedTrue();
}
