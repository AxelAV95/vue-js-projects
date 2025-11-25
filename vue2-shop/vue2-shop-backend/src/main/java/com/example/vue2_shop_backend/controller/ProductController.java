package com.example.vue2_shop_backend.controller;


import com.example.vue2_shop_backend.dto.ProductPageDTO;
import com.example.vue2_shop_backend.model.Product;
import com.example.vue2_shop_backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:9000") 
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public ProductPageDTO list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return new ProductPageDTO(
                repository.findAll(page, size),
                repository.count()
        );
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product not found"));
    }

    @PostMapping
    public Product create(@RequestBody Product product) {
        product.setId(null);
        return repository.save(product);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product product) {
        Product existing = repository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product not found"));
        existing.setName(product.getName());
        existing.setPrice(product.getPrice());
        existing.setStock(product.getStock());
        existing.setCategory(product.getCategory());
        return repository.save(existing);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
