package com.team_lightyear.WellCoffeeInventoryAPI.services;

import com.team_lightyear.WellCoffeeInventoryAPI.dto.CategoryDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.dto.ItemDTO;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Category;
import com.team_lightyear.WellCoffeeInventoryAPI.models.Item;
import com.team_lightyear.WellCoffeeInventoryAPI.repositories.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Deanne Chae
 */

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        category.setDateCreated(LocalDateTime.now());

        Category savedCategory = categoryRepository.save(category);
        return convertToCategoryDTO(savedCategory);
    }

    // Get all categories with their items
    public List<CategoryDTO> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        List<CategoryDTO> categoryDTOs = new ArrayList<>();

        for (Category category : categories) {
            CategoryDTO categoryDTO = convertToCategoryDTO(category);
            categoryDTOs.add(categoryDTO);
        }

        return categoryDTOs;
    }

    public CategoryDTO getCategoryById(int id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category with ID " + id + " not found"));
        return convertToCategoryDTO(category);
    }

    public CategoryDTO updateCategory(int id, CategoryDTO categoryDTO) {
        Category existingCategory = categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category with ID " + id + " not found"));

        existingCategory.setName(categoryDTO.getName());
        existingCategory.setDateCreated(LocalDateTime.now());

        Category updatedCategory = categoryRepository.save(existingCategory);
        return convertToCategoryDTO(updatedCategory);
    }

    public void deleteCategory(int id) {
        if(!categoryRepository.existsById(id)) {
            throw new EntityNotFoundException("Category with ID " + id + " not found");
        }
        categoryRepository.deleteById(id);
    }

    // Convert Category entity to CategoryDTO
    private CategoryDTO convertToCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        categoryDTO.setDateCreated(category.getDateCreated());


        // Convert each Item to ItemDTO and add to the list
        List<ItemDTO> itemDTOs = new ArrayList<>();
        for (Item item : category.getItems()) {
            ItemDTO itemDTO = convertToItemDTO(item);
            itemDTOs.add(itemDTO);
        }


        categoryDTO.setItems(itemDTOs);
        return categoryDTO;
    }

    // Convert CategoryDTO to Category entity
    private Category convertToCategoryEntity(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setId(categoryDTO.getId());
        category.setName(categoryDTO.getName());
        // You can add more logic here if necessary
        return category;
    }

    // Convert Item entity to ItemDTO
    private ItemDTO convertToItemDTO(Item item) {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setId(item.getId());
        itemDTO.setName(item.getName());
        itemDTO.setQuantity(item.getQuantity());
        itemDTO.setPrice(item.getPrice());
        itemDTO.setLocation(item.getLocation());
        itemDTO.setDescription(item.getDescription());
        itemDTO.setComment(item.getComment());
        itemDTO.setCategoryId(item.getCategory().getId());
        return itemDTO;
    }
}
