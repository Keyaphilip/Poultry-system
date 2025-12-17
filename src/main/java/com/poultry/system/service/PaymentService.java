package com.poultry.system.service;

import com.poultry.system.model.Order;
import com.poultry.system.model.Payment;
import com.poultry.system.repository.OrderRepository;
import com.poultry.system.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;

    @Autowired
    public PaymentService(PaymentRepository paymentRepository, OrderRepository orderRepository) {
        this.paymentRepository = paymentRepository;
        this.orderRepository = orderRepository;
    }

    @Transactional
    public Payment processPayment(Payment payment) {
        // Mock Payment Logic: Assume all payments succeed
        payment.setStatus(Payment.PaymentStatus.COMPLETED);

        // Update Order Status
        Order order = orderRepository.findById(payment.getOrder().getId())
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setStatus(Order.OrderStatus.CONFIRMED);
        orderRepository.save(order);

        return paymentRepository.save(payment);
    }
}
