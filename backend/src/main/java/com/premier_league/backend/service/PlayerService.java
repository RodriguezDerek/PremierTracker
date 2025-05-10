package com.premier_league.backend.service;

import com.premier_league.backend.DTO.GenericResponse;
import com.premier_league.backend.DTO.PlayerResponse;
import com.premier_league.backend.exceptions.PlayerAlreadyExistsException;
import com.premier_league.backend.exceptions.PlayerNotFoundException;
import com.premier_league.backend.model.Player;
import com.premier_league.backend.repository.PlayerRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    public GenericResponse updatePlayer(@Valid Player updatedPlayer, @NotNull Long id) {
        Optional<Player> optionalPlayer = playerRepository.findById(id);
        if(optionalPlayer.isPresent()){
            Player player = optionalPlayer.get();
            player.setName(updatedPlayer.getName());
            player.setJerseyNumber(updatedPlayer.getJerseyNumber());
            player.setTeam(updatedPlayer.getTeam());
            player.setPosition(updatedPlayer.getPosition());
            player.setNationality(updatedPlayer.getNationality());
            player.setAge(updatedPlayer.getAge());
            player.setWins(updatedPlayer.getWins());
            player.setLosses(updatedPlayer.getLosses());
            player.setGoals(updatedPlayer.getGoals());
            player.setShots(updatedPlayer.getShots());
            player.setShotsOnTarget(updatedPlayer.getShotsOnTarget());
            player.setCleanSheets(updatedPlayer.getCleanSheets());
            player.setAssists(updatedPlayer.getAssists());
            player.setPasses(updatedPlayer.getPasses());
            player.setSaves(updatedPlayer.getSaves());
            player.setYellowCards(updatedPlayer.getYellowCards());
            player.setRedCards(updatedPlayer.getRedCards());
            player.setFouls(updatedPlayer.getFouls());
            player.setOffsides(updatedPlayer.getOffsides());

            playerRepository.save(player);

            return GenericResponse
                    .builder()
                    .message("Player updated successfully")
                    .status(HttpStatus.OK.value())
                    .player(player)
                    .build();
        }

        throw new PlayerNotFoundException("Player not found");
    }

    public GenericResponse deletePlayer(@NotNull Long id) {
        Optional<Player> optionalPlayer = playerRepository.findById(id);
        if(optionalPlayer.isPresent()){
            playerRepository.delete(optionalPlayer.get());
            return GenericResponse
                    .builder()
                    .message("Player deleted successfully")
                    .status(HttpStatus.OK.value())
                    .player(optionalPlayer.get())
                    .build();
        }

        throw new PlayerNotFoundException("Player not found");
    }

    public PlayerResponse getAllPlayers() {
        return PlayerResponse
                .builder()
                .category("All Players")
                .status(HttpStatus.OK.value())
                .playerList(playerRepository.findAll())
                .build();
    }

    public PlayerResponse getPlayersByTeam(@NotBlank String team) {
        return PlayerResponse
                .builder()
                .category("Team: " + team)
                .status(HttpStatus.OK.value())
                .playerList(playerRepository.findAllByTeamIgnoreCase(team))
                .build();
    }

    public PlayerResponse getPlayersByNation(@NotBlank String nation) {
        return PlayerResponse
                .builder()
                .category("Nation: " + nation)
                .status(HttpStatus.OK.value())
                .playerList(playerRepository.findAllByNationalityIgnoreCase(nation))
                .build();
    }

    public PlayerResponse getPlayersByPosition(@NotBlank String position) {
        return PlayerResponse
                .builder()
                .category("Position: " + position)
                .status(HttpStatus.OK.value())
                .playerList(playerRepository.findAllByPositionIgnoreCase(position))
                .build();
    }
}
