package com.example.Portfolio.services;

import com.example.Portfolio.model.Project;
import com.example.Portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Project getProjectById(Long id) {
        Optional<Project> project = projectRepository.findById(id);
        return project.orElseThrow(() -> new RuntimeException("Project not found"));
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }
}
