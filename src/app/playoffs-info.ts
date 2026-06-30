export interface PlayoffsInfo {
    Round: string;
    Opponent: string;
    Result: string;
    Games: number;
    MVP: string;
}

export interface PlayoffsGameInfo{
    Round: number;
    Game: number;
    Location: string;
    Opponent: string;
    Result: string;
    GF: number;
    GA: number;
}
