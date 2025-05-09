package com.premier_league.backend.controller;

import com.premier_league.backend.DTO.GenericResponse;
import com.premier_league.backend.DTO.PlayerResponse;
import com.premier_league.backend.model.Player;
import com.premier_league.backend.service.PlayerService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/premier-league")
@RequiredArgsConstructor
public class PlayerController {

    private final PlayerService playerService;

    @PostMapping("/players")
    public ResponseEntity<GenericResponse> createPlayer(@Valid @RequestBody Player player){
        return ResponseEntity.status(HttpStatus.CREATED).body(playerService.addPlayer(player));
    }

    @PutMapping("/players")
    public ResponseEntity<GenericResponse> modifyPlayer(@Valid @RequestBody Player updatedPlayer){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.updatePlayer(updatedPlayer));
    }

    @DeleteMapping("/players/{playerName}")
    public ResponseEntity<GenericResponse> deletePlayer(@NotBlank @PathVariable String playerName){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.deletePlayer(playerName));
    }

    @GetMapping("/players")
    public ResponseEntity<PlayerResponse> getAllPlayers(){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.getAllPlayers());
    }

    @GetMapping("/players/team/{team}")
    public ResponseEntity<PlayerResponse> getPlayersByTeam(@NotBlank @PathVariable String team){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.getPlayersByTeam(team));
    }

    @GetMapping("/players/nation/{nation}")
    public ResponseEntity<PlayerResponse> getPlayersByNation(@NotBlank @PathVariable String nation){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.getPlayersByNation(nation));
    }

    @GetMapping("/players/position/{position}")
    public ResponseEntity<PlayerResponse> getPlayersByPosition(@NotBlank @PathVariable String position){
        return ResponseEntity.status(HttpStatus.OK).body(playerService.getPlayersByPosition(position));
    }
}
