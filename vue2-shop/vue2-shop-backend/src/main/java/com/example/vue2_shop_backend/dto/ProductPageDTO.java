package com.example.vue2_shop_backend.dto;
import com.example.vue2_shop_backend.model.Product;

import java.util.List;
public class ProductPageDTO  {
    private List<Product> content;
    private long totalElements;

    public ProductPageDTO(List<Product> content, long totalElements) {
        this.content = content;
        this.totalElements = totalElements;
    }

    public List<Product> getContent() { return content; }
    public long getTotalElements() { return totalElements; }
}
