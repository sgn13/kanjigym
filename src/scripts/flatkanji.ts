import fs from 'node:fs';

import N4Json from '@/constants/n4.json';

const result = N4Json.flatMap((item) => {
  const { examples, ...rest } = item;

  const parent = {
    ...rest,
    parent_id: null,
    type: 'kanji',
  };

  const words = examples.map((example, index) => ({
    id: `${item.id}_word_${index + 1}`,
    parent_id: item.id,
    parent_kanji: item.kanji,
    type: 'word',
    kanji: example.word,
    answer: example.answer,
    meaning: example.meaning,
    jlpt: item.jlpt,
    category: item.category,
  }));

  return [parent, ...words];
});

fs.writeFileSync(
  'src/constants/flatn4.json',
  JSON.stringify(result, null, 2),
);
