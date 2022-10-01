export const TEN_SECONDS = 10 * 1000;

export interface GameProps {
  onCompletedCallback: (didFail: boolean) => void;
}