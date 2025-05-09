package com.premier_league.backend.service;

import com.premier_league.backend.DTO.GenericResponse;
import com.premier_league.backend.DTO.PlayerResponse;
import com.premier_league.backend.exceptions.PlayerAlreadyExistsException;
import com.premier_league.backend.exceptions.PlayerNotFoundException;
import com.premier_league.backend.model.Player;
import com.premier_league.backend.repository.PlayerRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;

    public GenericResponse addPlayer(@Valid Player player) {
        Optional<Player> optionalPlayer = playerRepository.findByName(player.getName());
        if(optionalPlayer.isEmpty()){
            playerRepository.save(player);
            return GenericResponse
                    .builder()
                    .message("Player successfully added")
                    .status(HttpStatus.CREATED.value())
                    .player(player)
                    .build();
        }

        throw new PlayerAlreadyExistsException("Player already exists");
    }

    public GenericResponse updatePlayer(@Valid Player updatedPlayer) {
        Optional<Player> optionalPlayer = playerRepository.findByName(updatedPlayer.getName());
        if(optionalPlayer.isPresent()){
            //finish this later
        }

        throw new PlayerNotFoundException("Player not found");
    }

    public GenericResponse deletePlayer(@NotBlank String playerName) {
        return null;
    }

    public PlayerResponse getAllPlayers() {
        return null;
    }

    public PlayerResponse getPlayersByTeam(@NotBlank String team) {
        return null;
    }

    public PlayerResponse getPlayersByNation(@NotBlank String nation) {
        return null;
    }

    public PlayerResponse getPlayersByPosition(@NotBlank String position) {
        return null;
    }
}
