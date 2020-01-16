import Settings from '../settings';

test.each([
  ['good case number 1', { theme: 'light', music: 'pop', difficulty: 'hard' }, [['theme', 'light'], ['music', 'pop'], ['difficulty', 'hard']]],
  ['empty case', { theme: '', music: '', difficulty: '' }, [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]],
])(
  ('should calculate %s'),
  (userCase, setData, expected) => {
    const set = new Settings();
    set.setTheme = setData.theme;
    set.setMusic = setData.music;
    set.setDifficult = setData.difficulty;

    const result = Array.from(set.settings);

    expect(result).toEqual(expected);
  },
);
