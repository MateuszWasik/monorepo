import type { Transaction } from '@monorepo/shared-types';
import { randomUUID } from 'crypto';

export const transactions: Transaction[] = [
  {
    id: randomUUID(),
    name: 'VISA',
    amount: 23.54,
    date: '20-02-2023',
    merchant: {
      name: 'Apple',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
  {
    id: randomUUID(),
    name: 'VISA',
    amount: 100,
    date: '01-05-2023',
    merchant: {
      name: 'Amazon',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
  {
    id: randomUUID(),
    name: 'MASTERCARD',
    amount: 99.0,
    date: '02-06-2023',
    merchant: {
      name: 'eBay',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
  {
    id: randomUUID(),
    name: 'MASTERCARD',
    amount: 250,
    date: '03-06-2023',
    merchant: {
      name: 'Amazon',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
  {
    id: randomUUID(),
    name: 'VISA',
    amount: 44.32,
    date: '05-06-2023',
    merchant: {
      name: 'Amazon',
      avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
  },
];