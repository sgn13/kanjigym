import N3Json from './n3.json';
import N4Json from './n4.json';
import N5Json from './n5.json';

export const kanjiData = {
  // n1: N1Json,
  // n2: N2Json,
  n3: N3Json,
  n4: N4Json,
  n5: N5Json,
};

export const jlptLevel = [
  {
    id: 1,
    level: 'n5',
    rate: 'Beginner',
    active: true,
  },
  {
    id: 2,
    level: 'n4',
    rate: 'Elementary',
    active: true,
  },
  {
    id: 3,
    level: 'n3',
    rate: 'Intermediate',
    active: true,
  },
  {
    id: 4,
    level: 'n2',
    rate: 'Advanced',
    active: false,
  },
  {
    id: 5,
    level: 'n1',
    rate: 'Native',
    active: false,
  },
];
