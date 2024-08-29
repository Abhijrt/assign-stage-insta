import { formatTime } from '~/utils/timeHandler';

describe('formatTime function', () => {
  it('returns the correct string for timestamps within the last hour', () => {
    const currentTimestamp = new Date();
    const pastTimestamp = new Date(currentTimestamp.getTime() - 30 * 60 * 1000);

    expect(formatTime(pastTimestamp)).toBe('30 minutes ago');
  });

  it('returns the correct string for timestamps beyond an hour', () => {
    const currentTimestamp = new Date();
    const pastTimestamp = new Date(
      currentTimestamp.getTime() - 2 * 60 * 60 * 1000
    );

    expect(formatTime(pastTimestamp)).toBe('2 hours ago');
  });

  it('handles singular/plural correctly', () => {
    const currentTimestamp = new Date();
    const pastTimestamp1 = new Date(currentTimestamp.getTime() - 1 * 60 * 1000);
    const pastTimestamp2 = new Date(
      currentTimestamp.getTime() - 1 * 60 * 60 * 1000
    );

    expect(formatTime(pastTimestamp1)).toBe('1 minute ago');
    expect(formatTime(pastTimestamp2)).toBe('1 hour ago');
  });
});
