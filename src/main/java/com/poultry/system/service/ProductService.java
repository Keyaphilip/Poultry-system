package com.poultry.system.service;

import com.poultry.system.model.Product;
import com.poultry.system.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByFarmer(Long farmerId) {
        return productRepository.findByFarmerId(farmerId);
    }

    public List<Product> searchProducts(String category, java.math.BigDecimal maxPrice, String location) {
        return productRepository
                .findByCategoryContainingIgnoreCaseAndPriceLessThanEqualAndFarmerLocationContainingIgnoreCase(
                        category, maxPrice, location);
    }

    public List<Product> getVerifiedProducts() {
        return productRepository.findByFarmerIsVerifiedTrue();
    }
}
