package com.premier_league.backend.repository;

import com.premier_league.backend.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    Optional<Player> findByName(String name);

    List<Player> findAllByTeamIgnoreCase(String team);
    List<Player> findAllByNationalityIgnoreCase(String nationality);
    List<Player> findAllByPositionIgnoreCase(String position);
}
