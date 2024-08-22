package com.team_lightyear.WellCoffeeInventoryAPI.services;

import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class JavaSessionAuthApplication {
    public static void main(String[] args) {
        // Launches the Spring Boot application
        SpringApplication.run(JavaSessionAuthApplication.class, args);
    }

    // CORS (Cross-Origin Resource Sharing)
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        // Allows requests from any path within the application
                        .addMapping("/**")
                        // Specifies which origins are permitted
                        .allowedOrigins("http://localhost:5173")
                        // Specifies which HTTP methods are allowed for CORS requests
                        .allowedMethods("GET","POST", "DELETE", "PATCH")
                        // Allows credentials to be included in CORS requests
                        .allowCredentials(true);
            }
        };
    }
}
