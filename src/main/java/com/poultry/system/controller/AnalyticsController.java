package com.poultry.system.controller;

import com.poultry.system.model.Order;
import com.poultry.system.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final OrderRepository orderRepository;

    @Autowired
    public AnalyticsController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/farmer/{farmerId}")
    public ResponseEntity<Map<String, Object>> getFarmerAnalytics(@PathVariable Long farmerId) {
        List<Order> orders = orderRepository.findByProductFarmerId(farmerId);

        int totalOrders = orders.size();
        BigDecimal totalRevenue = orders.stream()
                .map(order -> order.getProduct().getPrice().multiply(BigDecimal.valueOf(order.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Map<String, Object> stats = new HashMap<>();
        stats.put("totalOrders", totalOrders);
        stats.put("totalRevenue", totalRevenue);
        stats.put("farmerId", farmerId);

        return ResponseEntity.ok(stats);
    }
}
