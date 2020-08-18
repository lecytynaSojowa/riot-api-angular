export interface Match {
    champion: number;
    gameId: number;
    lane: Lane;
    platformId: string;
    queue: number;
    role: Role;
    seson: number;
    timestamp: number;
    win: boolean;
    gameDuration: number;
    gameMode: string;
}
enum Role {
    DUO = 'DUO',
    DUO_CARRY = 'DUO_CARRY',
    DUO_SUPPORT = 'DUO_SUPPORT',
    NONE = 'NONE',
    SOLO = 'SOLO',
}
enum Lane {
    TOP_LANE = 'TOP_LANE',
    MID_LANE = 'MID_LANE',
    BOT_LANE = 'BOT_LANE',
    JUNGLE = 'JUNGLE'
}
enum Position {
    TOP = 'TOP',
    MIDDLE = 'MIDDLE',
    JUNGLE = 'JUNGLE',
    BOTTOM = 'BOTTOM',
    UTILITY = 'UTILITY',
    APEX = 'APEX',
    NONE = 'NONE',
}
