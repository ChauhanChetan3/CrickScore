package com.crick.aps.services;

import com.crick.aps.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
    // get all matches
    List<Match> getAllMatches();
    List<Match> getLiveMatches();
    //  get cwc2023 point table
    List<List<String>> getPointTable();
}
