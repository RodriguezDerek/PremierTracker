package com.premier_league.backend.DTO;

import com.premier_league.backend.model.Player;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PlayerResponse {
    private String category;
    private String status;
    private List<Player> playerList;
}
