package com.example.vue2_shop_backend.repository;


import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.example.vue2_shop_backend.model.Product;
@Component
public class ProductRepository {
    private final Map<Long, Product> data = new HashMap<>();
    private final AtomicLong sequence = new AtomicLong(0);

    public ProductRepository() {
        save(new Product(null, "Laptop Vue", 1200.0, 5, "Electronics"));
        save(new Product(null, "Mouse Reactive", 25.0, 20, "Accessories"));
        save(new Product(null, "Keyboard Spring", 60.0, 15, "Accessories"));
    }

    public List<Product> findAll(int page, int size) {
        return data.values().stream()
                .sorted(Comparator.comparing(Product::getId))
                .skip((long) page * size)
                .limit(size)
                .collect(Collectors.toList());
    }

    public long count() {
        return data.size();
    }

    public Optional<Product> findById(Long id) {
        return Optional.ofNullable(data.get(id));
    }

    public Product save(Product product) {
        if (product.getId() == null) {
            product.setId(sequence.incrementAndGet());
        }
        data.put(product.getId(), product);
        return product;
    }

    public void deleteById(Long id) {
        data.remove(id);
    }
}
