package com.poultry.system.service;

import com.poultry.system.model.Order;
import com.poultry.system.model.Product;
import com.poultry.system.repository.OrderRepository;
import com.poultry.system.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    @Transactional
    public Order placeOrder(Order order) {
        Product product = productRepository.findById(order.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (product.getQuantity() < order.getQuantity()) {
            throw new RuntimeException("Insufficient stock");
        }

        // Decrement stock
        product.setQuantity(product.getQuantity() - order.getQuantity());
        productRepository.save(product);

        order.setProduct(product); // Ensure managed entity is set
        order.setStatus(Order.OrderStatus.PENDING);
        return orderRepository.save(order);
    }

    public List<Order> getOrdersByCustomer(Long customerId) {
        return orderRepository.findByCustomerId(customerId);
    }

    public List<Order> getOrdersByFarmer(Long farmerId) {
        return orderRepository.findByProductFarmerId(farmerId);
    }
}
