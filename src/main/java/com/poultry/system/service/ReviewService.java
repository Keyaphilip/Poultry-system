package com.poultry.system.service;

import com.poultry.system.model.Review;
import com.poultry.system.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getReviewsByFarmer(Long farmerId) {
        return reviewRepository.findByFarmerId(farmerId);
    }

    public double getAverageRating(Long farmerId) {
        List<Review> reviews = reviewRepository.findByFarmerId(farmerId);
        if (reviews.isEmpty()) {
            return 0.0;
        }
        return reviews.stream()
                .mapToInt(Review::getRating)
                .average()
                .orElse(0.0);
    }
}
