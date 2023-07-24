export interface Player {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
}

export type AnimationDirection = "up" | "down" | null;
