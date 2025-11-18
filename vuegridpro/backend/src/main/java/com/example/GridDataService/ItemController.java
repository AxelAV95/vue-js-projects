package com.example.GridDataService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@RestController
@RequestMapping("/api/data")
public class ItemController {

    private final List<Item> mockData;

    public ItemController() {
        this.mockData = IntStream.range(0, 100)
                .mapToObj(i -> new Item(
                        "Producto " + (i + 1),
                        (i % 3 == 0) ? "Electrónica" : (i % 3 == 1) ? "Ropa" : "Alimentos",
                        10.50 + i * 1.25,
                        i % 5 != 0
                ))
                .collect(Collectors.toCollection(ArrayList::new)); 
    }

    @GetMapping
    public PagedResponse<Item> getPagedItems(
            @RequestParam(name = "page", defaultValue = "1") int page,
            @RequestParam(name = "pageSize", defaultValue = "10") int pageSize,
            @RequestParam(name = "sortKey", required = false) String sortKey,
            @RequestParam(name = "sortDir", required = false) String sortDir,
            @RequestParam(name = "searchQuery", required = false) String searchQuery,
            @RequestParam(name = "categoryFilter", required = false) String categoryFilter,
            @RequestParam(name = "reportMode", defaultValue = "false") boolean reportMode // 🌟 NUEVO: Modo Reporte Global
            ) {
        
        List<Item> currentData = new ArrayList<>(mockData); 
        
        // 1. Filtrado por Categoría
        if (categoryFilter != null && !categoryFilter.isBlank()) {
            currentData = currentData.stream()
                    .filter(item -> categoryFilter.equalsIgnoreCase(item.getCategory()))
                    .collect(Collectors.toCollection(ArrayList::new));
        }
        
        // 2. Filtrado por Búsqueda
        if (searchQuery != null && !searchQuery.isBlank()) {
            String lowerCaseQuery = searchQuery.toLowerCase();
            currentData = currentData.stream()
                    .filter(item -> item.getName().toLowerCase().contains(lowerCaseQuery) ||
                                     item.getCategory().toLowerCase().contains(lowerCaseQuery))
                    .collect(Collectors.toCollection(ArrayList::new)); 
        }
        
        // --- LÓGICA DE REPORTE GLOBAL ---
        if (reportMode) {
            // Ignorar paginación y devolver todos los datos que coinciden con los filtros
            return new PagedResponse<>(
                currentData, 
                1, 
                currentData.size(), 
                (long) currentData.size() 
            );
        }

        // 3. Ordenamiento (Sorting)
        if (sortKey != null && sortDir != null) {
            Comparator<Item> comparator;

            if ("name".equals(sortKey)) {
                comparator = Comparator.comparing(Item::getName);
            } else if ("category".equals(sortKey)) {
                comparator = Comparator.comparing(Item::getCategory);
            } else if ("price".equals(sortKey)) {
                comparator = Comparator.comparingDouble(Item::getPrice);
            } else {
                comparator = Comparator.comparing(Item::getId); 
            }

            if ("desc".equalsIgnoreCase(sortDir)) {
                comparator = comparator.reversed();
            }

            currentData.sort(comparator);
        }

        // 4. Paginación
        int totalElements = currentData.size();
        int adjustedPage = page - 1; 

        int start = adjustedPage * pageSize;
        int end = Math.min(start + pageSize, totalElements);
        
        List<Item> pageData;
        if (start >= 0 && start < totalElements) {
            pageData = currentData.subList(start, end);
        } else {
            pageData = List.of();
        }

        // 5. Devolver la respuesta paginada normal
        return new PagedResponse<>(
                pageData, 
                page,
                pageSize, 
                totalElements 
        );
    }
}