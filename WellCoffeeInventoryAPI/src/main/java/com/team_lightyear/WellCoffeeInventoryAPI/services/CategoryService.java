package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.models.Category;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Created by Deanne Chae
 */

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(Category category) {
        category.setDateCreated(LocalDateTime.now());
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Optional<Category> getCategoryById(int id) {
        return categoryRepository.findById(id);
    }

    public Category updateCategory(int id, Category category) {
        Optional<Category> optionalCategory = categoryRepository.findById(id);
        if (optionalCategory.isPresent()) {
            Category existingCategory = optionalCategory.get();

            existingCategory.setName(category.getName());

            return categoryRepository.save(existingCategory);
        }
        return null;
    }

    public void deleteCategory(int id) {
        if(!categoryRepository.existsById(id)) {
            throw new EntityNotFoundException("Category with ID " + id + " not found");
        }
        categoryRepository.deleteById(id);
    }
}
