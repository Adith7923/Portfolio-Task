package com.example.Portfolio.controller;

import com.example.Portfolio.model.Project;
import com.example.Portfolio.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    // Get project by ID
    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    // Save a new project
    @PostMapping
    public Project saveProject(@RequestBody Project project) {
        return projectService.saveProject(project);
    }
}
