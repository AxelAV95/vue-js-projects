package com.example.GridDataService;

import lombok.Data;
import java.util.List;

@Data
public class PagedResponse<T> {
    private List<T> data;
    private int page;
    private int pageSize;
    private long totalElements;
    private int totalPages;

    public PagedResponse(List<T> data, int page, int pageSize, long totalElements) {
        this.data = data;
        this.page = page;
        this.pageSize = pageSize;
        this.totalElements = totalElements;
        this.totalPages = (int) Math.ceil((double) totalElements / pageSize);
    }
}