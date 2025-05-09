package com.premier_league.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    @NotBlank(message = "Name cannot be empty.")
    private String name;

    @Column(name = "jersey_number", nullable = false)
    @NotNull(message = "Jersey number is required.")
    @Min(value = 1, message = "Jersey number must be 1 or greater.")
    private Integer jerseyNumber = 0;

    @Column(name = "team", nullable = false)
    @NotBlank(message = "Team cannot be empty.")
    private String team;

    @Column(name = "position", nullable = false)
    @NotBlank(message = "Position cannot be empty.")
    private String position;

    @Column(name = "nationality", nullable = false)
    @NotBlank(message = "Nationality cannot be empty.")
    private String nationality;

    @Column(name = "age", nullable = false)
    @NotNull(message = "Age is required.")
    @Min(value = 0, message = "Age cannot be negative.")
    private Integer age = 0;

    @Column(name = "wins", nullable = false)
    @NotNull(message = "Wins are required.")
    @Min(value = 0, message = "Wins cannot be negative.")
    private Integer wins = 0;

    @Column(name = "losses", nullable = false)
    @NotNull(message = "Losses are required.")
    @Min(value = 0, message = "Losses cannot be negative.")
    private Integer losses = 0;

    @Column(name = "goals", nullable = false)
    @NotNull(message = "Goals are required.")
    @Min(value = 0, message = "Goals cannot be negative.")
    private Integer goals = 0;

    @Column(name = "shots", nullable = false)
    @NotNull(message = "Shots are required.")
    @Min(value = 0, message = "Shots cannot be negative.")
    private Integer shots = 0;

    @Column(name = "shots_on_target", nullable = false)
    @NotNull(message = "Shots on target are required.")
    @Min(value = 0, message = "Shots on target cannot be negative.")
    private Integer shotsOnTarget = 0;

    @Column(name = "clean_sheets", nullable = false)
    @NotNull(message = "Clean sheets are required.")
    @Min(value = 0, message = "Clean sheets cannot be negative.")
    private Integer cleanSheets = 0;

    @Column(name = "assists", nullable = false)
    @NotNull(message = "Assists are required.")
    @Min(value = 0, message = "Assists cannot be negative.")
    private Integer assists = 0;

    @Column(name = "passes", nullable = false)
    @NotNull(message = "Passes are required.")
    @Min(value = 0, message = "Passes cannot be negative.")
    private Integer passes = 0;

    @Column(name = "saves", nullable = false)
    @NotNull(message = "Saves are required.")
    @Min(value = 0, message = "Saves cannot be negative.")
    private Integer saves = 0;

    @Column(name = "yellow_cards", nullable = false)
    @NotNull(message = "Yellow cards are required.")
    @Min(value = 0, message = "Yellow cards cannot be negative.")
    private Integer yellowCards = 0;

    @Column(name = "red_cards", nullable = false)
    @NotNull(message = "Red cards are required.")
    @Min(value = 0, message = "Red cards cannot be negative.")
    private Integer redCards = 0;

    @Column(name = "fouls", nullable = false)
    @NotNull(message = "Fouls are required.")
    @Min(value = 0, message = "Fouls cannot be negative.")
    private Integer fouls = 0;

    @Column(name = "offsides", nullable = false)
    @NotNull(message = "Offsides are required.")
    @Min(value = 0, message = "Offsides cannot be negative.")
    private Integer offsides = 0;
}
