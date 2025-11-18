package com.example.GridDataService;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Data
@NoArgsConstructor
public class Item {
    private String id;
    private String name;
    private String category;
    private double price;
    private boolean isActive;

    public Item(String name, String category, double price, boolean isActive) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.category = category;
        this.price = price;
        this.isActive = isActive;
    }
}