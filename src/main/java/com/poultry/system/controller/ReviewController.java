package com.poultry.system.controller;

import com.poultry.system.model.Review;
import com.poultry.system.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<Review> addReview(@RequestBody Review review) {
        Review savedReview = reviewService.addReview(review);
        return ResponseEntity.ok(savedReview);
    }

    @GetMapping("/farmer/{farmerId}")
    public List<Review> getReviewsByFarmer(@PathVariable Long farmerId) {
        return reviewService.getReviewsByFarmer(farmerId);
    }

    @GetMapping("/farmer/{farmerId}/average")
    public ResponseEntity<Double> getAverageRating(@PathVariable Long farmerId) {
        return ResponseEntity.ok(reviewService.getAverageRating(farmerId));
    }
}
