/**
 * This hooks only defines state, but not actions
 */
import { useState } from 'react';

export default function useCar() {
  console.log('useCar');
  return useState({ logo: 'string' });
};
